import React from 'react';
import './App.css';
import Btn from './Btn';

export default function App() {
  return (
    <div className='flex'>
      <div>
        <Btn text="Click Me!" color="orangered" fontSize={12} />
        <Btn text="Don't Click Me!" color="red" fontSize={12} />
      </div>
      <div>
        <Btn text="Next Button" fontSize={20} />
        <Btn text="Click Me!" color="pink" fontSize={20} />
      </div>
    </div>
  );
}

