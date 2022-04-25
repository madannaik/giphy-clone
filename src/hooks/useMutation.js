import axios from "axios";
import { useEffect, useState } from "react";


export const useMutation = (query) => {
    const [refetchUrl, setFetchUrl] = useState(null);

    const [state, setState] = useState({
        data: null,
        loading: false,
        error: false,
    });
    useEffect(() => {

        setState({ data: state.data, loading: true, error: false });
        axios.get(refetchUrl ?? query).then(res => {
            setState((prevData) => {
                return {
                    data: prevData.data !== null ?
                        [
                            ...prevData.data,
                            {
                                data: res.data.data
                            }
                        ] : [
                            {
                                data: res.data.data
                            }
                        ],

                    loading: false,
                    error: false,
                }
            })
        }).catch(err => {
            setState({
                data: state.data,
                loading: false,
                error: true,
            })
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, refetchUrl]);
    // const getNextpage = async (url, variables) => {
    //     try {
    //         setState({ data: state.data, loading: true, error: false });

    //         const { data: resdata } = await axios.get(url(variables))

    //         setState((prevData) => {
    //             return {
    //                 data: [
    //                     ...prevData.data,
    //                     {
    //                         data: resdata.data
    //                     }
    //                 ],
    //                 loading: false,
    //                 error: false,
    //             }
    //         })
    //     } catch {
    //         setState({
    //             data: null,
    //             loading: false,
    //             error: true,
    //         })
    //     }
    // };
    // const fetch = async (url, variables) => {
    //     try {
    //         setState({ data: null, loading: true, error: false });

    //         const { data: resdata } = await axios.get(url(variables))

    //         setState({
    //             data: [
    //                 {
    //                     data: resdata.data
    //                 }
    //             ],
    //             loading: false,
    //             error: false,
    //         })

    //     } catch {
    //         setState({
    //             data: null,
    //             loading: false,
    //             error: true,
    //         })
    //     }
    // };
    function getNextpage(urlnext) {
        setFetchUrl(urlnext)
    }

    return { ...state, getNextpage };
};