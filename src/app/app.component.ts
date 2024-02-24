import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // module me import ki ned  nhi hai
  imports: [RouterOutlet,UserProfileComponent,CommonModule],
  templateUrl: './app.component.html',
  // template:`
  // <h1> hellow vishnu</h1>
  // `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-ng-app';

  users=[
  {name:"ramesh",isSingle:true,salary:20000},
  {name:"suresh",isSingle:true,salary:50000},
  {name:"thugesh",isSingle:false,salary:70000},


]

}
