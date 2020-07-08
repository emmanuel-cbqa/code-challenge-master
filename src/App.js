import React, { useState } from 'react';
import './App.css';
import GroupItemComponent from './components/GroupsItemComponent';

function App() {
  const [isActive, setIsActive] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      group: 'Purchases',
      task: 'Go to the bank',
      dependencyIds: [],
      completedAt: null,
    },
    {
      id: 2,
      group: 'Purchases',
      task: 'Buy hammer',
      dependencyIds: [1],
      completedAt: null,
    },
    {
      id: 3,
      group: 'Purchases',
      task: 'Buy wood',
      dependencyIds: [1],
      completedAt: null,
    },
    {
      id: 4,
      group: 'Purchases',
      task: 'Buy nails',
      dependencyIds: [1],
      completedAt: null,
    },
    {
      id: 5,
      group: 'Purchases',
      task: 'Buy paint',
      dependencyIds: [1],
      completedAt: null,
    },
    {
      id: 6,
      group: 'Build Airplane',
      task: 'Hammer nails into wood',
      dependencyIds: [2, 3, 4],
      completedAt: null,
    },
    {
      id: 7,
      group: 'Build Airplane',
      task: 'Paint wings',
      dependencyIds: [5, 6],
      completedAt: null,
    },
    {
      id: 8,
      group: 'Build Airplane',
      task: 'Have a snack',
      dependencyIds: [],
      completedAt: null,
    },
  ]);

  const groupNames = [
    {
      group: 'Purchases',
    },
    {
      group: 'Build Airplane',
    },
  ];

  console.log(groupNames);

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completedAt = true;
    setTasks(newTasks);
  };

  return (
    <div className='container' style={{ paddingTop: '5%' }}>
      <div className='row'>
        <h1 style={{ display: isActive ? '' : 'none' }}>Things to do</h1>
      </div>

      {groupNames.map((group, groupNamesIndex) => (
        <div className='row'>
          <div className='col'>
            <GroupItemComponent
              tasks={tasks}
              setIsActive={setIsActive}
              isActive={isActive}
              completeTask={completeTask}
              groupNamesIndex={groupNamesIndex}
              group={group}
              key={groupNamesIndex}
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
