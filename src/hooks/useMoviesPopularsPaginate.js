import { useState, useEffect, useCallback } from 'react'

const useMoviesPopularsPaginate = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    
    const getMoviesPopulars = useCallback(async (currentPage) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage}`)
        const data = await response.json()
        return data
    }, [])

    useEffect(() => {
        const fetch = async () => {
            setLoading(true)
            const data = await getMoviesPopulars(currentPage)
            setMovies((prevState) => [...prevState, ...data.results])
            setTotalPages(data.total_pages)
            setLoading(false)
        }
        fetch()
    }, [currentPage, getMoviesPopulars])
    
    const paginate = useCallback(() => {
        setCurrentPage((prevState) => prevState + 1)
    }, [])
    
    return { movies, loading, currentPage, totalPages, paginate }
}

export default useMoviesPopularsPaginate
