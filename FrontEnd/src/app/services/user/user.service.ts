import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../auth/user';
import { enviroment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(enviroment.urlApi+"user/"+id).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producio un error ', error.error);
    }
    else{
      console.error('Backend retornó el código de estado ', error);
    }
    return throwError(()=> new Error('Something went wrong. Please try again.'));
  }
}
