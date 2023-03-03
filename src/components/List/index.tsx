import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class List extends Component<any> {
  render() {
    const {todos,updateTodo,deleteTodo} =this.props;
    return (
      <ul className="todo-main">
        {
          todos.map((todo: any)=>{
            if(todo.id)
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          })
        }
      </ul>
    )
  }
}
