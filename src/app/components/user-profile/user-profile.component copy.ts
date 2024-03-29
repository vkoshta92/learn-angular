import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule], // commn module for  ng for and formmodule for input change
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
name:string="ramesh"
status:string="single"
salary:number=100000
//  initiial value di to string number ki need nhi h
isBtnDisabled=true

// 2 way databindling
inputValue="test"

users=[
  {name:"ramesh",isSingle:true,salary:20000},
  {name:"suresh",isSingle:true,salary:50000},
  {name:"thugesh",isSingle:false,salary:70000},


]


onChange(e:Event){
  // console.log('called');
  const value= (e.target as HTMLInputElement).value // actualy ye kuch bhi ho skta h isliya as  as lgya h tkivaue acces kare.
  // console.log(value);

  this.inputValue=value;
}
}
