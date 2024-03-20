import React, { useState, useEffect } from 'react';
import { Button } from '../../stories/Button.tsx';

export default function Auth() {
  const [data, setData] = useState(null)

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
    <section className='container m-auto h-screen'>
      <div className='grid grid-cols-2'>
        <Button className='my-auto'>Connexion</Button>
        <p>{data !== null ? data.test : ''}</p> 
      </div>
    </section>
  )
}