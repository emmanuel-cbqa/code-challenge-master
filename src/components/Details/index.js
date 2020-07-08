import React from 'react';
import { GroupIcon } from '../../icons';

const Details = () => {
  return (
    <div className='grid-container'>
      <h1>Things To Do</h1>
      <hr />
      <div className='row-grid'>
        <div className='icon'>
          <GroupIcon />
        </div>
        <div>
          <p className='GroupName'>
            Task Group 2 <br />
            <span>Task Summary</span>
          </p>
        </div>
      </div>
      <div className='row-grid'>
        <div className='icon'>
          <GroupIcon />
        </div>
        <div>
          <p className='GroupName'>
            Task Group 2 <br />
            <span>Task Summary</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
