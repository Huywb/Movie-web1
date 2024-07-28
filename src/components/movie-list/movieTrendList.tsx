import { Box, Grid, Paper } from '@mui/material'
import { MovieDataType } from '../../assets/data'
import MovieTrendCard from '../movie-card/movieTrend'

interface movieTrendListProps{
    trendingList: MovieDataType[]
}

const MovieTrendList = ({trendingList}: movieTrendListProps) => {
  return (
    <Box sx={{display: 'fex', gap:2, overflowX: "scroll"}}>
      {trendingList.map(( item )=>(
        <Grid item key={item.id}>
          <Paper elevation={0} sx={{backgroundColor: 'transparent'}}>
              <MovieTrendCard movie={item}></MovieTrendCard>
          </Paper>
        </Grid>
      ))}
    </Box>
  )
}

export default MovieTrendList