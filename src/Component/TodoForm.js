import React from 'react';
import TodoList from './TodoList';
import { v4 as uuid } from 'uuid';
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
            this.state.todos.push({ val: this.state.text, id: uuid() })
            this.handleChange("")
        }
    }
    render() {
        return (
            <>
                <input type="text" placeholder="Enter your task" className="inputTask" onChange={(e) => { this.handleChange(e.target.value) }}
                    value={this.state.text} />
                <button className="addTask" onClick={this.handleClick}>Add Task</button>
                <br></br>
                <div className="list">
                <TodoList data={this.state.todos} delete={this.delete}></TodoList>
                </div>
            </>
        )
    }
}
export default TodoForm;
