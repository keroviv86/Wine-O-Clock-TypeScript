import React, {useState} from "react";
import { WineData } from "../model";
import WineCard from "./WineCard";
import './components.css'

interface WineListProps {
  data: WineData[];
}

interface formDataProps {
    Name: string;
    Producer: string;
    Region: string;
    Country: string;
    Varietal: string;
    Image: string;
}

const WineList: React.FC<WineListProps> = ({ data }) => {
  console.log(data);
  const [form, setForm] = useState<boolean>(false)
  const [formData, setFormData] = useState<formDataProps>({
      Name:"",
      Producer:"", 
      Region:"",
      Country:"",
      Varietal: "",
      Image: ""

  })

  function handleForm(){
      setForm(!form)

  }
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
  return (
      <div>
          <div>{cards}</div>
          {form ?
          <>
           <button onClick = {handleForm}>Hide Form</button>
            <form >
                <label>Name<input type="text" name="name" placeholder="name" /></label> 
                <label>Producer<input type="text" name="name" placeholder="producer" /></label> 
                <label>Region<input type="text" name="name" placeholder="region" /></label>
                <label>Country<input type="text" name="name" placeholder="country" /></label>
                <label>Varietal<input type="text" name="name" placeholder="varietal" /></label>
                <label>Image<input type="text" name="image" placeholder="image url" /></label>
                <button type="submit">Add Wine Card</button>
            </form> 
          </>
            :
            <>
                <button onClick = {handleForm}>Add New Wine Card</button>
            
            </>
            } 

      </div>

      
    
  ) 
};

export default WineList;
