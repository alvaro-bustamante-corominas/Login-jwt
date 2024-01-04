import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
import { LoginRequest } from './loginRequest';
import { User } from './user';
import { enviroment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
  
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<String> =new BehaviorSubject<String>("");

  constructor(private http: HttpClient) {
    this.currentUserLoginOn = new BehaviorSubject<boolean>(sessionStorage.getItem("token")!=null);
    this.currentUserData = new BehaviorSubject<String>(sessionStorage.getItem("token") || "");
  }

  login(credentials:LoginRequest):Observable<any>{
    return this.http.post<any>(enviroment.urlHost+"auth/login",credentials).pipe(
      tap( (userData) => {
        sessionStorage.setItem("token",userData.token);
        this.currentUserData.next(userData.token);
        this.currentUserLoginOn.next(true);
              
      }),
      map((userData) => userData.token),
      catchError(this.handleError)
    );
  }

  signUp(credentials: LoginRequest):Observable<any> {
    return this.http.post<any>(enviroment.urlHost+"auth/register",credentials).pipe(
      tap( (userData) => {
        sessionStorage.setItem("token",userData.token);
        this.currentUserData.next(userData.token);
        this.currentUserLoginOn.next(true);
              
      }),
      map((userData) => userData.token),
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Error ', error.error);
    }
    else{
      console.error('Backend retornó el código de estado ', error.status, error.error);
    }
    return throwError(()=> new Error('Email or Password are wrong, please try again.'));
  }

  get userData():Observable<String>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

  // Implementa métodos adicionales para manejar el token, cerrar sesión, etc.

  logOut():void {
    sessionStorage.removeItem("token");
    this.currentUserLoginOn.next(false);
      
  }
}
