import React from 'react'
import logo from './Alogo.png'
function Navbar() {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-evenly" style={{backgroundColor:"#a8ccf4"}}>

            <div className="subpart"></div>
                <div className="container-fluid">

                <nav className="navbar navbar-light "style={{backgroundColor:"#a8ccf4"}}>
                    <div className="container-fluid" style={{gap:"10px"}}>
                    <img  src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top "/>
                        <a className="navbar-brand" href="/">
                    
                         WEATHER 
                        </a>
                    </div>
                    </nav>

                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                         
                        </ul>
                        
                    </div>
                </div>
            

            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/"><b>HELP</b></a>
                            </li>
                         
                        </ul>
                        
                    </div>
            

            
            </nav>


            



        
    )
}

export default Navbar
