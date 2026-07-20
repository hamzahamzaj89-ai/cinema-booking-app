export interface InfiniteResponse<T> {
    success: boolean;
    data: T[];
    hasNextPage: boolean;
    message?: string;
}
