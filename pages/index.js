import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react";

export default function Home() {
  const [inputfield, setInputfield] = useState(['']);
  const handleAddfield =() =>{
      setInputfield([...inputfield, ''])
  }
  const handledelete =(index) =>{
      const value = [...inputfield];
      value.splice(index, 1);
      setInputfield(value);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Form</title>
        <meta name="description" content="form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="form-div">
    { 
    inputfield.map((items, index) =>{
       return  <div className="input-style" key={index}>
        <input value={items}/>
        <button  onClick={()=> handledelete(index)}>-</button>
       <button  onClick={() => handleAddfield()}>+</button>
       </div>
    })}
    <div className="text-center mt-4">
    <button  onClick={() => handleAddfield()}>Add Button</button>
    </div>
   
</div>
    </div>
  )
}
