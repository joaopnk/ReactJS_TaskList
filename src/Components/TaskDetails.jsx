import React from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

import './TaskDetails.css';
import Button from './Button'


const TaskDetails = () => {
    const params = useParams();

    const history = useHistory();
    
    // Voltar paga pagina anterior
    const handleBackButtonClick = () => {
        history.goBack();
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia hic dicta minima est, minus nesciunt.</p>
            </div>
        </>
    );
}
 
export default TaskDetails;