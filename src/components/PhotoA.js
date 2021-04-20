import { render } from "@testing-library/react";
import React, {useState, useEffect} from "react";
//import Label from "./Label";
//import {Link} from "react-router-dom";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';


const apiKey = process.env.REACT_APP_NASA_KEY;

export default function PhotoA(){
    const[photoData, setPhotoData] = useState([]);

    useEffect(()=>{
        const fetchPhoto = async() => {
            const res = await fetch(
                
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
        
        <Form>
            <FormGroup>
                <Label>Latitude</Label>
                <Input type="text" placeholder="Enter Latitude">
                </Input>
            </FormGroup>
            
            <FormGroup>
                <Label>Longitude</Label>
                <Input type="text" placeholder="Enter Longitude">
                </Input>
            </FormGroup>
            <br>

            </br>
            <Button type="submit">Submit</Button>



            <div className="photo">

                <img src={photoData.url} alt="helloworld"/>
        

                <h1>{photoData.id}</h1>
            
            </div>
        
        </Form>

        
    )
}
