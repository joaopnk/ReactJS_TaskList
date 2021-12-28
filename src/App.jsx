import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom';


import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import TaskDetails from './Components/TaskDetails';


import './App.css';


const App = () => {
    const [tasks, setTasks] = useState([
      {
        id: '1',
        title: 'Estudar Next.js',
        completed: false,
      },
      {
        id: '2',
        title: 'Estudar node.js',
        completed: true,
      }
    ]);

    //Fazendo requisição (api)
    useEffect(() => {
        const fetchTasks = async () => {
          const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
          setTasks(data);
        }

        fetchTasks();
    }, []);

    // Função para alterar task (completa ou não [true/false])
    const handleTaskClick = (taskId) => {
        const newTasks = tasks.map( (task) => {
          // Alterando caso o id seja igual (alterando para o oposto do estado anterior)
          if (task.id == taskId) return { ... task, completed: !task.completed}
          return task;
        });

        setTasks(newTasks);
    }
  
    const handleTaskDelete = (taskId) => {
      // capturando todas as task para remover a que for do id solicitado
      const newTasks = tasks.filter(task => task.id != taskId)
      setTasks(newTasks);
    }

    // const handleTaskDelete = (taskId) => {
    //   const deleteTask = task.map ( (task) => {
    //     return { ... task.filter()}
    //   })
    // }

    // Função para receber a tarefa (title)
    const handleTaskAddition = (taskTitle) => {
        const newTask = [
          // para adicionar na frente de todos: ...
          ... tasks,
          {
            title: taskTitle,
            id: uuidv4(),
            completed: false,
          },
      ];

      setTasks(newTask);
    };
    return (
      <Router> 
        <div className="container">
          <Header />
          <Route  
                  path="/"
                  exact
                  render={() => (
                    <>
                      <AddTask handleTaskAddition={handleTaskAddition} />
                      <Tasks
                        tasks={tasks}
                        handleTaskClick={handleTaskClick} 
                        handleTaskDelete={handleTaskDelete}>       
                      </Tasks>
                    </> 
                  )} 
          />
          <Route path="/:taskTitle" exact component={TaskDetails}

          />
        </div>
      </ Router >
    )
  
}

export default App;