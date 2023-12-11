import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { LoginRequest } from '../../services/auth/loginRequest';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, HttpClientModule,CommonModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  
  isLoginMode=true;
  showLoginForm=true;
  loginError:string="";
  loginForm=this.formBuilder.group({
    username:['',[Validators.required,Validators.email]],
    password: ['',Validators.required],
  })
newUsername: any;
newPassword: any;
  constructor(private formBuilder:FormBuilder, private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  get username(){
    return this.loginForm.controls.username;
  }

  get password()
  {
    return this.loginForm.controls.password;
  }
  

  login(){
    if(this.loginForm.valid){
      this.loginError="";
      this.authService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          //console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.info("Login completo");
          this.router.navigateByUrl('/dashboard');
          this.loginForm.reset();
        }
      })

    }
    else{
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
  }


  onSubmit() {
    if (this.isLoginMode) {
        // Supongamos que el inicio de sesión es exitoso
      // Redirige a la página de dashboard
      this.router.navigate(['/dashboard']);

      // Oculta el formulario después de la redirección
      this.showLoginForm = false;
    } else {
     
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.showLoginForm = true; // Asegúrate de mostrar el formulario correspondiente cuando cambias el modo
  }


}
