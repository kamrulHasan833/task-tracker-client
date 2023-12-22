import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
const SingleTask = ({ index, task, tasks, setTasks }) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(task.todo);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e) => {
    e.preventDefault();
    setTasks(
      tasks.map((todo) =>
        todo.id === index ? { ...todo, todo: editTodo } : todo
      )
    );
    setEdit(false);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((todo) => todo.id !== id));
  };

  const handleDone = (id) => {
    setTasks(
      tasks.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          onSubmit={(e) => handleEdit(e, task.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`todos__single ${snapshot.isDragging ? "drag" : ""}`}
        >
          {edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todos__single--text"
              ref={inputRef}
            />
          ) : task.isDone ? (
            <s className="todos__single--text">{task.todo}</s>
          ) : (
            <span className="todos__single--text">{task.todo}</span>
          )}
          <div>
            <span
              className="icon"
              onClick={() => {
                if (!edit && !task.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(task.id)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(task.id)}>
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

SingleTask.propTypes = {
  task: PropTypes.object,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
  index: PropTypes.number,
};

export default SingleTask;
