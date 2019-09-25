import React from 'react'
import { Card } from 'semantic-ui-react'


//Meal container is returned with data for the specific meal from props
export default function Meal(props) {

    const des = `Category: ${props.category} Meal: ${props.mealType} Servings: ${props.servings}`

    return (
        <Card header={props.date} meta={props.child} description={des}/>
    )
}