import React, { Component,Fragment } from 'react';

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue:'',
      list:['学习英语','学习数学']
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          {/*下面是一个输入框*/}
          <input value={this.state.inputValue} onChange={this.handleInputValue.bind(this)}/>
          <button onClick={this.handleClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return <li key={index} onClick={this.handleDelete.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    );
  }

  handleInputValue(e) {
    this.setState({
      inputValue:e.target.value
    })
  }

  handleClick(e) {
    this.setState({
      list:[...this.state.list, this.state.inputValue],
      inputValue:''
    })
  }

  handleDelete(index){
    console.log(index)
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list:list
    })
  }
}

export default TodoList;
