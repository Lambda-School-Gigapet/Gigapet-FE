import React from 'react'
import styled from 'styled-components'

import HappyDog from './images/dog-happy.png'
import NeutralDog from './images/dog-neutral.png'
import SadDog from './images/dog-sad.png'

const Image = styled.img`
    padding-top: 20px;
    width: 500px;
    height: 600px;
    margin-bottom: 3rem !important; 
`

export default function Gigapet(props) {
    switch (props.mood.toUpperCase()) {
        case 'HAPPY':
            return <Image src={HappyDog} alt='Happy Gigapet' />
        case 'NEUTRAL':
            return <Image src={NeutralDog} alt='Neutral Gigapet' />
        case 'SAD':
            return <Image src={SadDog} alt='Sad Gigapet' />
    }
}
