import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, booleanAttribute, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';

function formatName(value:string){
return "Hi " + value
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule], // commn module for  ng for and formmodule for input change
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
// name:string="ramesh"
// status:string="single"
// salary:number=100000
// //  initiial value di to string number ki need nhi h
// isBtnDisabled=true

// // 2 way databindling
// inputValue="test"

// users=[
//   {name:"ramesh",isSingle:true,salary:20000},
//   {name:"suresh",isSingle:true,salary:50000},
//   {name:"thugesh",isSingle:false,salary:70000},


// ]


// onChange(e:Event){
//   // console.log('called');
//   const value= (e.target as HTMLInputElement).value // actualy ye kuch bhi ho skta h isliya as  as lgya h tkivaue acces kare.
//   // console.log(value);

//   this.inputValue=value;
// }

// parent to child data transfer karne  ke liye
//  har data  compinnet me name ke age hi lag jega data transform function se kar liya.
@Input({alias:"userName",transform:formatName}) name="";
@Input({transform:booleanAttribute}) status!:boolean;// kyoki ye ak boolean h but pareanet me string me pass ki h
@Input({transform:numberAttribute}) salary!:number; // ye aparentbme automatic number me convert ho jegi.

//  now child to parent data pass
@Output() myEvent= new EventEmitter<User>()

sendData(){ // ise hm  parent ko bhej rhe h
  // this.myEvent.emit("coder never quit child data")
  this.myEvent.emit({name:this.name,newSalary:25000})

}

}
