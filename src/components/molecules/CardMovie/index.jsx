import { forwardRef } from 'react'
import { Card, CardActionArea, CardMedia } from '@mui/material'
import { Title, Date } from './style'

const CardMovie = forwardRef(({ className, movie, onClick }, ref) => (
    <Card ref={ref} onClick={() => {
        if (onClick) {
            onClick(movie)
        }
    }} className={className} sx={{ minWidth: 188 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="282"
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
            />
        </CardActionArea>
        <Title>{movie.title}</Title>
        <Date>{movie.release_date}</Date>
    </Card>
))

export default CardMovie
