import React, {useState, useEffect} from "react";
import Label from "./Label";
//import {Link} from "react-router-dom";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function Photo(){
    const[photoData, setPhotoData] = useState([]);

    useEffect(()=>{
        const fetchPhoto = async() => {
            const res = await fetch(
                // 'https://api.nasa.gov/planetary/earth/assets?lon=-104.959820&lat=39.879860&date=2021-01-01&dim=0.15&api_key=hcb3cOK5E18Ao7FHIUIrJTtl7ytM8khTmYR3oHPM'
                `https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=hcb3cOK5E18Ao7FHIUIrJTtl7ytM8khTmYR3oHPM`
            );
            const data = await res.json();

            setPhotoData(data);
            //console.log(data)
        } 
        fetchPhoto();
        console.log(photoData);       
        
    },[]);

    /*
    displayNameHandler = (e) => {
    let updatedName = e.target.value;
    this.setState({ firstName: updatedName });
    //console.log(updatedName);  
  }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
        showName: true
        });
    }*/

    function handleClick(e){
        e.preventDefault();
        console.log("clicked")
    }

    return(
       <form>
        <Label/>
        <input type="submit" value="Submit" onClick={handleClick} />

        </form>

        
    )
}
