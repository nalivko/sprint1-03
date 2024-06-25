import { SortDirection } from "mongodb"

export type blogsQueryParamsType = {
    pageNumber: number,
    pageSize: number,
    sortBy: string,
    sortDirection: SortDirection,
    searchNameTerm: string | null
}

export const setQueryParams = (query: {[key: string]: string | undefined}): blogsQueryParamsType => {
    return {
        pageNumber: query.pageNumber ? +query.pageNumber : 1,
        pageSize: query.pageSize ? +query.pageSize : 10,
        sortBy: query.sortBy ? query.sortBy : 'createdAt',
        sortDirection: query.sortDirection ? query.sortDirection as SortDirection : 'desc',
        searchNameTerm: query.searchNameTerm ? query.searchNameTerm : null
    }
}

export type postsQueryParamsType = {
    pageNumber: number,
    pageSize: number,
    sortBy: string,
    sortDirection: SortDirection
}

export const setPostsQueryParams = (query: {[key: string]: string | undefined}): postsQueryParamsType => {
    return {
        pageNumber: query.pageNumber ? +query.pageNumber : 1,
        pageSize: query.pageSize ? +query.pageSize : 10,
        sortBy: query.sortBy ? query.sortBy : 'createdAt',
        sortDirection: query.sortDirection ? query.sortDirection as SortDirection : 'desc'
    }
}