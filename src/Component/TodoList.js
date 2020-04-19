import React from 'react';
class TodoList extends React.Component {

    render() {
        return (
            <>
                {
                    this.props.data.map((k, i) => <li key={i}>{k}</li>)
                }
            </>
        )
    }
}
export default TodoList;