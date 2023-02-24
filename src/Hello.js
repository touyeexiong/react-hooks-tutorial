import React from "react";


export const Hello = () => {
    React.useEffect(() => {
        console.log('render');
    // cleanup function below
        return() => {
          console.log('unmount');
        }
      }, []); 
      // dependency array
      return <div>hello</div>
}