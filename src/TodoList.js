import React, { Component,Fragment } from 'react';
import './style.css'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue:'',
      list:[]
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          {/*下面是一个输入框*/}
          <label htmlFor="inputArea">输入</label>
          <input id="inputArea" className='input' value={this.state.inputValue} onChange={this.handleInputValue}/>
          <button onClick={this.handleClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  getTodoItem(){
    return this.state.list.map((item,index)=>{
      return <TodoItem key={index} content={item} index={index} deleteItem={this.handleDelete}/>
    })
  }

  handleInputValue = (e) => {
    this.setState({
      inputValue:e.target.value
    })
  }

  handleClick = () => {
    this.setState({
      list:[...this.state.list, this.state.inputValue],
      inputValue:''
    })
  }

  handleDelete = (index) =>{
    console.log(index)
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list:list
    })
  }
}

export default TodoList;
