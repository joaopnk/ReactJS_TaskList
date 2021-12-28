import react from "react";
import Task from "./Task";

const Tasks = ({tasks, handleTaskClick, handleTaskDelete}) =>{
    console.log(tasks);
    return (
        <>
            {tasks.map( (task) =>  (
                <Task key={task.id}
                      task={task}
                      handleTaskClick={handleTaskClick}
                      handleTaskDelete={handleTaskDelete}
                />
            ))}
        </>
    )
};

export default Tasks;