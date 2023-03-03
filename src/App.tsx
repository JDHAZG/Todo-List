import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Title from './components/Title'

export default class App extends Component {
  state = {
    todos:[{id:null,name:null,done:null,time:null}],
    finished_todos:[{id:null,name:null,done:null,time:null}],
    unfinished_todos:[{id:null,name:null,done:null,time:null}]
};

  //用于添加一个todo
  addTodo =(todoObj: any)=>{
    const {todos,finished_todos,unfinished_todos}=this.state;
    const newFinishedTodos=[todoObj,...finished_todos];
    const newTodos=[...newFinishedTodos,...unfinished_todos];
    this.setState({todos:newTodos,finished_todos:newFinishedTodos});
  }
  
  //用于更新todo是否勾选
  updateTodo=(id: any,done: any)=>{
    const {todos,finished_todos,unfinished_todos}=this.state;
    if(done===true){
      const newUnFinishedTodos=[...unfinished_todos,...finished_todos.filter((todoObj) => {
        return todoObj.id===id;
      })];
      newUnFinishedTodos.forEach((todoObj) => {
        if(todoObj.id===id) 
        todoObj.done=done;
      })
      const newFinishedTodos =finished_todos.filter((todoObj) => {
        return todoObj.id!==id;
      })
      newFinishedTodos.sort(function(a:any,b:any){return b.time-a.time});
      newUnFinishedTodos.sort(function(a:any,b:any){return b.time-a.time});
      const newTodos=[...newFinishedTodos,...newUnFinishedTodos];
      this.setState({todos:newTodos,finished_todos:newFinishedTodos,unfinished_todos:newUnFinishedTodos});
    }
    else {
      const newFinishedTodos=[...finished_todos,...unfinished_todos.filter((todoObj) => {
        return todoObj.id===id;
      })];
      newFinishedTodos.forEach((todoObj) => {
        if(todoObj.id===id) 
        todoObj.done=done;
      })
      const newUnFinishedTodos =unfinished_todos.filter((todoObj) => {
        return todoObj.id!==id;
      })
      newFinishedTodos.sort(function(a:any,b:any){return b.time-a.time});
      newUnFinishedTodos.sort(function(a:any,b:any){return b.time-a.time});
      const newTodos=[...newFinishedTodos,...newUnFinishedTodos];
      this.setState({todos:newTodos,finished_todos:newFinishedTodos,unfinished_todos:newUnFinishedTodos});
    }
  }
  //用于删除todo
  deleteTodo=(id:any)=>{
    const {todos,finished_todos,unfinished_todos}=this.state;
    const newTodos=todos.filter((todoObj)=>{
      return todoObj.id !== id;
    })
    const newFinishedTodos =finished_todos.filter((todoObj) => {
      return todoObj.id!==id;
    })
    const newUnFinishedTodos=unfinished_todos.filter((todoObj) => {
      return todoObj.id!==id;
    })
    this.setState({todos:newTodos,finished_todos:newFinishedTodos,unfinished_todos:newUnFinishedTodos});
  }

  render() {
    return (
      <div>
        <Title />
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          </div>
        </div>
      </div>
    )
  }
}
