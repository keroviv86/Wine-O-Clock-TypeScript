import React from "react";
import { WineData } from "../model";
import WineCard from "./WineCard";
import './components.css'

interface WineListProps {
  data: WineData[];
}

const WineList: React.FC<WineListProps> = ({ data }) => {
  console.log(data);
  let cards = data.map((card) => (
    <WineCard
      id={card.id}
      region={card.region}
      country={card.country}
      varietal={card.varietal}
      name={card.name}
      producer={card.producer}
      image={card.image}
    />
  ));
  return <div>{cards}</div>;
};

export default WineList;
