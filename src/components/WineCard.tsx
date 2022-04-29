import React from "react";
import { WineData } from "../model";

const WineCard: React.FC<WineData> = ({
    id,
    region,
    country,
    varietal,
    name,
    image,
    producer
    }) => {
    return (
        <div id="container">
            <div className = "card">
                <img className = "img" src={image} alt="wineimage"/>
                <div className = "card_details">
                    <span className = "tag">{country}</span>
                    <span className = "tag">{region}</span>
                    <div className = "name">{name}</div>
                    <p className = "varietal">{varietal}</p>
                    <p className = "producer">{producer}</p>
                </div>
                
               
            </div>
        </div>
        
       
    )
};

export default WineCard;
