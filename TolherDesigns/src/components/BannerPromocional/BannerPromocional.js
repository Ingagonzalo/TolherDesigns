import React from 'react'
import ImagenBanner from '../../assets/images/Banner.png'



const BannerPromocional = () => {
  return (

    <div className='containerHero'>
      <div className='containerImgPromo'>
        <div >
          <img to='/home' className='paisajeBanner' src={ImagenBanner} alt="" />
        </div>

      </div>
      <div className='centerBanner'>

        <h2>APORTANTO EL TOQUE RUSTICO A TUS ESPACIOS.</h2>
        <button className=' button '>comprar</button>

      </div>

    </div>


  )
}

export default BannerPromocional