import { useCallback, useEffect, useState } from "react";
import { errorMessage, successMessage } from "../utils/ToastMessages";
import { IShowTimeByDate } from "../interface/IShowTimeDetail";

interface UseFetchOptions<T> {
    fetchFunction: () => Promise<any>;
    enabled?: boolean;
    append?: boolean
}

export function useFetch<T>({
    fetchFunction,
    enabled = true,
    append = false
    
}: UseFetchOptions<T>) {

    const [data, setData] = useState<T[] | []>([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {

        try {

            setLoading(true);

            setError(null);
            const response:any =  await fetchFunction();



            if (append) {

               if (!response.hasMore) {

                       errorMessage("No More Movies found")
                       setLoading(false)
                       return
               }  


               setData([...data , response.data])

            }  else {


                 if (!response.success) {
                   errorMessage(response.message)
                   setLoading(false)
                   return
            }
            
           successMessage(response.message)
            setData(response.data);



            }
                  



           

        } catch (err: any) {
            errorMessage(err?.message)
            setError(err?.message || "Something went wrong");
            setData([])

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