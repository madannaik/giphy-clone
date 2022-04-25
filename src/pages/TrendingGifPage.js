/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react'
import { Error } from '../components/Error'
import { GLoader } from '../components/GLoader'
import { SingleGif } from '../components/SingleGif'
import { useMutation } from '../hooks/useMutation'
import { useScroll } from '../hooks/useScroll'
import { getgridDetails } from '../helpers/getGridDetails'
import { trendingURL } from '../helpers/url.js'

export const TrendingGridPage = () => {

    const { isBottom } = useScroll()
    const [divH, setDivH] = useState(0);
    const ref = useRef({ offset: 0 })
    const gridRef = {
        width: 0,
        height: { 0: 0, 1: 0, 2: 0, 3: 0 }
    }

    const { data, error, loading, getNextpage } = useMutation(trendingURL({ offset: ref.current.offset }))


    useEffect(() => {
        setDivH(Math.max(...Object.values(gridRef.height)));
    }, [gridRef.height])

    useEffect(() => {
        if (isBottom) {
            ref.current.offset = ref.current.offset + 50;
            console.log(ref);
            getNextpage(trendingURL({ offset: ref.current.offset }))
        }
    }, [isBottom])

    return (
        <section className='trendgrid' style={{ height: divH + "px" }}>
            {data !== null ? data.map((sData, index) => {
                return sData.data.map((src, index) => {
                    return (
                        <SingleGif key={index} src={src} height={getgridDetails(gridRef, src, index)} calcHeight={gridRef.calcHeight} width={gridRef.width} index={index} />
                    )
                })
            }) : <div>
                No stickers
            </div>}
            <GLoader loading={loading} divH={divH} />
            <Error error={error} divH={divH} />
        </section>
    )
}
