import React, { useState, useEffect } from 'react'

function Bpart(props) {

    const [cityn, setCityn] = useState("Dharuhera");
    const [entering, setEntering] = useState("NULL");
    const [country, setCountry] = useState("In");
    const [temp, setTemp] = useState(0);
    const [type, setType] = useState("");
    const [humid, setHumid] = useState(0);
     

    const changing = (event) => {
        let newval = event.target.value;
        setCityn(newval);
    }

    useEffect(() => {

        clicking();

    },[])

    const aboutweather = async () => {

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityn}&appid=b885d583a2b6873491af9d5ac0c70769`;
        let datafetching = await fetch(url);
        let parseddata = await datafetching.json();
       
        console.log(parseddata);
        // console.log(parseddata.sys.country);
        setCountry(parseddata.sys.country);
        console.log(parseddata.main.temp-273);
        setTemp(parseddata.main.temp-273);
        console.log(parseddata.weather[0].description);
        setType(parseddata.weather[0].description);
        setHumid(parseddata.main.humidity);

    }

    // const changecouncit=(event)=>{
        
    //     setCouncit(event.parseddata.sys.country);
    // }

    const clicking=()=>{
        setEntering(cityn);
        aboutweather();
        
        
    }

    return (

//  
<div className="containeree text-center" >
        <div className="container " id='header' >
            <div className='heading text-center my-3' >
                <h1>WEATHER TELLER</h1>
            </div>

            
            <div className=" cc form-floating  ">
            
                <textarea style={{width:"50%"}} onChange={changing} className="  form-control  " value={cityn} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label  htmlFor="floatingTextarea ">CITY/DISTRICT/STATE:-</label>
            </div>
            

            <div className="but text-center " >
            <button style={{border:"2px solid grey"}} type="button" value={entering} onClick={clicking} className="btn btn-light my-1 ">Check Weather</button>
            </div>


{/*  */}
            <div className="baxxa" style={{display:"flex"}}>

            
            <div className="card text-dark bg-light mb-3 my-3 mx-auto " style={{ maxWidth: "18rem", }}>

                <div className="card-header"><b>{entering} </b> <small   style={{ position: "absolute", right: "4px" }}><b>({country})</b></small>
                </div>

                <div className="card-body">
                    
                    <p className="card-text"><b>TYPE:-</b>{type}
                    </p>

                    <p className="card-text"><b>TEMPERATURE:-</b> {Math.round((temp + Number.EPSILON) * 100) / 100}&deg;C
                    </p>


                    <p className="card-text"><b>HUMIDITY:-</b>{humid}
                    </p>

                </div>

            </div>
            </div>

{/*  */}


        </div>
        </div>
    )
}

export default Bpart
