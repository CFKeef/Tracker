import React from 'react';
import { Box, GridItem } from "@chakra-ui/react";
import Sidebar from "./sidebar";
import { HigherOrderFC } from "../../interfaces";

const Layout:React.FunctionComponent<HigherOrderFC> = ({children}) => {
  return (
    <Box minH={"100vh"} minW={"100vw"} display={"grid"} gridTemplateColumns={".2fr .8fr"}>
      <GridItem>
        <Sidebar />
      </GridItem>
      <GridItem w={"100%"} h={"100%"}>
        {children}
      </GridItem>
    </Box>
  )
}

export default Layout;