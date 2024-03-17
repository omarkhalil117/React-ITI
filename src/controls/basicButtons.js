import React from 'react'
import { Button } from '@mui/material'
export default function BasicButtons(props) {
    return (
        <>
        <Button variant={props.variant}>{props.text}</Button>
        </>
    )
}
