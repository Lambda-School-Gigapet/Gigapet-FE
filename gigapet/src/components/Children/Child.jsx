import React from 'react'
import { Card } from 'semantic-ui-react'

import generateRandomColor from '../../utils/generateRandomColor'



//Child container is returned with data for the specific child from props
export default function Child(props) {
    return (
        <Card 
            link 
            header={props.name} 
            meta={`Age: ${props.age}`} 
            description={`Weight: ${props.weight} lbs`}
            color={generateRandomColor()}
        />
    )
}