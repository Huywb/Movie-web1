import { Box } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "../components/sidebar";

interface LayoutProps{
    children: ReactNode,

}
const Layout = ({children}: LayoutProps) => {
  return (
    <Box sx={{backgroundColor: '#10141F',  display: 'flex',flexDirection:{
        xs: "column", lg:'row'
    }, color:"white",padding: 3, gap:3 ,overflowY: "hidden" ,height: 'auto'}}>
      <Sidebar></Sidebar>
      <Box sx={{width: "100%",overflowY:"hidden"}}>{children}</Box>
    </Box>
  )
}

export default Layout