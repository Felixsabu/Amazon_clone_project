import React,{inddata, useEffect} from 'react'
import './cart.css'
import { useHistory, useParams } from 'react-router';
import { Divider } from '@mui/material'
const Cart = () => {


 const {id} = useParams("");
//  console.log(id);

const getinddata = async()=>{
    const res = await fetch(`/getproductsone/${id}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
        
    });

    const data = await res.json();
    // console.log(data);
}

useEffect(()=>{
    getinddata();
},[id]);

    return (
        <div className='cart_section'>
            <div className='cart_container'>
                <div className='left_cart'>
                    <img src='https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70' alt='cart_img' />
                    <div className='cart_btn'>
                        <button className='cart_btn1'>Add to Cart</button>
                        <button className='cart_btn2'>Buy Now</button>
                    </div>
                </div>
                <div className='right_cart'>
                    <h3>Fitness Gear</h3>
                    <h4></h4>
                    <Divider/>
                    <p className='mrp'>M.R.P  :</p>
                    <p>Deal of The Day  :<span style={{col
                    :"#B12704"}}></span></p>
                    <p>You save  :<span style={{col
                    :"#B12704"}}></span></p>

                    <div className='discount_box'>
                        <h5>Discount : <span style={{color:"#111"}}></span></h5>
                        <h4>Free Delivery : <span style={{color:'#111'}}></span></h4>
                        <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
        
                    </div>
                    <p className='description'>About the item : <span style={{color:"#565959",fontSize:14,fontwei
                :500,letterSpacing:"0.4px"}}></span></p>
                </div>
            </div>
        </div>
    )
}

export default Cart