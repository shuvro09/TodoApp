import React from 'react';
import TodoList from './TodoList';
class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            todos: []
        }
    }
    delete = (i) => {
        const newData = this.state.todos.filter(({ k, id }) => { return id !== i })
        this.setState({ todos: newData })
    }
    handleChange = (e) => {
        this.setState({ text: e })
    }
    handleClick = (e) => {
        if (this.state.text !== "") {
            console.log(this.state.text);
            this.state.todos.push({ val: this.state.text, id: this.state.todos.length + 1 })
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
                <TodoList data={this.state.todos} delete={this.delete}></TodoList>
            </div>
        )
    }
}
export default TodoForm;