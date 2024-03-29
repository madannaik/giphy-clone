import { useState, useEffect } from 'react';


export const useScroll = () => {

    const [isBottom, setIsBottom] = useState(false);

    const handleScroll = () => {
        const position = window.scrollY;

        if (document.documentElement.offsetHeight === Math.round(position + document.documentElement.clientHeight) ||
            document.documentElement.offsetHeight - 1 === Math.round(position + document.documentElement.clientHeight) ||
            document.documentElement.offsetHeight === Math.round(position + document.documentElement.clientHeight) - 1 ||
            document.documentElement.offsetHeight + 1 === Math.round(position + document.documentElement.clientHeight)
        ) {
            setIsBottom(true)
        }
        else setIsBottom(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return { isBottom };
}