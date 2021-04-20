import React, { useState, useEffect } from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import axios from "axios";



const apiKey = process.env.REACT_APP_NASA_KEY;


/*
const PhotoA = () => {
    const[photoData, setPhotoData] = useState([]);
    const[latData, setLatData] = useState("");
    const[longData, setLongData] = useState("");

    useEffect(()=>{
        axios
        .get(`https://api.nasa.gov/planetary/earth/assets?lon=${longData}&lat=${latData}&date=2018-01-01&dim=0.10&api_key=${apiKey}`)
        .then(result=>setPhotoData(result.data.collection.items));
    },[]);

    const findImage = () =>{
        axios
            .get(`https://api.nasa.gov/planetary/earth/assets?lon=${longData}&lat=${latData}&date=2018-01-01&dim=0.10&api_key=${apiKey}`)
            .then(result=>setPhotoData(result.data.collection.items))
            .catch(error=>{
                console.log(error.result);
            });
    }
*/

PhotoA.defaultProps = {
    center: {
        lat: 39.879860,
        lng: -104.959820
    }
}

export default function PhotoA() {

    const [photoData, setPhotoData] = useState([]);
    const [latData, setLatData] = useState("39.879860");
    const [longData, setLongData] = useState("-104.959820");

    useEffect(() => {
        const fetchPhoto = async () => {
            const res = await fetch(

                //setLatData("39.879860"),
                //setLongData("-104.959820"),

                // `https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=${apiKey}`
                `https://api.nasa.gov/planetary/earth/assets?lon=${longData}&lat=${latData}&date=2018-01-01&dim=0.10&api_key=${apiKey}`

            );
            const data = await res.json();

            setPhotoData(data);
            //console.log(data)
        }
        fetchPhoto();
        console.log(photoData);

    }, []);

    return (

        <Form>
            <FormGroup>
                <Label>Latitude</Label>
                <Input type="text" value={latData} onChange={e => setLatData(e.target.value)}
                    placeholder="Enter Latitude">

                </Input>
            </FormGroup>

            <FormGroup>
                <Label>Longitude</Label>
                <Input type="text" value={longData} onChange={e => setLongData(e.target.value)}
                    placeholder="Enter Longitude">
                </Input>
            </FormGroup>
            <br>

            </br>
            <Button type="submit" className="btn"  >Submit</Button>



            <div className="photo">

                <img src={photoData.url} alt="img not loaded" />


                <h1>{photoData.id}</h1>

            </div>

        </Form>


    )
};
//export default PhotoA;
