import React, {useEffect, useState} from "react";
import { useForm } from "./useForm";

function App() {
  const [values, handleChange] = useForm({email: '', password: '', firstName: '' })

  useEffect(() => {
    console.log('render');
// cleanup function below
    return() => {
      console.log('unmount');
      
    }

  }, []); 
  // dependency array

  return (
  <div>
    <input 
      name="email" 
      value={values.email}
      onChange={handleChange}
      placeholder="email"
      />
    <input
      name="firstName"
      placeholder="first name"
      value={values.firstName}
      onChange={handleChange}
      />  
    <input 
    type="password" 
    name="password"
    placeholder="password"
    value={values.password} 
    onChange={handleChange}
    />
  </div>
  );
};

export default App;
