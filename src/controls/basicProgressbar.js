/* eslint-disable no-global-assign */
import React from 'react'

function BasicProgressbar(props) {
    return (
    <>
    <div className='m-2'>
    <p>{props.skill}</p>
    <div className="progress w-50 m-auto">
    <div className="progress-bar" role="progressbar" aria-valuenow={props.percent}
    aria-valuemin="0" aria-valuemax="100" style={{width: props.percent + '%'}}>
        {props.percent}%
    </div>
    </div>
    </div>
    </>
    )
}

export default BasicProgressbar