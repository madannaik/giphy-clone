import axios from "axios";
import { useState } from "react";


export const useMutation = (query) => {
    const [state, setState] = useState({
        data: null,
        loading: false,
        error: false,
    });
    const getNextpage = async (url, variables) => {
        try {
            setState({ data: state.data, loading: true, error: false });

            const { data: resdata } = await axios.get(url(variables))
            console.log(resdata);
            setState((prevData) => {
                return {
                    data: [
                        ...prevData.data,
                        {
                            data: resdata.data
                        }
                    ],
                    loading: false,
                    error: false,
                }
            })
        } catch {
            setState({
                data: null,
                loading: false,
                error: true,
            })
        }
    };
    const fetch = async (url, variables) => {
        try {
            setState({ data: null, loading: true, error: false });

            const { data: resdata } = await axios.get(url(variables))

            setState({
                data: [
                    {
                        data: resdata.data
                    }
                ],
                loading: false,
                error: false,
            })

        } catch {
            setState({
                data: null,
                loading: false,
                error: true,
            })
        }
    };
    return { ...state, fetch, getNextpage };
};