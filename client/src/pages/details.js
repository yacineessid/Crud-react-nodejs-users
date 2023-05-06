import React, { useEffect, useState } from 'react'
import InputGroup from '../components/inputGroup';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Details() {
  const [form, setForm] = useState({});
  const {id}= useParams()
  const navigate = useNavigate()

   const [errors, setErrors] = useState({});

   const onChangeHAndler=(e)=>{
    setForm({...form,
        [e.target.name]: e.target.value})
        console.log(form,'formm');
}
   const onSubmitHAndler = (e)=>{
    console.log('hello');
    e.preventDefault();
    axios.put(`/users/${id}`,form).then(res=>{
      /* hide form after save */
      navigate('/')

    })
    .catch(err=>setErrors(err.response.data))
    
  }
  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios.get(`/users/${id}`)
        setForm(res.data);
      } catch (error) {
        // Handle errors
        console.log(error.message);
      }
    }
    
    getUser();
  }, []);
  return (

<div className=" container mt-4 col-12 col-lg-4">
 <form onSubmit={onSubmitHAndler}>
     <InputGroup label="Email" type='text' name="Email" onChangeHAndler={onChangeHAndler} erros={errors.Email}value={form.Email }/>

     <InputGroup label="FirstName" type='text' name="Firstname" onChangeHAndler={onChangeHAndler} errors={errors.Firstname} value={form.Firstname}/>
     <InputGroup label="LastName" type='text' name='Lastname' onChangeHAndler={onChangeHAndler} errors={errors.Lastname} value={form.Lastname
     }/>
     <InputGroup label="Age" type='text' name='Age' onChangeHAndler={onChangeHAndler} errors={errors.Age} value={form.Age}/>
     <button className="btn btn-primary" type="submit">Add user</button>

     </form>

 </div>  )
}

export default Details