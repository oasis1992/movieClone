import { Box, CardMedia } from '@mui/material'
import { Title, Overview } from './style'

const FullCardMovie = ({ movie }) => (
    <Box sx={{ paddingLeft: 30 / 8, paddingRight: 30 / 8, paddingTop: 40 / 8, paddingBottom: 40 / 8 }}>
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ minWidth: 355, marginRight: 30 / 8 }}>
                <CardMedia
                    sx={{ borderRadius: 6 / 8 }}
                    component="img"
                    height="532"
                    image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                />
            </Box>
            <Box>
                <Title>{movie.title}</Title>
                <Overview>{movie.overview}</Overview>
            </Box>
        </Box>
    </Box>
)

export default FullCardMovie
