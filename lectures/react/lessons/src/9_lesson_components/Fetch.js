import React from 'react';

export const Fetch = () => {
  async function fetchData() {
    try {
      const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5', {
        mode: 'cors',
        method:'GET',
        headers: {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'no-cors'
        }
      })
      const data = await response.json()

      console.log(data)
      
    } catch (error) {
      console.error(error);
    }
  }

  return <div>
    <h2>Fetch</h2>
    <button onClick={fetchData}>Fetch data</button>
    </div>;
};
