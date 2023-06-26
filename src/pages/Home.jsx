import React from 'react'
import '../pages/Home.css'
import logo from '../assets/logo.png'
const Home = () => {
  return (
    <div>
        <div className="container-main">
 
            <div className="container-1">
                    <img src={logo} alt="" />

                <div className="p1">Spotify</div>
                
                <div className="p2">
                  <a href="http://">Premium</a>
                  <a href="http://">Help</a>
                  <a href="http://">Download</a>
                  <a className='p0'>|</a>
                </div>

                <div className="p3">
                  <a href="http://">Sign Up</a>
                  <a href="http://">Log In</a>
                </div>
              </div>


              <div className="container-2">
                  <h1 className='c1' >Music For Everyone.</h1>
                  <h3 className="c2">Millions of songs. No credit card needed.</h3>
                  <button className='b1'>Get Spotify Free</button>


              </div>


        </div>




    </div>
  )
}

export default Home