import { useCallback, useEffect, useState } from "react";
import { errorMessage, successMessage } from "../utils/ToastMessages";
import { IShowTimeByDate } from "../interface/IShowTimeDetail";

interface UseFetchOptions<T> {
    fetchFunction: () => Promise<any>;
    enabled?: boolean;
}

export function useFetch<T>({
    fetchFunction,
    enabled = true,
}: UseFetchOptions<T>) {

    const [data, setData] = useState<T[] | []>([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {

        try {

            setLoading(true);

            setError(null);
            const response:any =  await fetchFunction();
                  



            if (!response.success) {
                   errorMessage(response.message)
                   setLoading(false)
                   return
            }
            
           successMessage(response.message)
            setData(response.data);

        } catch (err: any) {

            setError(err?.message || "Something went wrong");

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        if (!enabled) return;

        fetchData();

    }, [enabled, fetchFunction]);

    return {

        data,

        loading,

        error,

        refetch: fetchData,

        setData,

    };

}