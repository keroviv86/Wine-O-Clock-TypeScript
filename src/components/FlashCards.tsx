import React from 'react'
import { WineData } from "../model";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const FlashCards: React.FC<WineData> = ({
  id,
  region,
  country,
  varietal,
  name,
  image,
  producer
  }) => {
  return (
    <div id="flash-container">
            <div className = "flash-card">
                <img className = "img" src={image} alt="wineimage"/>
                <div className = "card_details">
                    <span className = "tag">{country}</span>
                    <span className = "tag">{region}</span>
                    <div className = "name">{name}</div>
                    <p className = "varietal">{varietal}</p>
                    <p className = "producer">{producer}</p>
                </div>
                <button><CheckIcon/></button>
                <button><CloseIcon/></button>
                
               
      </div>
    </div>
  )
}

export default FlashCards