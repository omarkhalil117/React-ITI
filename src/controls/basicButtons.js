/* eslint-disable react/prop-types */
import React from 'react'
import { Button } from '@mui/material'
export default function BasicButtons(props) {
    return (
        <>
        <Button variant={props.option}>{props.text}</Button>
        </>
    )
}
