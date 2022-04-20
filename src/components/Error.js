import React from 'react'

export const Error = ({ Error, divH }) => {
    return Error ? (
        <div style={{ top: divH + "px", }} className="error">
            <div className='error__desc'>OOPs....something went wrong..,<span>Try again?</span></div>
        </div>) : (<></>)
}
