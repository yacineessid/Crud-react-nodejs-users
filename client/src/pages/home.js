import React, { useEffect, useState } from 'react'
import InputGroup from '../components/inputGroup'
import RowDetails from '../components/rowDetails'
import axios from 'axios'
import Alert from '../components/alert';
function Home() {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({});
     const [errors, setErrors] = useState({});
     const [message, setMessage] = useState('');
     const [show, setShow] = useState(false);
    const onChangeHAndler=(e)=>{
        setForm({...form,
            [e.target.name]: e.target.value})
    }
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        axios.post('/users',form)
        .then(res=>{
          setMessage(res.data.message)
          console.log(message,"message");
          /* hide form after save */
          setForm({})
          /* hide errors after save */
          setErrors({})
          setShow(true)
          setTimeout(() => {
            setShow(false)
          }, 3000);
       
        })
        .catch(err=>setErrors(err.response.data))
        gi 
      }
      const onDelete=(_id)=>{
        if(window.confirm('are you sure  to delete this user ? ')){
            axios.delete(`/users/${_id}`)
            .then(res=>{
                setMessage(res.data.message)
                /* hide form after save */
                setForm({})
                /* hide errors after save */
                setErrors({})
                setShow(true)
                setTimeout(() => {
                  setShow(false)
                }, 3000);
             
              })
        }
      
      }
    //find all users
    useEffect(() => {
        async function getUsers() {
          try {
            const res = await axios.get('/users');
            setUsers(res.data);
          } catch (error) {
            // Handle errors
          }
        }
        
        getUsers();
      }, []);
 
    
  return (
    <div className="row p-4">
          <Alert message={message} show={show} />

    <div className="alert alert-success d-flex align-items-center" role="alert">
        <div>
          An example success alert with an icon
        </div>
      </div>
 <div className="mt-4">
    <h2>Crud Users</h2>
 </div>
 <div className="col-12 col-lg-4">
 <form onSubmit={onSubmitHandler}>

     <InputGroup label="Email" type='text' name="Email" onChangeHAndler={onChangeHAndler} erros={errors.Email} value={form.Email}/>
     <InputGroup label="FirstName" type='text' name="Firstname" onChangeHAndler={onChangeHAndler} errors={errors.Firstname} value={form.Firstname}/>
     <InputGroup label="LastName" type='text' name='Lastname' onChangeHAndler={onChangeHAndler} errors={errors.Lastname} value={form.Lastname}/>
     <InputGroup label="Age" type='text' name='Age' onChangeHAndler={onChangeHAndler} errors={errors.Age} value={form.Age}/>
     </form>

 </div>

 <button className="btn btn-primary" onClick={onSubmitHandler}>Add user</button>
 <div className="col-12 col-lg-7">
    <table className="table">
        <thead>
          <tr>
            <th scope='col'>Email</th>
            <th scope='col'>Lastname</th>
            <th scope='col'>Firstname</th>
            <th scope='col'>Age</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
        {users.map(({ Email, Lastname, Firstname, Age, _id }) => (
              <RowDetails
                Email={Email}
                Lastname={Lastname}
                Firstname={Firstname}
                Age={Age}
                _id={_id}
                onDelete={onDelete}
              /> ))}
        </tbody>
    </table>    
 </div>
</div>
  )
}

export default Home