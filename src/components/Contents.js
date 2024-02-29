import React, { useState } from 'react'
import logo from '../assests/pcLogo.png' 
import Data from '../assests/data';

function Contents() {
    // const [data, setData] = useState([]);
    // setData(Data);
    const data = Data;

  return (
    <>
    {data.map((values)=> { 
        return (
    <div className='container contents'>

        <div className='container flexUtil'><img src={logo} alt='logo' width='250vh'/><p>Builder 1</p></div>

        <div className='text'>
            <p>{values.main_title}</p>
            <h4 style={{"margin": "5px 0px"}}>Main highlights</h4>
            <p style={{"margin": "0px 15px"}}>{values.sec_title}</p>
        </div>

        <div className='container flexUtil'>
            <div className='container flexUtil rating'>
                <h2>{values.rating_score}</h2>
                <p>{values.rating}</p>
                <p>Stars</p>
            </div>
            <button className='vbtn'>View</button>
        </div>

    </div>
    )
    })}
    </>
  )
}

export default Contents