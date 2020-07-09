import React from 'react';
import './styles.css';
import { IncompleteIcon, CompletedIcon, LockedIcon } from '../../icons';

const TaskItem = ({ task, taskIndex, completeTask }) => {
  let icon;
  if(task.completedAt){
    icon = <CompletedIcon /> 
  }else{
    if(task.dependencyIds.length === 0)
      icon = <IncompleteIcon/>
    else icon = <LockedIcon/>
  }
  return (
    <div className='container'>
      <div className='row' style={{ paddingTop: '3%' }}>
        <div className='col-1 taskIcon' onClick={() => completeTask(taskIndex)}>
          {icon}
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
