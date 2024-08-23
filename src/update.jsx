import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const update = () => {
    const initialstate={
        UserName :"",
        Email : "",
        GameName : "",
        password : ""
    };
 
    const [formData, setFormData] = useState(initialstate);
    const handleSubmit=(e)=>{
        e.preventDefault();

        axios
        .post("http://localhost:4000/updateDetails/_id", formData)
        .then((res)=>{
            if (res.status === 200 || res.status === 201){
                setFormData(initialstate)            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData((state) => ({ ...state, [name]: value }));
      };

      

  return (
    <div>
    <h1 style={{textAlign :"center"}}>GAME UPDATE DATA</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="" style={{marginLeft:"620px",paddingRight:"90px"}}><b>User Name</b></label>
            <input type="text" name="UserName" required placeholder='Enter Your User Name' onChange={handleChange} value={formData.UserName}/>
        </div>
      <div>
            <label htmlFor="" style={{marginLeft:"620px",paddingRight:"124px"}}><b>E-Mail</b></label>
           <input type="Email" name="Email" required placeholder='Enter your E-mail' onChange={handleChange}value={formData.Email} />  
     </div>
      <div>
          <label htmlFor="" style={{marginLeft:"620px",paddingRight:"80px"}}><b>Game Name</b></label>
          <input type="text" name="GameName" required placeholder='Enter The Game Name'onChange={handleChange}value={formData.GameName}/>
     </div>
     {/* <div>
//             <label htmlFor="" style={{marginLeft:"620px",paddingRight:"101px"}}><b>Password</b></label>
//             <input type="text" name='Password' onChange={handleChange}value={formData.password} />
//         </div> */}
       <button type='submit' style={{marginLeft:"796px",marginTop:"15px"}}>Update</button>
    
        <Link to="/read"><button>Read</button></Link>
        <Link to="/"><button>Create</button></Link>

        

    </form>
     </div>
  )
  
}

export default update


