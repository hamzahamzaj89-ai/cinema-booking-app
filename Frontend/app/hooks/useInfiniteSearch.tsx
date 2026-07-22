import { useCallback, useEffect, useState } from "react";
import { InfiniteResponse } from "../interface/InfiniteResponse";
import { errorMessage } from "../utils/ToastMessages";


interface Props<T> {
    fetchFunction: (
        page: number,

    ) => Promise<any>;

    enabled?: boolean;
}

export function useInfiniteSearch<T>({
    fetchFunction,
    enabled = true,
}: Props<T>) {

    const [data, setData] = useState<T[]>([]);


    const [page, setPage] = useState(0);

    const [loading, setLoading] = useState(false);

    const [loadingMore, setLoadingMore] = useState(false);

    const [refreshing, setRefreshing] = useState(false);

    const [hasNextPage, setHasNextPage] = useState(false);

    const [error, setError] = useState<string | null>(null);

    const fetchPage = useCallback(
        async (
              pageNumber: number,
          
            append = false
        ) => {

            try {

                append
                    ? setLoadingMore(true)
                    : setLoading(true);

                const response =
                    await fetchFunction(pageNumber);



                if (!response?.success) {

                    setError(response?.message ?? "Failed");

                    return;
                }

                setHasNextPage(
                    response?.hasNextPage
                );

                setPage(pageNumber);

                if (append) {

                    setData((prev) => [
                        ...prev,
                        ...response?.data,
                    ]);

                } else {
                  
                    setData(response?.data);

                }

            } catch (err: any) {
                setData([])
                errorMessage(err?.message)
                setError(err.message);

            } finally {

                setLoading(false);

                setLoadingMore(false);

                setRefreshing(false);

            }

        },
        [fetchFunction]
    );

    useEffect(() => {

        if (!enabled) return;

        fetchPage(0);

    }, [enabled, fetchPage]);

    const loadMore = () => {

        if (
            loading ||
            loadingMore ||
            !hasNextPage
        )
            return;


        fetchPage(page + 1, true);

    };

    const refresh = () => {

        setRefreshing(true);

        fetchPage(0 );

    };

    return {
    

        data,

        loading,

        loadingMore,

        refreshing,

        hasNextPage,

        error,

        loadMore,

        refresh,

        setData,
    };
}