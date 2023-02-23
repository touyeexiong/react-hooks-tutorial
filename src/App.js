import React, {useState} from "react";
import { useForm } from "./useForm";

function App() {
  const [values, handleChange] = useForm({email: '', password: ''})

  return (
  <div>
    <input 
      name="email" 
      value={values.email}
      onChange={handleChange}/>
    <input 
    type="password" 
    name="password"
    value={values.password} 
    onChange={handleChange}
    />
  </div>
  );
};

export default App;
