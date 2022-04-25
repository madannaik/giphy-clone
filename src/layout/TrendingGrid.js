/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Error } from '../components/Error'
import { GLoader } from '../components/GLoader'
import { SingleGif } from '../components/SingleGif'
import { useMutation } from '../hooks/useMutation'
import { useScroll } from '../hooks/useScroll'
import { getgridDetails } from '../utils/getGridDetails'
import { searchUrl, trendingURL } from '../utils/url.js'

export const TrendingGrid = () => {

    const { isBottom } = useScroll()
    const param = useParams()
    const [divH, setDivH] = useState(0);
    const ref = useRef({ offset: 0 })
    const gridRef = {
        width: 0,
        height: { 0: 0, 1: 0, 2: 0, 3: 0 },
        calcHeight: 0,
    }

    const { data, fetch, loading, error, getNextpage } = useMutation()

    React.useEffect(() => {
        ref.current.offset = 0;
        if (param.q === undefined) {
            fetch(trendingURL, { offset: 0 });
        }
        else {
            fetch(searchUrl, { offset: 0, query: param.q })
        }
    }, []);
    React.useEffect(() => {
        ref.current.offset = 0;
        if (param.q === undefined) {
            fetch(trendingURL, { offset: 0 });
        }
        else {
            fetch(searchUrl, { offset: 0, query: param.q })
        }
    }, [param])

    React.useEffect(() => {
        setDivH(Math.max(...Object.values(gridRef.height)));
    }, [gridRef.height])

    React.useEffect(() => {
        if (isBottom) {
            ref.current.offset += 50;
            param.q === 'undefined'
                ? getNextpage(trendingURL, { offset: ref.current.offset })
                : getNextpage(searchUrl, { query: param.q, offset: ref.current.offset })
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
