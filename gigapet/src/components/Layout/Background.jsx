import React from 'react'

export default function Background(props) {
    return (
        <div style={{background: props.img}}>
            {props.children}
        </div>
    )
}