import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import * as yup from 'yup';
import Form from './components/Form';

const schema = yup.object().shape({

})

const initialFormValues = {
  username: '', size: '', checked: false, instructions: ''
}

const App = () => {
  
const [ formValues, setFormValues] = useState(initialFormValues);
const handleChange = (name, value) => {
  setFormValues({...formValues, [name]: value});
}

  return (    
      <div className='App'>
        <Form values={formValues} />
      </div>
  );
};
export default App;
