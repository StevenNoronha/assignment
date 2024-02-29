import React from 'react'

function Header() {
  return (
    <div className='header container flexUtil'>

        <h1>Best Website builders in the US</h1>

        <hr/>

        <div className='container headerIn' >
        <div className='container' style={{"gap": "1rem"}}>
        <p>Last Updated - February 22, 2020</p>   
        <p>Advertising Disclosure</p>
        </div>
        <p>Top Relevant</p>
        </div>

        <hr/>

        <ul className='container' style={{"gap": "5rem"}}>
            <li>Tools</li>
            <li>AWS Builder</li>
            <li>Start Build</li>
            <li>Build Supplies</li>
            <li>Tooling</li>
            <li>BlueHosting</li>
        </ul>

        <ul className='container' >
            <li>Home &gt; Hosting for all &gt; Hosting &gt; Hosting6 &gt; Hosting5 </li>
        </ul>
        
    </div>
  )
}

export default Header