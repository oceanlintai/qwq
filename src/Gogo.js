import React, {useState} from 'react';

function Gogo() {

  const [total,setTotal]=0
      return (
      <>
        <h1>{total}</h1>
        <button onClick={()=>{setTotal(total+1)}}></button>
      </>
    );
  }

export default Gogo;
