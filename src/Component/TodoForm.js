import React from 'react';
import TodoList from './TodoList';
class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            text: '',
            todos: []
        }
    }

    // handleClick = () => {
    //     console.log("hello")
    // }
    handleChange(e) {
        this.setState({ text: e })
    }
    handleClick(e) {
        //

        if (this.state.text !== "") {
            console.log(this.state.text);
            this.state.todos.push(this.state.text)
            this.handleChange("")
        }
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter your task" onChange={(e) => { this.handleChange(e.target.value) }}
                    value={this.state.text} />
                <button onClick={this.handleClick}>Add Task</button>
                <br></br>
                <TodoList data={this.state.todos} ></TodoList>
            </div>
        )
    }
}
export default TodoForm;