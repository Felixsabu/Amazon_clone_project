import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './banner.css';

const data = [
    "https://cdn.shopify.com/s/files/1/0356/7963/3540/files/AmazonProductBanner_e453806b-6820-4813-a117-9b6496055250.png?v=1657707168/",
    " https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/Eventpage/Dealspage/Topbanner/V1/PC._CB587658976_.gif",
    "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
]


const Banner = () => {
  return (
    <Carousel
    className='carasousel'
    autoPlay={true}
    animation='slide'
    indicators={false}
    navButtonsAlwaysVisible={true}
    cycleNavigation={true}
    navButtonsProps={{
        style:{
            backgroundColor:"#fff",
            color:"#494949",
            borderRadius:0,
            marginTop:22,
            height:'100px'
        }
    }}
    >
        {
            data.map((imag,i)=>{
                return(
                    <>
                    <img src={imag} alt="" className='banner_img'/>
                    </>
                )
            })
        }
    </Carousel>
  )
}

export default Banner