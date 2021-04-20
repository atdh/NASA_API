import React from "react";
//import Map from "./Map"
import { Link} from "react-router-dom";
import { validationLatitudeLongitude } from "validation-latitude-longitude";


export default function LabelA(){

   function isValidCoord(){
        if (document.getElementById("lat").value === "" || document.getElementById("lon").value === "" ){
            alert("Latitude or Longitude Must Be Filled Out");
            return false;

        }
        
        if (validationLatitudeLongitude.latitude(document.getElementById("lat").value) === false ){
            alert("Latitude needs to be between -90 and 90");
            return false; 
                
        }

        if(validationLatitudeLongitude.longitude(document.getElementById("lon").value) === false ){
            alert("Longitutde needs to be between -180 and 180");
            return false;
                
        }
        else{
            console.log("it works");
            //return true;
                        
        }
    }

    

    return(
        <form name="latLon">
            <label className="lat">
            Enter Latitude:
            <input type="text" id="lat" name="latName" />
            </label>

            <br>
            </br>

            <label className="lon">
            Enter Longitutde:
            <input type="text" id="lon" name="lonName" />
            </label>

            <br>
            </br>

            
            <Link to="/photo">
            <input type="submit" value="Submit" 
            
            
            onClick={
                isValidCoord
            }>
            
                    
            </input></Link>

            
            
            

            
            

        </form>
    );
}

//export default Label;
//import("react").LabelHTMLAttributes;

//<input type="submit" value="Submit" onClick={isValidCoord}  />