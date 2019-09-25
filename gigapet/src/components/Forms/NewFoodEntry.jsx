import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Button, Form } from 'semantic-ui-react'
import styled from 'styled-components'
import { assoc, compose, evolve } from 'ramda'

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
        date: '', // "09-12-2019",
        meal: '', // "lunch",
        food:  '', //"cheese",
        category: '', // "dairy",
        servings: '' // 2
    }

    const formatDate = date => {
        const [year, month, day] = date.split('-')
        const formattedDate = [month, day, year].join('-')
        return formattedDate
    }
    
    const handleSubmitCb = newMealEntry => {
        compose(
            dispatch,
            addNewMealEntry.bind(null, newMealEntry.kids_id),
            evolve({
                kids_id: parseInt,
                servings: parseInt,
                date: formatDate
            })
        )(newMealEntry)   
        
        setNewMealEntry(initialStateNewMealEntry)
    }
    
    const [newMealEntry, setNewMealEntry, handleChanges, handleSubmit] = useForm(initialStateNewMealEntry, handleSubmitCb)
    const [modalOpen, setModalOpen] = useState(false)

    const handleOpen = () => setModalOpen(true)
    // The form won't submit without this setTimeout hack.
    // Without the setTimeout, the following warning appears in the console: 
    // Form submission canceled because the form is not connected
    const handleClose = () => setTimeout(() => setModalOpen(false), 0)
    
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
                            <label>Meal (Breakfast/ Lunch/ Dinner)</label>
                            <input 
                                name="meal"
                                type="text"
                                value={newMealEntry.meal}
                                onChange={handleChanges}
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
                            <input 
                                name="category"
                                type="text" 
                                value={newMealEntry.category}
                                onChange={handleChanges}
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