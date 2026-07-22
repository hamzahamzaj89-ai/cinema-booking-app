import { useCallback, useEffect, useState } from "react";
import { errorMessage, successMessage } from "../utils/ToastMessages";
import { IShowTimeByDate } from "../interface/IShowTimeDetail";

interface UseFetchOptions<T, P> {
  fetchFunction: (data: P) => Promise<any>;
  enabled?: boolean;
  append?: boolean;
}

export function usePost<T , P>({ fetchFunction }: UseFetchOptions<T, P>) {
  const [data, setData] = useState<T | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const postData = async (data: P) => {


    try {
      setLoading(true);

      setError(null);
      const response: any = await fetchFunction(data);


      if (!response.success) {
        errorMessage(response.message);
        setLoading(false);
        return;
      }


      successMessage(response.message);
      setData(response?.data);
    } catch (err: any) {
      errorMessage(err?.message);
      setError(err?.message || "Something went wrong");
      setData(null);


    } finally {
      setLoading(false);
    }
  };

  return {
    data,

    loading,

    error,

    postData: postData,

    setData,
  };
}
