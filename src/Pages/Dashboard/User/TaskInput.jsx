import PropTypes from "prop-types";
import { useRef } from "react";

const TaskInput = ({ task, setTask, handleAdd }) => {
  const inputRef = useRef(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter a Task"
        value={task}
        ref={inputRef}
        onChange={(e) => setTask(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};
TaskInput.propTypes = {
  task: PropTypes.string,
  setTask: PropTypes.func,
  handleAdd: PropTypes.func,
};

export default TaskInput;
