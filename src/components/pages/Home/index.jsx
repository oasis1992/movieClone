import { useState } from 'react'
import HeaderMovie from '../../molecules/HeaderMovie'
import SliderMovies from '../../organims/SliderMovies'
import { Box, Modal } from '@mui/material'
import useMoviesPopularsPaginate from '../../../hooks/useMoviesPopularsPaginate'
import useMoviesBestRatedPaginate from '../../../hooks/useMoviesBestRatedPaginate'
import useMoviesUpcomingPaginate from '../../../hooks/useMoviesUpcomingPaginate'
import FullCardMovie from '../../molecules/FullCardMovie'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    backgroundColor: 'white',
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.4)',
    borderRadius: 10,
  };

const Home = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [movieSelected, setMovieSelected] = useState(null)
    const { loading, movies, paginate } = useMoviesPopularsPaginate()

    const { loading: loadingBestRated, movies: moviesBestRated, paginate: paginateBestRated } = useMoviesBestRatedPaginate()
    const { loading: loadingUpComing, movies: moviesUpComing, paginate: paginateUpComing } = useMoviesUpcomingPaginate()
   
    const handleNextMoviePupulars = () => {
        paginate()
    }

    const handleNextMovieBestRated = () => {
        paginateBestRated()
    }

    const handleNextMovieUpComing = () => {
        paginateUpComing()
    }

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    const handleClickMovie = (movie) => {
        setMovieSelected(movie)
        setIsOpenModal(true)
    }

    return (
        <div>
            <HeaderMovie />

            <Box sx={{ p: 12 }}>
                <Box sx={{ paddingBottom: 8.7 }}>
                    <SliderMovies 
                        loading={loading}
                        onNextPage={handleNextMoviePupulars}
                        onClick={handleClickMovie}
                        title="Más populares"
                        movies={movies}
                    />
                </Box>

                <Box sx={{ paddingBottom: 8.7 }}>
                    <SliderMovies
                        onClick={handleClickMovie}
                        loading={loadingBestRated}
                        onNextPage={handleNextMovieBestRated}
                        title="Mejor evaludadas" 
                        movies={moviesBestRated} 
                    />
                </Box>
                
                <Box sx={{ paddingBottom: 8.7 }}>
                    <SliderMovies 
                        onClick={handleClickMovie}
                        loading={loadingUpComing}
                        onNextPage={handleNextMovieUpComing}
                        title="Próximos estrenos" 
                        movies={moviesUpComing} 
                    />
                </Box>
            </Box>

            <Modal
                open={isOpenModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <Box style={style}>
                        {movieSelected && <FullCardMovie movie={movieSelected} />}
                    </Box>
                </Modal>
        </div>
    )
}

export default Home
