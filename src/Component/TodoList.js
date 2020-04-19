import React from 'react';
class TodoList extends React.Component {

    render() {
        return (
            <>
                {
                    this.props.data.map((k) => <li key={k.id}>{k.val}<button onClick={() => this.props.delete(k.id)}>X</button></li>)
                }
            </>
        )
    }
}
export default TodoList;