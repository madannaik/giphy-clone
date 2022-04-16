import { useState, useEffect } from 'react';
import axios from 'axios';

function useQuery(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        setData(null);
        setIsError(false);
        setError(null);

        axios.get(url)
            .then(res => {
                setLoading(false);
                setData(res.data)
            })
            .catch(err => {
                setIsError(true);
                setLoading(false)
                setError('Network error');
            })
        return () => {

        }
    }, [url])

    return { data, loading, error, isError }
}
export default useQuery;