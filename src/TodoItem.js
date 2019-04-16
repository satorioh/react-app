import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    render() {
        let {
            content,
            test
        } = this.props
        return <div onClick={this.handleClick}>{test}-{content}</div>
    }

    handleClick = () =>{
        let {
            deleteItem,
            index
        } = this.props
        deleteItem(index)
    }
}

TodoItem.propTypes = {
    test:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}

TodoItem.defaultProps = {
    test: 'hello'
}

export default TodoItem