import React, { useState } from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'
import styled from 'styled-components'

import useForm from '../../hooks/useForm'

const Centered = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Small = styled.div`
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
    }
    
    const [newMealEntry, handleChanges, handleSubmit] = useForm(initialStateNewMealEntry, handleSubmitCb)
    const [modalOpen, setModalOpen] = useState(false)

    const handleOpen = () => setModalOpen(true)
    const handleClose = () => setModalOpen(false)
    
    return (
        <Modal 
            trigger={
                <Small>
                    <Button onClick={handleOpen} color="green">Add a new food entry</Button>
                </Small>
            }
            open={modalOpen}
            onClose={handleClose}
        >
            {/* TODO: dynamically add child's name to modal header */}
            <Modal.Header>New meal for Johnny</Modal.Header>
            <Modal.Content>
                <Centered>
                    <Form>
                        <Form.Field>
                            <label>Meal Type (Breakfast/ Lunch/ Dinner)</label>
                            <input 
                                name="mealType"
                                type="text" 
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Category</label> 
                            <input 
                                name="category"
                                type="text" 
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Dish</label>
                            <input 
                                name="dish"
                                type="text" 
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Servings</label>
                            <input 
                                name="servings"
                                type="text" 
                            />
                        </Form.Field>
                        <Centered><Button onClick={handleClose} color="green">+</Button></Centered>
                    </Form>
                </Centered>
            </Modal.Content>
        </Modal>
    )
}