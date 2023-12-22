import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import SingleTask from "./SingleTask";
const TaskList = ({ tasks, setTasks, completedTasks, setCompletedTasks }) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {tasks?.map((todo, index) => (
              <SingleTask
                index={index}
                tasks={tasks}
                task={todo}
                key={todo.id}
                setTask={setTasks}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
          >
            <span className="todos__heading">Completed Tasks</span>
            {completedTasks?.map((todo, index) => (
              <SingleTask
                index={index}
                tasks={completedTasks}
                task={todo}
                key={todo.id}
                setTodos={setCompletedTasks}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
  completedTasks: PropTypes.array,
  setCompletedTasks: PropTypes.func,
};

export default TaskList;
