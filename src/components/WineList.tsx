import React, {useState} from "react";
import { WineData } from "../model";
import WineCard from "./WineCard";
import './components.css'

interface WineListProps {
    filteredItems: WineData[];
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

const WineList: React.FC<WineListProps> = ({ filteredItems, handleSubmit }) => {
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
  let cards = filteredItems.map((card) => (
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
          <div id="container">
           <button className = "form-button" onClick = {handleForm}>Hide Form</button>
            <form onSubmit= {submitForm}>
                <label>Name <input className="form-input" type="text" name="Name" placeholder="name" onChange = {handleOnChange} value= {formData.Name}/></label> 
                <br/>
                <label>Producer <input className="form-input" type="text" name="Producer" placeholder="producer" onChange = {handleOnChange} value= {formData.Producer}/></label> 
                <br/>
                <label>Region <input className="form-input" type="text" name="Region" placeholder="region"onChange = {handleOnChange} value= {formData.Region}/></label>
                <br/>
                <label>Country <input className="form-input" type="text" name="Country" placeholder="country" onChange = {handleOnChange} value= {formData.Country}/></label>
                <br/>
                <label>Varietal <input className="form-input"  type="text" name="Varietal" placeholder="varietal" onChange = {handleOnChange} value= {formData.Varietal}/></label>
                <br/>
                <label>Image <input className="form-input" type="text" name="Image" placeholder="image url" onChange = {handleOnChange} value= {formData.Image}/></label>
                <button type="submit">Add Wine Card</button>
            </form> 
          </div>
            :
            <div id="container">
                <button onClick = {handleForm}  className = "form-button">Add New Wine Card</button>
            
            </div>
            } 

      </div>

      
    
  ) 
};

export default WineList;
