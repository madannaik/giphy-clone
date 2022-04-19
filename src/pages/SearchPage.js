/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GLoader } from '../components/GLoader'
import { SingleGif } from '../components/SingleGif'
import { useMutation } from '../hooks/useMutation'
import { useScroll } from '../hooks/useScroll'
import { getgridDetails } from '../utils/getGridDetails'
import { searchUrl } from '../utils/url.js'

export const TrendingGrid = () => {

    const { isBottom } = useScroll()
    const param = useParams()
    const [divH, setDivH] = useState(0);
    const ref = useRef({ offset: 0 })
    const gridRef = {
        width: 0,
        height: { 0: 0, 1: 0, 2: 0, 3: 0 }
    }

    const { data, fetch, loading, refetch } = useMutation()

    React.useEffect(() => {
        ref.current.offset = 0;
        fetch(searchUrl, { query: param.q, offset: 0 })
    }, []);


    React.useEffect(() => {
        setDivH(Math.max(...Object.values(gridRef.height)));
    }, [gridRef.height])

    React.useEffect(() => {
        if (isBottom)
            refetch(searchUrl, { query: param.q, offset: ++ref.current.offset })
    }, [isBottom])

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
