import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  TodoBox,
  TodoButton,
  TodoCheckbox,
  TodoFormControlLabel,
  TodoInput,
} from "./todos.styled";
import { todoAdded, todoToggled } from "./todosSlice";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
export default function Todos() {
  const [currentTodo, setCurrentTodo] = React.useState("" as string);
  const todos: [Todo] = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("change in todos", todos);
  }, [todos, currentTodo]);

  const handleAddTodo = (event: any) => {
    event.preventDefault();
    console.log("Add Todo");
    dispatch(
      todoAdded({ id: todos.length + 1, text: currentTodo, completed: false })
    );
    setCurrentTodo("");
  };

  const currentTodoChanged = (event: any) => {
    setCurrentTodo(event.target.value);
  };

  const setTodoStatus = (id: number) => {
    console.log("id fetched ----->", id);
    dispatch(todoToggled({ id: id }));
  };

  return (
    <>
      <TodoBox>
        <form onSubmit={handleAddTodo}>
          <TodoInput
            label="Add Todo"
            variant="outlined"
            value={currentTodo}
            onChange={currentTodoChanged}
          />
          <TodoButton variant="contained" onClick={handleAddTodo}>
            Add Todo
          </TodoButton>
          <ul style={{ listStyle: "none" }}>
            {todos.map((todo) => (
              <li key={todo.id}>
                {/* <input type="checkbox" checked={todo.completed} />
                {todo.text} */}
                <TodoFormControlLabel
                  control={
                    <TodoCheckbox
                      checked={todo.completed}
                      disabled={todo.completed}
                      onChange={() => {
                        setTodoStatus(todo.id);
                      }}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label={todo.text}
                />
              </li>
            ))}
          </ul>
        </form>
      </TodoBox>
    </>
  );
}
