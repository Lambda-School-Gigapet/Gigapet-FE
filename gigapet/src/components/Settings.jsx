import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Navigation from './Layout/Navigation'
import { Button, Modal } from 'semantic-ui-react'
import styled from 'styled-components'

import { deleteAccount } from '../store/actions'

const BreathingSpace = styled.div`
    margin-top: 3rem;
    margin-left: 1.5rem;
`

export default function Settings(props) {
    const dispatch = useDispatch()

    const handleDeleteAccount = () => {
        dispatch(deleteAccount(props.history))
    }

    const [modalOpen, setModalOpen] = useState(false)
    const handleOpen = () => setModalOpen(true)
    const handleClose = () => setModalOpen(false)
    
    return (
        <>
        <Navigation />
        <BreathingSpace>
            <Modal 
                trigger={<Button color="red" onClick={handleOpen}>Delete Account</Button>}
                closeIcon
                open={modalOpen}
                onClose={handleClose}
            >
                <Modal.Content>
                    Are you sure you want to delete your account? This action is irreversible
                </Modal.Content>
                <Modal.Actions>
                    <Button color="red" onClick={handleDeleteAccount}>Yes, delete</Button>
                    <Button onClick={handleClose}>No</Button>
                </Modal.Actions>
            </Modal>
        </BreathingSpace>
        </>
    )
}