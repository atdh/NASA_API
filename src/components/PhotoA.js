import { render } from "@testing-library/react";
import React, {useState, useEffect} from "react";
//import Label from "./Label";
//import {Link} from "react-router-dom";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function PhotoA(){
    const[photoData, setPhotoData] = useState([]);

    useEffect(()=>{
        const fetchPhoto = async() => {
            const res = await fetch(
                // 'https://api.nasa.gov/planetary/earth/assets?lon=-104.959820&lat=39.879860&date=2021-01-01&dim=0.15&api_key=hcb3cOK5E18Ao7FHIUIrJTtl7ytM8khTmYR3oHPM'
                `https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=${apiKey}`
                
            );
            const data = await res.json();

            setPhotoData(data);
            //console.log(data)
        } 
        fetchPhoto();
        console.log(photoData);       
        
    },[]);


    return(
        
        <div className="photo">
        <img src={photoData.url} alt="helloworld"/>

        

        <h1>{photoData.id}</h1>
        
        </div>
        
    )
}
