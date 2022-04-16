import React from 'react'
import { SingleGif } from '../components/SingleGif'
import useQuery from '../hooks/useQuery'
import { getRows } from '../utils/getgridRows'
import { trendingURL } from '../utils/url.js'

export const TrendingGrid = () => {
    const { data, error, isError, loading } = useQuery(trendingURL)
    const rowWidth = getRows(window.innerWidth);
    let width;
    let height = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
    };
    // console.log(window.innerWidth);
    React.useEffect(() => {
        console.log(data);
    }, [data])
    return (
        <section className='trendgrid'>
            {/* <p >Treanding</p> */}
            {data && data.data.map((src, index) => {
                let num = (index % 4)
                let oldheight;
                if (num === 0) {
                    width = 0;
                }
                else width += 264
                console.log(width, index);
                if (index === 0 || index === 1 || index === 2 || index === 3);
                else {
                    oldheight = height[num];
                    height[num] += parseInt(src.images['480w_still'].height) + 20;
                }

                return (<SingleGif key={index} src={src} height={oldheight} width={width} index={index} />)
                // let num = (index % 4)
                // let oldheight;
                // if (num === 0) {
                //     width = 0;
                // }
                // else width += 264
                // console.log(width, index);
                // if (index === 0 || index === 2 || index === 2 || index === 3);
                // else {
                //     oldheight = height[num];
                //     height[num] += parseInt(src.images['480w_still'].height) + 20;
                // }
                // console.log();
                // const style = {
                //     width: '248px',
                //     height: src.images['480w_still'].height + "px",
                //     transform: `translate3d(${width}px,${oldheight}px,0)`,
                //     position: "absolute",
                // }
                // return <div key={index} style={style}>
                //     <img width={"100%"} height="100%" src={src.images['original'].url} alt={src.slug} />
                // </div>
            })}
        </section>
    )
}
