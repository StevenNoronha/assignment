import React from 'react'
import logo from '../assests/pcLogo.png' 

function Subsection() {
  return (
    <div>
        <h2>Related deals you might like for</h2>

        <div className='container' style={{"gap": "4rem"}}>
         {[1, 2, 3].map(index => (
            <div className='container flexUtil dealcard'>
                <img src={logo} width={200} alt='logo'/>
                <p style={{"color": "blue"}}>20% Off &nbsp; &nbsp; Limted time</p>
                <p><h5>Webbuilder 1</h5></p>
                <p>Computer Modern clasic with wix support</p>
                <p><b>$39.96</b> $49.96 <span style={{"color": "red"}}>(20% Off)</span></p>
                <button className='vdbtn'>View Deal</button>
            </div>
            ))}
        </div>

        <div className='subtext container'>
            <div style={{"width": "30vw"}}><h3>Sign up and get exclusive special deals</h3></div>
            <div><input className='sign-bar'/><button className='sbtn'>Sign up</button></div>
        </div>
    </div>
  )
}

export default Subsection