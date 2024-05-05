import React from 'react'
import './buynow.css';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';
import { Divider } from '@mui/material';
const Buynow = () => {
    return (
        <div className='buynow_section'>
            <div className='buynow_container'>
                <div className='left_buy'>
                    <h1>Shopping Cart</h1>
                    <p>Select all items</p>
                    <span className='leftbuyprice'>Price</span>
                    <Divider />

                    <div className='item_container'>

                        <img src='' alt='' />
                        <div className='item_details'>
                            <h3></h3>
                            <h3></h3>
                            <h3 className='differentprice'></h3>
                            <p className="unusuall">Usually dispatched in 8 days.</p>
                            <p>Eligible for FREE Shipping</p>
                            <img src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png' alt='' />
                            <Option />
                        </div>
                        <h3 className='item_price'></h3>
                    </div>
                    <Divider />
                    <Subtotal />
                </div>
                <div className='right_buy'>
                    <Right />
                </div>
            </div>
        </div>
    )
}

export default Buynow