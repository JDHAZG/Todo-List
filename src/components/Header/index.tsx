import React, { Component } from 'react'
import *as uuid from 'uuid'
import dayjs from 'dayjs'
import './index.css'
export default class Header extends Component<any> {
  handleKey = (event: any)=>{
    //判断是否回车键
    if(event.keyCode!==13)
    return;
    const todoObj ={id:uuid.v4(),name:event.target.value,time:dayjs().format('MM[月]DD[日]HH[:]mm[:]ss'),done:false}
    this.props.addTodo(todoObj);
    event.target.value='';
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKey} type="text" placeholder="What needs to be done?"/>
      </div>
    )
  }
}
