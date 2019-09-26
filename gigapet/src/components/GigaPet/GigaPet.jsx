import React, { useEffect } from 'react'
import styled from 'styled-components'

import HappyDog from './images/dog-happy.png'
import NeutralDog from './images/dog-neutral.png'
import SadDog from './images/dog-sad.png'
import { useDispatch } from 'react-redux'
import * as R from 'ramda'

import { feedGigapet, updateGigapetMood } from '../../store/actions'

import MoodGenerator from '../../utils/MoodGenerator'

const Image = styled.img`
    padding-top: 20px;
    width: 500px;
    height: 600px;
    margin-bottom: 3rem !important; 
`

export default function Gigapet(props) {
    const dispatch = useDispatch()
    const moodGen = new MoodGenerator(props.points, props.mood)

    console.log('MOODGEN', moodGen)

    const feed = (meals) => meals.forEach(meal => dispatch(feedGigapet(moodGen.points, meal.servingSize)))
    const { meals, points } = props
    const generateNextMood = R.compose(moodGen.calculateMood, (points, meals) => moodGen.crunch(points, meals))
    useEffect(() => {
        feed(meals)
        // R.compose(dispatch, updateGigapetMood, generateNextMood)(points, meals)
    }, [meals, points])


    
    switch (moodGen.mood.toUpperCase()) {
        case 'HAPPY':
            return <Image src={HappyDog} alt='Happy Gigapet' />
        case 'NEUTRAL':
            return <Image src={NeutralDog} alt='Neutral Gigapet' />
        case 'SAD':
            return <Image src={SadDog} alt='Sad Gigapet' />
    }
}
