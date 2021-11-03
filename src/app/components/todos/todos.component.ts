import { Component, OnInit } from '@angular/core';
import {Todo}from './../../models/Todo';
//import { title } from 'process';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 
  todos!:Todo[];
  inputTodo:string="";
  showUpdate:boolean=false;
  selectedItemIndex!:any;
  constructor() {  }

  ngOnInit(): void {
   this.todos=[
     {
       content:'hi',
       completed:false
     },{
      content:'this is a todo-list',
      completed:false
     }
   ]
  }
 toggleDone(id:number){
    this.todos.map((v,i)=>{
      if(i==id) v.completed=!v.completed;

     return v;
    })
  }
 deleteTodo (id:number){
//this.todos=this.todos.filter((v,i)=>i!==id);
this.todos.splice(id,1);

 }

 addTodo(){
   this.todos.push({
     content:this.inputTodo,
     completed:false
   });

   this.inputTodo="";
 }
 editTodo(id:number){
this.inputTodo=this.todos[id].content;
this.showUpdate=true;
this.selectedItemIndex=id;
 }
 updateTodoItem(){
this.todos[this.selectedItemIndex].content=this.inputTodo;
this.showUpdate=false;
this.inputTodo="";
this.selectedItemIndex="";
}

}
