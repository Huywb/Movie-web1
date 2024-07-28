import {  Grid, Paper } from '@mui/material'
import { MovieDataType } from '../../assets/data'
import MovieCard from '../movie-card'

interface movieListProps{
    recomendList: MovieDataType[]
}

const MovieList = ({recomendList}: movieListProps) => {
  return (
    <Grid container spacing={6}>
      {recomendList.map(( item )=>(
        <Grid item key={item.id}>
          <Paper elevation={0} sx={{backgroundColor: 'transparent'}}>
              <MovieCard movie={item}></MovieCard>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default MovieList