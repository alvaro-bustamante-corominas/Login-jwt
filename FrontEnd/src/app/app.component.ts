import { Component, inject } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,RouterOutlet, ReactiveFormsModule, DashboardComponent, HttpClientModule,
     FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  title = 'frontend logion';
  constructor(private router: Router) {
    this.router.navigate(['/login']);
  }
}
