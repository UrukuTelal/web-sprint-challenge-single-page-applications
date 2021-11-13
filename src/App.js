import React, {useState, useEffect} from 'react';
/*
import * as yup from 'yup';

const schema = yup.object().shape({

})
*/

const App = () => {
  const [form, setForm] = useState({
    size: '',
    sauce: '',
    toppings: [],
    substitution: false,
    instructions: '',
    quantity: 0,
    total: 0,
  })

  const [disabled, setDisabled] = useState(true)
  
  const change = event => {
    const {checked, value, name, type} = event.target
    const valueToUse = type === 'checkbox' ? checked : value
    setForm({...form,[name]: valueToUse})
  }

  return (    
      <div className='App'>
      <form onSubmit>
          <label>Size
          <input 
          onChange={change} 
          value={form.size} 
          name='size' type='dropdown' 
          />
          </label>Sauce
          <label>
          <input 
          onChange={change} 
          value={form.sauce} 
          name='sauce' type='radial' 
          />
          </label>
          <label>Toppings
          <input 
          onChange={change} 
          value={form.toppings} 
          name='toppings' type='checkbox' 
          />
          </label>
          <label>Substitution
          <input 
          onChange={change} 
          value={form.substitution} 
          name='substitution' type='boolean' 
          />
          </label>
          
          <label>Special Instructions
          <input 
          onChange={change} 
          value={form.instructions} 
          name='instructions' type='text' 
          />
          </label>
                  
      
      </form>
      </div>
  );
};
export default App;
