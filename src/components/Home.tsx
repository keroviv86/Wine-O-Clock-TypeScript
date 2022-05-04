import React from 'react'
import { WineData } from "../model";

interface WineListProps {
  filteredItems: WineData[];

}

const Home: React.FC<WineListProps> = ({filteredItems}) => {
  return (
    <div>Home</div>
  )
}

export default Home