import React from 'react';
import logo from '../assets/AHAnobg.png'
import twitterlogo from '../assets/twitter.svg'
import instagramlogo from '../assets/instagram.svg'
import envelope from '../assets/envelope.svg'



const Footer = () => {


    return (
        <div className="fixed-bottom d-flex bg-dark flex-column align-items-center" style={{height: 155}} >
            <div>
                <img src={logo} alt="American Hero Apparel" width='150' />
            </div>
            <div className='d-flex'>
                <div style={{marginRight: 10}}><img src={envelope} alt="" width={25} /></div>
                <div style={{marginRight: 10, marginLeft: 10}}><img src={twitterlogo} alt="" width={25}/></div>
                <div style={{marginLeft: 10}}><img src={instagramlogo} alt="" width={25} /></div> 
                
            </div>
        </div>
    )
}

export default Footer