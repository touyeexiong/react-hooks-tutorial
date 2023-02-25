import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  });

  const [showHello, setShowHello] = useState(true);

  // useEffect(() => {
  //     const onMouseMove = e => {
  //       console.log(e);
  //     };
  //     window.addEventListener('mousemove', onMouseMove)

  //     return () => {
  //       window.removeEventListener('mousemove', onMouseMove)
  //     };
  // }, []);
  // dependency array

  useEffect(() => {
    console.log('mount1');
    
  }, [])

  useEffect(() => {
    console.log('mount2');
    
  }, [])

  return (
    <div>
      <>
        {/* <button onClick={() => setShowHello(!showHello)}>Toggle</button> */}
        {/* {showHello && <Hello />} */}

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
      </>
    </div>
  );
};

export default App;
