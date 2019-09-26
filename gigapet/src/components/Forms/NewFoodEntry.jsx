import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Button, Form, Dropdown } from 'semantic-ui-react'
import styled from 'styled-components'
import * as R from 'ramda'

import useForm from '../../hooks/useForm'
import { addNewMealEntry } from '../../store/actions'

export const Centered = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Small = styled.div`
    width: 150px;
`

export default function NewFoodEntry(props) {
    const dispatch = useDispatch()
    
    const initialStateNewMealEntry = {
        kids_id: props.childId,
        date: '', 
        meal: '', 
        food:  '',
        category: '',
        servings: '' 
    }

    const formatDate = date => {
        const [year, month, day] = date.split('-')
        const formattedDate = [month, day, year].join('-')
        return formattedDate
    }
    
    const handleSubmitCb = newMealEntry => {
        
        R.compose(
            dispatch,
            addNewMealEntry.bind(null, newMealEntry.kids_id),
            R.evolve({
                meal: R.always(mealChoice.current.state.value),
                category: R.always(foodCategoryChoice.current.state.value),
                kids_id: parseInt,
                servings: parseInt,
                date: formatDate
            })
        )(newMealEntry)   
        
        // reset the form 
        setNewMealEntry(initialStateNewMealEntry)
    }
    
    const [newMealEntry, setNewMealEntry, handleChanges, handleSubmit] = useForm(initialStateNewMealEntry, handleSubmitCb)
    const [modalOpen, setModalOpen] = useState(false)
    const foodCategoryChoice = useRef()
    const mealChoice = useRef()

    const handleOpen = () => setModalOpen(true)
    // The form won't submit without this setTimeout hack.
    // Without the setTimeout, the following warning appears in the console: 
    // Form submission canceled because the form is not connected
    const handleClose = () => setTimeout(() => setModalOpen(false), 0)

    const mealOptions = [
        {
            key: 'Breakfast',
            text: 'Breakfast',
            value: 'Breakfast'  
        },
        {
            key: 'Lunch',
            text: 'Lunch',
            value: 'Lunch'  
        },
        {
            key: 'Dinner',
            text: 'Dinner',
            value: 'Dinner'  
        }
    ]

    const foodCategories = [
        {
            key: 'Treats',
            text: 'Treats',
            value: 'Treats'
        },
        {
            key: 'Fruit',
            text: 'Fruit',
            value: 'Fruit'
        },
        {
            key: 'Veggies',
            text: 'Veggies',
            value: 'Veggies'
        },
        {
            key: 'Dairy',
            text: 'Dairy',
            value: 'Dairy'
        },
        {
            key: 'Grains/ Beans',
            text: 'Grains/ Beans',
            value: 'Grains/ Beans'
        },
        {
            key: 'Meat/ Poultry/ Seafood',
            text: 'Meat/ Poultry/ Seafood',
            value: 'Meat/ Poultry/ Seafood'
        },
        {
            key: 'Fats/ Oils',
            text: 'Fats/ Oils',
            value: 'Fats/ Oils'
        }
    ]

    return (
        <Modal 
            trigger={
                <Small>
                    <Button onClick={handleOpen} color="green">Add a new food entry</Button>
                </Small>
            }
            open={modalOpen}
            onClose={handleClose}
            closeIcon
        >
            {/* TODO: dynamically add child's name to modal header */}
            <Modal.Header>New meal for Johnny</Modal.Header>
            <Modal.Content>
                <Centered>
                    <Form onSubmit={handleSubmit}>
                        <Form.Field>
                            <label>Date</label>
                            <input 
                                name="date"
                                type="date"
                                value={newMealEntry.date}
                                onChange={handleChanges}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Meal</label>
                            <Dropdown 
                                placeholder='Choose one'
                                selection
                                fluid
                                options={mealOptions}
                                ref={mealChoice}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Dish</label>
                            <input 
                                name="food"
                                type="text" 
                                value={newMealEntry.food}
                                onChange={handleChanges}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Category</label> 
                            <Dropdown 
                                placeholder='Choose one'
                                selection
                                fluid
                                options={foodCategories}
                                ref={foodCategoryChoice}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Servings</label>
                            <input 
                                name="servings"
                                type="text"
                                value={newMealEntry.servings} 
                                onChange={handleChanges}
                            />
                        </Form.Field>
                        <Centered><Button onClick={handleClose} color="green" type="submit">+</Button></Centered>
                    </Form>
                </Centered>
            </Modal.Content>
        </Modal>
    )
}