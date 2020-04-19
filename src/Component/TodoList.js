import React from 'react';

function TodoList(props) {
    return (
        <>
            {
                props.data.map((k) => <li key={k.id}>{k.val}<button onClick={() => props.delete(k.id)}>X</button></li>)
            }
        </>
    )
}
export default TodoList;