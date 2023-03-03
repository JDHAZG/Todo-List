import React, { Component } from 'react'
import './index.css'
export default class Item extends Component<any> {
  
  state={mouse:false}
  //鼠标的移入移出
  handMouse =(flag: any)=>{
    return ()=>{
      this.setState({mouse:flag});
    }
  }
  //勾选，取消勾选
  handCheck =(id: any)=>{
    return (event: any)=>{
      // console.log(id,event.target.checked);
      this.props.updateTodo(id,event.target.checked);
    }
  }
  //删除
  handDelete =(id: any)=>{
    if(window.confirm('确定删除吗？')){
      console.log(id);
      this.props.deleteTodo(id);
    }
  }
  render() {
    const {id,name,done,time}=this.props;
    const {mouse}=this.state;
    return (
      <li className={done?"Item finished":"Item"} onMouseEnter={this.handMouse(true)} onMouseLeave={this.handMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handCheck(id)}/>
          <span>{name}</span>
        </label>
        <span>{time}</span>
        <button onClick={()=>this.handDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
      </li>
    )
  }
}
