import React, { useContext, useState } from 'react'
import './signup.css';
import { NavLink } from 'react-router-dom';
const Sign_in = () => {

    const [logdata,setData]= useState({
        email:"",
        password:"",
    });

    const adddata = (e)=>{
        const {name,value} = e.target; 

        setData(()=>{
            return{
                ...logdata,
                [name]:value
            }
        })
    };

    const senddata = async (e) => {
                e.preventDefault();
        
                const { email, password } = logdata;
                // console.log(email);
                try {
                    const res = await fetch("/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email, password
                        })
                    });
        
        
                    const data = await res.json();
                    // console.log(data);
        
                    if (res.status === 400 || !data) {
                        console.log("invalid details");
                        alert("Invalid Details")
                    } else {
                       // setAccount(data);
                        setData({ ...logdata, email: "", password: "" })
                        alert("Login Successfully")
                    }
                } catch (error) {
                    console.log("login page ka error" + error.message);
                }
            };

  return (
   <>
   <section>
    <div className='sign_container'>
        <div className='sign_header'>
            <img src='./blacklogoamazon.png' alt='amazonlogo'/>
        </div>
        <div className='sign_form'>
            <form method='POST'>
                <h1>Sign-In</h1>
                <div className='form_data'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' 
                     onChange={adddata}
                     value={logdata.email}
                     name='email' id='email'/>
                </div>
                <div className='form_data'>
                    <label htmlFor='password'>Password</label>
                    <input type='password'
                    onChange={adddata}
                    value={logdata.password}
                     name='password' placeholder='At least 6 character' id='password'/>
                </div>
                <button className='signin_btn' onClick={senddata}>Continue</button>
            </form>
        </div>
        <div className='create_accountinfo'>
            <p>New To Amazon</p>
           <NavLink to='/register'> <button>Create Your Amazon Account</button></NavLink>
        </div>
    </div>
   </section>
   </>
  )
}

export default Sign_in



// import React, { useContext, useState } from 'react'
// import { NavLink } from 'react-router-dom';
// import './signup.css';
// //import { Logincontext } from '../context/Contextprovider';



// const Sign_in = () => {

//    // const { account, setAccount } = useContext(Logincontext);

//     const [logdata, setData] = useState({
//         email: "",
//         password: ""
//     });

//     // console.log(data);

//     const adddata = (e) => {
//         const { name, value } = e.target;
//         // console.log(name, value);

//         setData((pre) => {
//             return {
//                 ...pre,
//                 [name]: value
//             }
//         })
//     };

//     const senddata = async (e) => {
//         e.preventDefault();

//         const { email, password } = logdata;
//         // console.log(email);
//         try {
//             const res = await fetch("/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     email, password
//                 })
//             });


//             const data = await res.json();
//             // console.log(data);

//             if (res.status === 400 || !data) {
//                 console.log("invalid details");
//                 alert("Invalid Details")
//             } else {
//                // setAccount(data);
//                 setData({ ...logdata, email: "", password: "" })
//                 alert("Login Successfully")
//             }
//         } catch (error) {
//             console.log("login page ka error" + error.message);
//         }
//     };

//     return (
//         <section>
//             <div className="sign_container">
//                 <div className="sign_header">
//                     <img src="./blacklogoamazon.png" alt="signupimg" />
//                 </div>
//                 <div className="sign_form">
//                     <form method="POST">
//                         <h1>Sign-In</h1>

//                         <div className="form_data">
//                             <label htmlFor="email">Email</label>
//                             <input type="email" name="email"
//                                 onChange={adddata}
//                                 value={logdata.email}
//                                 id="email" />
//                         </div>
//                         <div className="form_data">
//                             <label htmlFor="password">Password</label>
//                             <input type="password" name="password"
//                                 onChange={adddata}
//                                 value={logdata.password}
//                                 id="password" placeholder="At least 6 characters" />
//                         </div>
//                         <button type="submit" className="signin_btn" onClick={senddata}>Continue</button>
//                     </form>
//                 </div>
//                 <div className="create_accountinfo">
//                     <p>New to Amazon?</p>
//                     <button>  <NavLink to="/register">Create your Amazon Account</NavLink></button>
//                 </div>
//             </div>

//         </section>
//     )
// }

// export default Sign_in
