import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapper from "../../../Components/Shared/SectionWrapper";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
const Tasks = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [CompletedTasks, setCompletedTasks] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, { id: Date.now(), task, isDone: false }]);
      setTask("");
    }
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = tasks;
    let complete = CompletedTasks;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTasks(complete);
    setTasks(active);
  };

  return (
    <section>
      <SectionWrapper>
        <SectionHeader title="Your Tasks" />

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="App">
            <span className="heading">Taskify</span>
            <TaskInput task={task} setTask={setTask} handleAdd={handleAdd} />
            <TaskList
              tasks={tasks}
              setTasks={setTasks}
              CompletedTasks={CompletedTasks}
              setCompletedTasks={setCompletedTasks}
            />
          </div>
        </DragDropContext>
      </SectionWrapper>
    </section>
  );
};

export default Tasks;
