import React from 'react'
import { WineData } from "../model";
import FlashCards from "./FlashCards"

interface WineListProps {
  filteredItems: WineData[];
  displayArr: WineData[];
  handleCheckCard: () => void;

}

const Home: React.FC<WineListProps> = ({displayArr,handleCheckCard}) => {
  let cards = displayArr.map((card) => (
    <FlashCards
      id={card.id}
      region={card.region}
      country={card.country}
      varietal={card.varietal}
      name={card.name}
      producer={card.producer}
      image={card.image}
      handleCheckCard={handleCheckCard}
    />
  ));
  return (
    <div>
      {cards}
    </div>
  )
}

export default Home