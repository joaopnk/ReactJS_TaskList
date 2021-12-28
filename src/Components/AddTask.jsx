import React, { useState } from 'react';

import './AddTask.css';
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputDate] = useState('');

    // 
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputDate(e.target.value);
    }

    // Lidando com o clique do usuario
    const handleAddTaskClick = () => {
        // Recuperando o value do input e mandando para o handleTaskAddition
        handleTaskAddition(inputData);
       
        //Limpando campo ao adicionar uma nova tarefa
        setInputDate(""); 
    }

    return ( 
        <div className="add-task-container">
            <input onChange={handleInputChange} 
                   className="add-task-input"
                   type="text"
                   value={inputData}
            />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick} >Adicionar</Button>
            </div>

        </div>
    );
}
 
export default AddTask;