import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import * as yup from 'yup';
import Form from './components/Form';

const schema = yup.object().shape({

})


const App = () => {
  

 

  return (    
      <div className='App'>
        <Form />
      </div>
  );
};
export default App;
