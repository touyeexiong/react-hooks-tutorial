import React, { useEffect, useState, useRef } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";


const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  });

    const inputRef = useRef(0);

    const [showHello, setShowHello] = useState(true);

    // now every time the count changes, it will be stored in localStorage

  // http://numbersapi.com/43/trivia

  return (
    <div>
      <>
        <button onClick={() => setShowHello(!showHello)}>Toggle</button>
        {showHello && <Hello />}
        <input
          ref={inputRef}
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
      </>

      <button onClick={() => {
        console.log(inputRef.current.focus());
        // needs to be .current to get the current value of the reference 
      }}>focus</button>
    </div>
  );
};

export default App;
