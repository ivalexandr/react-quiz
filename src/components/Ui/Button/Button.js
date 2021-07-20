import React from 'react'
import classes from './Button.module.css'


export default function Button(props) {
    const cls = [
        classes.Button,
        classes[props.type]
    ]
    return (
        <button
            onClick={props.onClick}
            className={cls.join(' ')}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}
