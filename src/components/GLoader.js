import React from 'react'

export const GLoader = ({ loading, divH }) => {

    return (
        loading ? (<div style={{
            top: divH + "px",
        }}>
            <div className='gloader'>
                <div className="gloader__1 gloader__itm"></div>
                <div className="gloader__2 gloader__itm"></div>
                <div className="gloader__3 gloader__itm"></div>
                <div className="gloader__4 gloader__itm"></div>
                <div className="gloader__5 gloader__itm"></div>
            </div>
        </div>) : (<></>)
    )
}
