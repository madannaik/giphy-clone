import React from 'react'
import { getgridDetails } from '../utils/getGridDetails'
import { GLoader } from './GLoader'
import { SingleGif } from './SingleGif'

export const GifGrid = ({ data, divH, gridRef, loading }) => {
    return (
        <section className='trendgrid' style={{ height: divH + "px" }}>

            {data !== null ? data.map((sData, index) => {
                return sData.data.map((src, index) => {
                    let oldheight = getgridDetails(gridRef, src, index)
                    return (
                        <SingleGif key={index} src={src} height={oldheight} width={gridRef.width} index={index} />
                    )
                })
            }) : <>de</>}

            {loading && <div style={{
                transform: `translate(${gridRef.width}px,${divH}px)`,
                position: "absolute",
            }}>
                <GLoader />
            </div>}
        </section>
    )
}
