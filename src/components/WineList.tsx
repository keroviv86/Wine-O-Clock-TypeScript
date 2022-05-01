import React, {useState} from "react";
import { WineData } from "../model";
import WineCard from "./WineCard";
import './components.css'

interface WineListProps {
  data: WineData[];
  handleSubmit: (newWineCardObj:any) => void;
}

interface FormDataProps {
    Name: string;
    Producer: string;
    Region: string;
    Country: string;
    Varietal: string;
    Image: string;
}

const WineList: React.FC<WineListProps> = ({ data, handleSubmit }) => {
  const [form, setForm] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormDataProps>({
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

  function handleOnChange(event:React.ChangeEvent<HTMLInputElement>) {
      const name = event.target.name
      const value = event.target.value
      setFormData({
          ...formData,
          [name]: value
      })
  }

  function submitForm(e:React.FormEvent){
      e.preventDefault()
      console.log(e)

      const newWineCardObj = {
          name: formData.Name,
          producer: formData.Producer,
          region: formData.Region,
          country: formData.Country,
          varietal: formData.Varietal,
          image: formData.Image
      }
      handleSubmit(newWineCardObj)
    //   fetch("http://localhost:3000/wines", {
    //       method: "POST",
    //       headers: {
    //           "Content-Type" : "application/json"
    //       },
    //       .then((res: { json: () => any; })=>res.json())
    //       .then((data: any)=>console.log(data))
    //   })
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
            <form onSubmit= {submitForm}>
                <label>Name<input type="text" name="Name" placeholder="name" onChange = {handleOnChange} value= {formData.Name}/></label> 
                <label>Producer<input type="text" name="Producer" placeholder="producer" onChange = {handleOnChange} value= {formData.Producer}/></label> 
                <label>Region<input type="text" name="Region" placeholder="region"onChange = {handleOnChange} value= {formData.Region}/></label>
                <label>Country<input type="text" name="Country" placeholder="country" onChange = {handleOnChange} value= {formData.Country}/></label>
                <label>Varietal<input type="text" name="Varietal" placeholder="varietal" onChange = {handleOnChange} value= {formData.Varietal}/></label>
                <label>Image<input type="text" name="Image" placeholder="image url" onChange = {handleOnChange} value= {formData.Image}/></label>
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
