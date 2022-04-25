import React from 'react'

export const Error = ({ error, divH }) => {
    return error === true ? (
        <div style={{ top: divH + "px", }} className="error">
            <div className='error__desc'>OOPs....something went wrong..,<span>Try again?</span></div>
        </div>) : (<></>)
}
