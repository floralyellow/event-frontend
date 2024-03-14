import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost/api/test',{
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({"test" : 1})
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data !== null ? <pre>{data.test} </pre> : 'Loading...'}
    </div>
  );
}

export default App;
