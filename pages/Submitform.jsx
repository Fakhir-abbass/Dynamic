
import { useState } from "react";
const Submitform = () => {
    const [inputfield, setInputfield] = useState([{firstName:'', lastName:''}, {firstName:'', lastName:''}]);
    const handleChangeinput = (index, e) =>{
        const values =[...inputfield]
        values[index][e.target.name]= e.target.value;
        setInputfield(values);
    }
    const handleAddfield =() =>{
        setInputfield([...inputfield, {firstName:'', lastName:''}])
        
    }
    const handledelete =(index) =>{
        const value = [...inputfield];
        value.splice(index, 1);
        setInputfield(value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("inputfield", inputfield )
    }
    return (  
<form className="form-div" onSubmit={handleSubmit}>
    { 
    inputfield.map((items, index) =>{
       return  <div className="input-style" key={index}>
        <input 
        value={items.firstName}
        name = "firstName"
        placeholder="FirstName"
        variant ="filled"
        onChange={e => handleChangeinput(index, e)}
        />
         <input 
        value={items.lastName}
        name = "lastName"
        placeholder="LastName"
        onChange={e => handleChangeinput(index, e)}
        />
        <button  onClick={()=> handledelete(index)}>-</button>
       <button  onClick={() => handleAddfield()}>+</button>
       </div>
    })}
    <div className="text-center mt-4">
    <button  type="submit" onClick={handleSubmit}>Submit</button>
    </div>
   
</form>
    );
}
 
export default Submitform;