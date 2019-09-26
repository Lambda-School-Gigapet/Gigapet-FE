// npm packages
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';

//components
import Navigation from '../Layout/Navigation'
import NewFoodEntryForm from '../Forms/NewFoodEntry'
import Gigapet from '../GigaPet/GigaPet'

// utils
import axiosWithAuth from '../../utils/axiosWithAuth'
// import randomNum from '../../utils/generateRandomColor'
import generateRandomColor from '../../utils/generateRandomColor'

const ChildContent = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin: 40px 80px;
    height: 100%;
`

const RightContent = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LeftContent = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MealList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    width: 500px;
    height: 600px;
`

const Image = styled.img`
    padding-top: 20px;
    width: 500px;
    height: 600px;
    margin-bottom: 3rem !important; 
`

const Button = styled.button`
    width: 200px;
    height: 35px;
    margin: 14px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    color: white;
    border-radius: 10px;
    border: none;
    background-color: green;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`

export default function ChildDashboard (props) {
    const [meals, setMeals] = useState([])
    
    const id = props.match.params.id
    useEffect(() => {
        axiosWithAuth()
        .get(`${id}/entries`)
        .then(res => {
            console.log(res)
            setMeals(res.data)
        })
        .catch(console.error)
    }, [])

    return (
        <>
        <Navigation />
        <ChildContent>
            <LeftContent>
                <h2>Recent Meals</h2>
                <MealList>
                    {(meals) 
                        ? meals.map(function renderMealCard(meal) {
                            // TODO: replace header with childs actual name
                            return <Card
                                       header='Johnny Child'
                                       meta={`Date: ${meal.date}`}
                                       description={
                                        `Meal: ${meal.meal} \n
                                        Food: ${meal.food}`
                                        }
                                       color={generateRandomColor()}
                                    />
                        }) 
                        : <Card header="You haven't entered any meals for Johhny yet" />
                    }
                </MealList>
            </LeftContent>
            <RightContent>
                <NewFoodEntryForm childId={props.match.params.id}/>
                <Gigapet mood="neutral" />
            </RightContent>
        </ChildContent>
        </>
    )
}

