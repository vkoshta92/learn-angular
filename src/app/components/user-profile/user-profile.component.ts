import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, booleanAttribute, numberAttribute, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

// function formatName(value:string){
// return "Hi " + value
// }

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,CountryCodePipe,HighlightDirective], // commn module for  ng for and formmodule for input change
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit , OnDestroy ,OnChanges,AfterViewInit{
// name:string="ramesh"
status:string="single"
phoneNo=123456789
// salary:number=100000
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

// parent to child data transfer karne  ke liye
//  har data  compinnet me name ke age hi lag jega data transform function se kar liya.
@Input({alias:"userName"}) name="";
@Input({transform:booleanAttribute}) isSingle!:boolean;// kyoki ye ak boolean h but pareanet me string me pass ki h
@Input({transform:numberAttribute}) salary!:number; // ye aparentbme automatic number me convert ho jegi.

//  now child to parent data pass
@Output() myEvent= new EventEmitter<User>()
bgColor="blue";
sendData(){
  // this.myEvent.emit("coder never quit child data")
  this.myEvent.emit({name:this.name,newSalary:25000})

}
//   jse query selector se select krte h vas isse krte hai.
@ViewChild("myheading") heading?:ElementRef

constructor(){
// lifecycle method-
// init properties
// dependiesinjection
console.log('constructer called',this.name);
console.log('constructor',this.heading?.nativeElement.textContent);

}

//  jab tempplate ready ho tb hi heading ko use kar te hia bki teno me use kiya h undefined aya
ngAfterViewInit(): void {
  console.log('ngAfterViewInit',this.heading?.nativeElement.textContent);
    
}


  ngOnChanges(changes: SimpleChanges): void {
    // ye multiphle time call hota h
    // throw new Error('Method not implemented.');
    // ye input change hota h. 
    console.log("ng on chnages",changes);
  
  console.log('ngOnChanges',this.heading?.nativeElement.textContent);


  }

ngOnInit(){
  // jab componet ready ho  jse contricter hota h first time
  // init properties
  // dependies inject nhi krre ho
  // initail api call ke liye good place
  // name ki value mil jegi kyoki compnnet ready ho chuke hai
  console.log('ngOn init called',this.name);
  console.log('ngOnInit',this.heading?.nativeElement.textContent);

}

ngOnDestroy(){
  // cleanup like unregerter event listner
  // jase clear se clear kiya h array to sb gyab ho jega to ye called hoga
console.log('componnt destroyed');

}





}
