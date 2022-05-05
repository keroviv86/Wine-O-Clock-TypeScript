import React from 'react'
import { WineData } from "../model";
import FlashCards from "./FlashCards"

interface WineListProps {
  filteredItems: WineData[];

}

const Home: React.FC<WineListProps> = ({filteredItems}) => {
  let cards = filteredItems.map((card) => (
    <FlashCards
      id={card.id}
      region={card.region}
      country={card.country}
      varietal={card.varietal}
      name={card.name}
      producer={card.producer}
      image={card.image}
    />
  ));
  return (
    <div>
      {cards}
    </div>
  )
}

export default Home