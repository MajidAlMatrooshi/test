import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
    if(event.reset) {
        return {
          department: '',
          name: '',
          address: '',
        }
      }
    return {
      ...state,
      [event.name]: event.value
    }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
  }
  
  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (
    <div className="wrapper">
      <h1>Employee Detais</h1>
      {submitting &&
       <div>You have submitted the following:
       <ul>
         {Object.entries(formData).map(([name, value]) => (
           <li key={name}><strong>{name}</strong>:{value.toString()}</li>
         ))}
       </ul></div>
     }
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" onChange={handleChange} value={formData.name || ''}/>
         </label>
       </fieldset>
       <fieldset>
         <label>
           <p>Address</p>
           <input name="address" onChange={handleChange} value={formData.address || ''}/>
         </label>
       </fieldset>
       <fieldset>
         <label>
           <p>Department</p>
           <select name="department" onChange={handleChange} value={formData.department || ''}>
               <option value="">--Please choose an option--</option>
               <option value="IT">IT</option>
               <option value="Accounts">Accounts</option>
               <option value="Sales">Sales</option>
           </select>
         </label>         
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
