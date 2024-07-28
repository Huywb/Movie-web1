import { MovieDataType } from '../../assets/data'
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import moviesIcon from '../../assets/icons/icon-category-movie.svg'
import tvSeriesIcon from '../../assets/icons/icon-category-tv.svg'
import BookmarkIcon from '../icons/bookmark-icon'
import BookmarkEmptyIcon from '../icons/bookmark-empy-icon'
import { useDispatch, useSelector } from 'react-redux'
import { isBookmark } from '../../redux/slice'


interface MovieTrendCardProps{
    movie: MovieDataType
}

const MovieTrendCard = ({movie} : MovieTrendCardProps) => {
    const dispath = useDispatch()
    const movies = useSelector((state : any)=>state.movie)
    const handleToggleBookMark= async(value: string)=>{
        await dispath(isBookmark(value))
        console.log('abc',movies)
    }

    
  return (
    <Card key={movie.id} elevation={0} style={{backgroundColor: 'transparent'}}>
        <CardContent style={{padding:0, position: 'relative',display: 'flex'}}>
            <img src={movie.thumbnail.regular.large} alt='' style={{width:'300px',height:'100%', borderRadius: "8px"}}></img>
            <Box position='absolute' left={0} top={0} right={0} bottom={0} bgcolor='rgba(0,0,0,0.6)' borderRadius='8px'></Box>
            <Stack mt='6px' spacing={0} position='absolute' bottom={0} left={0} right={0} p={4}>
                <Grid container alignItems='center' spacing={1}>
                    <Grid item>
                        <Typography fontSize={10} color='#E0E0E0' aria-label='year of movie'>{movie.year}</Typography>
                    </Grid>
                    <Grid item>
                        <Box sx={{width: '1rem',height: '1rem',bg: '#E0E0E0',borderRadius: 'full'}}></Box>
                    </Grid>
                    <Grid item>
                        <img src={movie.category==="Movies"? moviesIcon: tvSeriesIcon} alt='' width={16} height={16}></img>
                    </Grid>
                    <Grid item>
                        <Typography fontSize={10} color='#E0E0E0' aria-label='movie category'>{movie.category}</Typography>
                    </Grid>
                    <Grid item>
                        <Box sx={{width: '1rem',height: '1rem',bg: '#E0E0E0',borderRadius: 'full'}}></Box>
                    </Grid>
                    <Grid item>
                        <Typography fontSize={10} color='#E0E0E0' aria-label='movie rating'>{movie.rating}</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                        <Typography color='#E0E0E0' padding={0} aria-label='movie category'>{movie.title}</Typography>
                    </Grid>
            </Stack>
            <Box sx={{position:'absolute',top:0, left:0,right:0,display: 'flex',justifyContent:'flex-end',padding: '16px'}}>
                <Box onClick={()=>handleToggleBookMark(movie.id)} sx={{p:'1rem',backgroundColor: 'black', borderRadius:"100%",cursor: 'pointer',"&:hover":{opacity: .8}}}  >
                    {movie.isBookmarked ? <BookmarkIcon fill={"#E0E0E0"}></BookmarkIcon>: <BookmarkEmptyIcon></BookmarkEmptyIcon>}
                </Box>
            </Box>
        </CardContent>
    </Card>
  )
}

export default MovieTrendCard