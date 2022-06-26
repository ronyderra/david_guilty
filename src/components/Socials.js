import React from 'react'

import twitterLogo from '../img/socials/twitter.svg';
import instagramLogo from '../img/socials/instagram.svg';
import discordLogo from '../img/socials/discord.svg';


export default function Socials() {
  return (
    <div>
        <button className='navBtn'>
            <img src={twitterLogo}/>
        </button>

        <button className='navBtn'>
            <img src={discordLogo}/>
        </button>

        <button className='navBtn'>
            <img src={instagramLogo}/>
        </button>
    </div>
  )
}
