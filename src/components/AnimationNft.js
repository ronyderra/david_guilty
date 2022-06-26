import React from 'react'
import columnAndPinkPath from '../img/column&pink.png';
import ballImgPath from '../img/ball.png';
import wandImgPath from '../img/obj.png';
import glassImgPath from '../img/glass.png';
import cardImgPath from '../img/card.png';
import sunGlassesImgPath from '../img/sunglasses 1.png';
import hatImgPath from '../img/cowboyhat.png';


export default function AnimationNft() {
  return (
        <div className="animationDiv">
            <img className='pinkImg' src={columnAndPinkPath} />
            <img className='ball' src={ballImgPath} />
            <img className='wand' src={wandImgPath} />
            <img className='glass' src={glassImgPath} />
            <img className='card' src={cardImgPath} />
            <img className='sunGlasses' src={sunGlassesImgPath} />
            <img className='hat' src={hatImgPath} />
        </div>
  )
}
