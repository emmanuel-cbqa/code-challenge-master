import React, { useState } from 'react';
import './App.css';
import GroupItemComponent from './components/GroupsItemComponent';
import data from './data/data.json';

function App() {
  const [isActive, setIsActive] = useState(true);
  const [tasks, setTasks] = useState(data);
  const groupNames = [];
  // eslint-disable-next-line array-callback-return
  tasks.map(task => {
    const { group } = task;
    if (!groupNames.includes(group)){
      groupNames.push(group);
    }
  });

  const completeTask = (index) => {
    console.log(index);
    const newTasks = [...tasks];
    newTasks[index].completedAt ? newTasks[index].completedAt = null : newTasks[index].completedAt = true;
    if(newTasks[index].completedAt){
      // eslint-disable-next-line array-callback-return
      newTasks.map(task => {
        //search for all the tasks that have this dependencyId
        const indexToRemove = task.dependencyIds.indexOf(newTasks[index].id);
        if (indexToRemove > -1)
          task.dependencyIds.splice(indexToRemove, 1);
      })
    }
    console.log(newTasks);
    setTasks(newTasks);
  };

  return (
    <div className='container' style={{ paddingTop: '5%' }}>
      <div className='row'>
        <h1 style={{ display: isActive ? '' : 'none' }}>Things to do</h1>
      </div>

      {groupNames.map((group, groupNamesIndex) => (
        <div key={groupNamesIndex} className='row'>
          <div className='col'>
            <GroupItemComponent
              tasks={tasks}
              setIsActive={setIsActive}
              isActive={isActive}
              completeTask={completeTask}
              groupNamesIndex={groupNamesIndex}
              group={group}
              setTasks={setTasks}
              // filterTasks={filterTasks}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
