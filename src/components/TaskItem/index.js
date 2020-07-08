import React from 'react';
import './styles.css';
import { IncompleteIcon, CompletedIcon } from '../../icons';

const TaskItem = ({ task, taskIndex, completeTask }) => {
  return (
    <div className='container'>
      <div className='row' style={{ paddingTop: '3%' }}>
        <div className='col-1 taskIcon' onClick={() => completeTask(taskIndex)}>
          {task.completedAt ? <CompletedIcon /> : <IncompleteIcon />}
        </div>
        <div
          className='col-11'
          style={{ textDecoration: task.completedAt ? 'line-through' : '' }}
        >
          {task.task}
        </div>
      </div>
      <div className='row underlined'></div>
    </div>
  );
};

export default TaskItem;
