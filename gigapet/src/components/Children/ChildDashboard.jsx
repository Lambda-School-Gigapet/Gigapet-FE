import React from 'react';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';

import HappyDog from '../GigaPet/images/dog-happy.png'
import Navigation from '../Layout/Navigation'
import NewFoodEntryForm from '../Forms/NewFoodEntry'

const ChildContent = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 40px 80px;
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

export default function ChildDashboard () {

    return (
        <>
        <Navigation />
        <ChildContent>
            <LeftContent>
                <h2>Recent Meals</h2>
                <MealList>
                    <Card
                        header='Johnny Child'
                        meta='Date: 09/23/2019'
                        description={[
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
                        ]}
                    />
                    <Card
                        header='Johnny Child'
                        meta='Date: 09/22/2019'
                        description={[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
                            ]}
                    />
                    <Card
                        header='Johnny Child'
                        meta='Date: 09/21/2019'
                        description={[
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
                        ]}
                    />
                </MealList>
            </LeftContent>
            <RightContent>
                <NewFoodEntryForm />
                <Image src={HappyDog} alt='dog'></Image>
            </RightContent>
        </ChildContent>
        </>
    )
}

