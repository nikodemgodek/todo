import React, {useState} from 'react'
import TodoForm from './TodoForm'

import { AiFillCheckCircle } from 'react-icons/ai'
import { RiEdit2Fill } from 'react-icons/ri'
import { MdCancel } from 'react-icons/md'
import { IoIosArrowRoundBack } from 'react-icons/io'

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
          id: null,
          value: ''
        });
      };

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div 
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                {!todo.isComplete ? (
                    <div className="icon">
                        <AiFillCheckCircle
                            onClick={() => completeTodo(todo.id)}
                        />
                    </div>
                ) : (
                    <div className="icon">
                        <IoIosArrowRoundBack
                            onClick={() => completeTodo(todo.id)}
                        />
                    </div>
                )}


                <div className="icon">
                    <MdCancel 
                        onClick={() => removeTodo(todo.id)}
                        className='delete-icon'
                    />
                </div>
                {!todo.isComplete ? (
                    <div className="icon">
                    <RiEdit2Fill 
                        onClick={() => setEdit({id: todo.id, value: todo.text})}
                    />
                </div> 
                ) : (
                    <div className="icon none">
                        <RiEdit2Fill 
                            onClick={() => setEdit({id: todo.id, value: todo.text})}
                        />
                    </div> 
                )}
            </div>
        </div>
    ));
};

export default Todo;