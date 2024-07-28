import { ChangeEvent, useState } from 'react'
import Layout from '../../Layout'
import { Box, Input, Paper, Typography } from '@mui/material'
import SearchIcon from '../../assets/icons/icon-search.svg'
import MovieTrendList from '../../components/movie-list/movieTrendList'
import MovieList from '../../components/movie-list'
import { useSelector } from 'react-redux'
import { MovieDataType } from '../../assets/data'

const Home = () => {
  const [search,setSearch] = useState('')
  const [searchList,setSearchList] = useState<MovieDataType[]>([])
  const movie = useSelector((state: any) => state.movie)
  const handleSearchChange =(e:ChangeEvent<HTMLInputElement>)=>{
    const Searchlist  = movie.movies.filter((item: MovieDataType)=> item.title.toLowerCase().includes(search.toLowerCase()))
    setSearchList(Searchlist)
    setSearch(e.target.value)
  }
  const handleSearch = ()=>{
    const Searchlist  = movie.movies.filter((item: MovieDataType)=> item.title.toLowerCase().includes(search.toLowerCase()))
    setSearchList(Searchlist)
  }
  const trendingList = movie.movies.filter((item : MovieDataType)=>item.isTrending)
  const recomendList = movie.movies.filter((item : MovieDataType)=>!item.isTrending)
  return (
    <Layout>
      <Box>
        <Paper component='form' sx={{display:'flex',alignItems:'center',borderRadius: 'default',p:1,backgroundColor:'#10141f',border:'none',gap:1}}>
          <img src={SearchIcon} alt="search" width={40} height={40} onClick={handleSearch} />
          <Input placeholder='Search for movies' sx={{ml:1, flex:1,color:'white',border:'none'}} value={search} onChange={(e:ChangeEvent<HTMLInputElement>)=>handleSearchChange(e)}>
          </Input>
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search == ''  ? (
          <Box width='100%'>
            <Box width='100%'>
              <Typography variant='h5' component='h1' my={6} fontWeight={400}>
                Trending
              </Typography>
              <MovieTrendList trendingList={trendingList}></MovieTrendList>
            </Box>
            <Box width='100%'>
              <Typography variant='h5' component='h1' my={6} fontWeight={400}>
                Recommended for you
              </Typography>
              <MovieList recomendList={recomendList}></MovieList>
            </Box>
          </Box>
        ):(
          <Box width='100%'> 
            <Typography>Found {searchList.length} film</Typography>
            <MovieList recomendList={searchList}></MovieList>
          </Box>
        )}
      </Box>
    </Layout>
  )
}

export default Home