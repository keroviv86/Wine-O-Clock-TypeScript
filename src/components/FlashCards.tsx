import React from 'react'
import { WineData } from "../model";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface FlashCardProps extends WineData {
  handleCheckCard: () => void;
  handleReverse: () => void;
}
const FlashCards: React.FC<FlashCardProps> = ({
  id,
  region,
  country,
  varietal,
  name,
  image,
  producer,
  handleCheckCard,
  handleReverse

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
                <h5 style={{fontSize:16, marginTop:80}}>Did you answer correctly?</h5>
                <button className = "flash-card-button" onClick={handleCheckCard}><CheckIcon/></button>
                {/* if user clicks on closed add card to "restudy pile" */}
                <button className = "flash-card-button" onClick={handleReverse} ><ArrowBackIcon/></button>
                <button className = "flash-card-button" ><CloseIcon/></button>
               

      </div>
    </div>
  )
}

export default FlashCards