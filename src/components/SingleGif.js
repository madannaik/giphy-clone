import React, { useState } from 'react'
import { randomColor } from '../utils/getRandomColors'

export const SingleGif = ({ src, index, width, height, calcHeight }) => {
    const [color, setColor] = useState()

    React.useEffect(() => {
        setColor(randomColor())

    }, [])

    const style = {
        width: calcHeight + 'px',
        height: src.images['480w_still'].height > 400 ? "400px" : src.images['480w_still'].height + "px",
        transform: `translate(${width}px,${height}px)`,
        position: "absolute",
        backgroundColor: color,
        borderRadius: "5px",
        overflow: "hidden"
    }

    return (
        <div style={style}>
            <picture style={{
                height: "100%",
                width: "100%",
            }} >
                <source type='image/webp' srcSet={src.images['original'].webp} />
                <img style={{
                    maxWidth: calcHeight + "px",
                }} width={"100%"} height="100%" src={src.images['original'].gif} alt={src.slug} />
            </picture>
        </div>
    )
}
