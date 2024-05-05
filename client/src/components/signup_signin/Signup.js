import React, { useContext, useState } from 'react'
import './signup.css';
import { NavLink } from 'react-router-dom';


const Signup = () => {


    const [udata,setUdata] = useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""
    })


    const adddata= (e)=>{
        const {name,value}=e.target;

        setUdata(()=>{
            return{
                ...udata,
                [name]:value
            }
        })
    }

    const senddata = async(e)=>{
        e.preventDefault();
        const {fname,email,mobile,password,cpassword} = udata;

        

        const res = await fetch("register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                fname,email,mobile,password,cpassword
            })
        });

        const data = await res.json();
        // console.log(data);
        if(fname===""||email===""||mobile===""||password===""||cpassword===""){
            alert("Fill all details")
        }
        else if(password !== cpassword){
            alert("Password and Cpassword not match");
        }
        else if(res.status === 422 || !data){
            alert("Invalid details")
        }else{
            alert("User created")
            setUdata({...udata,fname:"",email:"",mobile:"",password:"",cpassword:""});
        }
    }

  return (
    <>
   <section>
    <div className='sign_container'>
        <div className='sign_header'>
            <img src='./blacklogoamazon.png' alt='amazonlogo'/>
        </div>
        <div className='sign_form'>
            <form method='POST'>
                <h1>Create account</h1>
                <div className='form_data'>
                    <label htmlFor='fname'>Your name</label>
                    <input type='text'
                    onChange={adddata}
                    value={udata.fname}
                    name='fname' id='fname'/>
                </div>
                <div className='form_data'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' 
                    onChange={adddata}
                    value={udata.email}
                    name='email' id='email'/>
                </div>
                <div className='form_data'>
                    <label htmlFor='number'>Mobile</label>
                    <input type='text'
                    onChange={adddata}
                    value={udata.mobile}
                     name='mobile' id='mobilel'/>
                </div>
                <div className='form_data'>
                    <label htmlFor='password'>Password</label>
                    <input type='password'
                   onChange={adddata}
                    value={udata.password}
                     name='password' placeholder='At least 6 character' id='password'/>
                </div>
                <div className='form_data'>
                    <label htmlFor='password'>Confirm Password</label>
                    <input type='password'
                    onChange={adddata}
                    value={udata.cpassword}
                     name='cpassword' id='cpassword'/>
                </div>
                <button className='signin_btn' onClick={senddata}>Continue</button>
                <div className='signin_info'>
                    <p>Alredy have an account?</p>
                    <NavLink to='/login'>signin</NavLink>
                </div>
            </form>
        </div>
    </div>
   </section>
   </>
  )
}

export default Signup