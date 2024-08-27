import TodoListItem from './TodoListItem';
import Todo from '../constants';
import React from 'react';
import {v4 as uuidv4} from 'uuid';

const TodoList = ({todo, setTodo}: {todo: Todo[]; setTodo: Function}) => {
    const onRemove = (text: string) => {
        setTodo(todo.filter((eachtodo) => eachtodo.text != text));
    };
    return (
        <>
            {todo.map((eachtodo) => (
                <TodoListItem key={uuidv4()} todo={{id: eachtodo.id, text: eachtodo.text, selected: eachtodo.selected,}}
                onremove={() => onRemove(eachtodo.text)} />
            ))}
        </>
    );
};

export default TodoList;