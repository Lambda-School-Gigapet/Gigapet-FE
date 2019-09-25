import React, { useState } from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'
import styled from 'styled-components'

import useForm from '../../hooks/useForm'

export const Centered = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Small = styled.div`
    width: 150px;
`

export default function NewFoodEntry() {
    const initialStateNewMealEntry = {
        mealType: '', 
        category: '',
        dish: '',
        servings: ''
    }
    
    const handleSubmitCb = newMealEntry => {
        // TODO: dispatch "newMealEntry" to the store
        console.log(newMealEntry)
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
                            <label>Meal Type (Breakfast/ Lunch/ Dinner)</label>
                            <input 
                                name="mealType"
                                type="text"
                                value={newMealEntry.mealType}
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
                            <label>Dish</label>
                            <input 
                                name="dish"
                                type="text" 
                                value={newMealEntry.dish}
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