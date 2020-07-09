import React from 'react';
import TaskItem from '../TaskItem';
import { GroupIcon } from '../../icons';

function GroupItemComponent({
  tasks,
  isActive,
  completeTask,
  group,
  groupNamesIndex,
  setIsActive,
  setTasks,
}) {
  console.log(group);
  
  const filterTasks = (groupName) => {
    console.log(groupName);
    setIsActive(false);
    const newTasks = tasks.filter((task) => task.group === groupName);
    setTasks(newTasks);
  };
  if (isActive) {
    return (
      <div>
        <div className='row' style={{ paddingTop: '10px' }}>
          <div className='col-1'>
            <GroupIcon />
          </div>
          <div className='col-11' onClick={() => filterTasks(group)}>
              <p>{group}</p>
              <p>Task Summary</p>
            </div>
        </div>
        <div className='row underlined'></div>
      </div>
    );
  }
  if (!isActive) {
    return (
      <div>
        <div className='row'>
          <div className='col-6'>
            <h1>{group.group}</h1>
          </div>
          <div className='col-6'>
            <p
              style={{ color: 'blue', paddingTop: '3%' }}
              onClick={() => setIsActive(true)}
            >
              ALL GROUPS
            </p>
          </div>
        </div>
        {tasks.map((task, taskIndex) => (
          <TaskItem
            task={task}
            completeTask={completeTask}
            key={taskIndex}
            taskIndex={taskIndex}
          />
        ))}
      </div>
    );
  }
}

export default GroupItemComponent;
