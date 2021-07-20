import React from 'react'
import classes from './BackDrop.module.css'

export default function BackDrop(props) {
    return (
        <div className = {classes.BackDrop} onClick = {props.onClick}>
            
        </div>
    )
}
