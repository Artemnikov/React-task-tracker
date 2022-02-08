import React from 'react';

import style from './style.module.scss';

export const Help = () => {
  return <div className={style.container}>
    <h1>Help</h1>
    <p>
        To start using the task tracker you need to open a new terminal and run the following command: npm run server
    </p>
    <p>
        the server will open on port 3001 and will start listening for requests.
    </p>
    <p>
        after the server is set up. Click on add button to add a new task. <br />
        to remove task double click on the name of the task. <br />
        to set the status of the task click on the status itself <br />
    </p>
  </div>;
};
