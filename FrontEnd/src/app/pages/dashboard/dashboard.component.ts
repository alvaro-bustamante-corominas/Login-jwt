import { UserService } from './../../services/user/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../services/auth/user';
import { enviroment } from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule],
  providers:[UserService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  user!: User;
  errorMessage:String="";

  constructor(private router: Router, private userService: UserService) {
    this.userService.getUser(enviroment.userId).subscribe({
      next:(userData) =>{
        this.user = userData;
      
      },
      error:(errorData) =>{
        this.errorMessage=errorData;
      },

      complete: () => {
        console.log("User data ok");
      }
      
    });
  }

 
  LogOut() {
    this.router.navigate(['/login']);
  }

}
