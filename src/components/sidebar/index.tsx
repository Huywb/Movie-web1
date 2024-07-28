
import { Box, Hidden, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineHome } from "react-icons/md";
import { MdOutlineMovie } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import { MdBookmarkBorder } from "react-icons/md";




const navLink = [
    {
        name:"Home",
        icon: <MdOutlineHome size={30}></MdOutlineHome>,
        link: "/"
    },
    {
        name:"Movies",
        icon: <MdOutlineMovie size={30}></MdOutlineMovie>,
        link: "/movie"
    },
    {
        name:"Tv series",
        icon: <RiFileList2Line size={30}></RiFileList2Line>,
        link: "/tv-series"
    },
    {
        name:"Bookmark",
        icon: <MdBookmarkBorder size={30}></MdBookmarkBorder>,
        link: "/bookmark"
    }
]

const Sidebar = () => {
    const {pathname} = useLocation()
  return (
    <Box sx={{backgroundColor:"161d2f",padding:2,borderRadius:2, display: "flex",flexDirection:{xs:"column",lg:"row"}, alignItems: 'starat',
              justifyContent: "space-between",width:{ sm: "100%",lg: 200}  }}          >
        <Box sx={{display: 'flex', flexDirection:{ xs: "row",lg: "column"},gap:5, alignItems:{ xs: "center",lg:'start'},width:"100%"}}>
            <Hidden smDown>
                <Typography variant='h5' component='h1' my={2} fontWeight={400} fontSize={18}>ShowApp</Typography>
            </Hidden>
            <Box sx={{py:{xs:'0px',lg:'16px'},display: 'flex',flexDirection:{xs: 'row',lg:'column'},gap:4}}>
                {navLink.map((item)=>(
                    <Box key={item.name} sx={{display: 'flex',alignItems:'center',gap:2,color: 'white',textDecoration: 'none'}}>
                    <Box>{item.icon}</Box>
                    <Link  to={item.link} style={{textDecoration: 'none'}}>
                        <Hidden mdDown>
                            <Typography style={{color:`${pathname===item.link ? 'red' : 'white'}` }}>{item.name}</Typography>
                        </Hidden>
                    </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    </Box>
  )
}

export default Sidebar