import React from 'react'

const Right = () => {
  return (
    <div className='right_buy'>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png' alt=''/>
        <div className='cost_right'>
            <p>Your order is eligible for FREE Delivery.</p>
            <span style={{colo
            :"#565959"}}>Select this option at checkout. Details</span>
            <h3>Subtotal (1 Item): <span style={{fontwei
        :700,colo
        :"#111"}}>46548</span></h3>
        <button className='rightbuy_btn'>Process to Buy</button>
        <div className='emi'>
            Emi available
        </div>
        </div>
    </div>
  )
}

export default Right