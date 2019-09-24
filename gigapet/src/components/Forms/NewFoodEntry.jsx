import React from 'react'
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
        // TODO: use earlier git commit with R.compose to split the categories into an array
        // before dispatching it to the store
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
    
    return (
        <Modal trigger={<Small><Button color="green">Add a new food entry</Button></Small>}>
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
                        <Button color="green">+</Button>
                    </Form>
                </Centered>
            </Modal.Content>
        </Modal>
    )
}