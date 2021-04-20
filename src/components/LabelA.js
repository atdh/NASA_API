//import Map from "./Map"
import { Link} from "react-router-dom";
import React, {useState, useEffect} from "react";


const apiKeys = process.env.REACT_NEW_API_KEY;

export default function LabelA(){

    const[apodData,setApodData] = useState([]);

    useEffect(()=>{
        const fetchApod = async() =>{
            const res = await fetch(

               // `https://api.nasa.gov/planetary/apod?api_key=${apiKey}$`
                //`https://api.nasa.gov/planetary/apod?api_key=${apiKeys}`
                `https://api.nasa.gov/planetary/apod?api_key=01zHnhWJQ9puBlbpwb0AV7CD4ps03wjFVugMVo2m`


            );

            const data = await res.json();
            setApodData(data);
        }
        fetchApod();
        console.log(apodData);
    })


    return(
        <div className="apod">
            <h1>{apodData.title}</h1>
           <br>

           </br>

           <img src={apodData.url} alt="hello"/>
           <Link className="photo-link" to="/photo"> See a Landsat Image! </Link>

           <br>
           </br>

           <p>{apodData.explanation}</p>


        </div>
    )

}