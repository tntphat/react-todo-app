import React, {useState} from 'react';

const Todo = ({todos,text, setTodos, todo}) => {
    const [deleted, setDelete] = useState(false);
    const deleteHandler = () => {
        setDelete(true);
        setTimeout(() =>{
            setTodos(todos.filter(ele => ele.id !== todo.id))
        }, 200)
    };

    const completeHandler = () => {
        setTodos(todos.map(ele => ele.id === todo.id ? {...ele, completed: !ele.completed} : ele))
    }
    return (
        <div className={`todo ${todo.completed? 'completed' :''} ${deleted? 'fall' : ''} `}>
            <li className={ `${todo.completed?'completed': ''} ${deleted? 'fall' : ''} todo-item`}>{text}</li>
            <button className='btn complete-btn' onClick={completeHandler}><i className="fas fa-check" /></button>
            <button className='btn trash-btn' onClick={deleteHandler}><i className="fas fa-trash" /></button>

        </div>
    )
};

export default Todo