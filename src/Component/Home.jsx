import React, { useState } from 'react';
import {Input,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
export default function Home(){
    const navigate=useNavigate();
    const [formData,setFormData]=useState('');
    async function getDatafromApi(val){
    const req=await fetch(`https://restcountries.com/v3.1/name/${val}`);
    const res=await req.json();
    navigate('/Country',{state:res[0]});
    }
    function handleChange(event){
        setFormData(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        getDatafromApi(formData);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Input onChange={handleChange} value={formData} placeholder='enter Country'/>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}