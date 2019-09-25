import React, { useState } from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'

import { Centered, Small } from './NewFoodEntry'
import { addNewChild } from '../../store/actions'
import useForm from '../../hooks/useForm'

export default function AddKid() {
    const { id } = useSelector(state => ({ id: state.user.id }))
    const dispatch = useDispatch()
    const [modalOpen, setModalOpen] = useState(false)

    const initialStateNewKid = {
        users_id: id,
        name: '',
        age: '',
        weight: ''
    }

    const handleSubmitCb = newKid => {
        console.log(newKid)
        setNewKid(initialStateNewKid)
        dispatch(addNewChild(newKid))
    }
    
    const [newKid, setNewKid, handleChanges, handleSubmit] = useForm(initialStateNewKid, handleSubmitCb)

    const handleOpen = () => setModalOpen(true)
    // The form won't submit without this setTimeout hack.
    // Without the setTimeout, the following warning appears in the console: 
    // Form submission canceled because the form is not connected
    const handleClose = () => setTimeout(() => setModalOpen(false), 0)
    
    return (
        <Modal 
            trigger={
                <Small>
                    <Button onClick={handleOpen} color="green">Add child</Button>
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
                            <label>Name</label>
                            <input 
                                name="name"
                                type="text"
                                value={newKid.name}
                                onChange={handleChanges}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Age</label>
                            <input 
                                name="age"
                                type="text"
                                value={newKid.age}
                                onChange={handleChanges}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Weight</label>
                            <input 
                                name="weight"
                                type="text"
                                value={newKid.weight}
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