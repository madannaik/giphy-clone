import React from 'react'

export const SingleGif = ({ src, index, width, height }) => {

    console.log();
    const style = {
        width: '248px',
        height: src.images['480w_still'].height + "px",
        transform: `translate(${width}px,${height}px)`,
        position: "absolute",
    }
    return (
        <div style={style}>
            <img width={"100%"} height="100%" src={src.images['original'].url} alt={src.slug} />
        </div>
    )
}
