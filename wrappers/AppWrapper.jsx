import React from "react";
import Head from "next/head";
import { Header } from "../components";
import { Box } from '@chakra-ui/react'
import styles from "./appWrapper.module.css";

const AppWrapper = (Components) =>
  function HOC() {
    return (
      <>
        <Head>
          <title>Arabia E-advertising | MENA Gaming and eSport Agency</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Nunito:wght@200;500;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        
        <Box className={styles.app_bg}>
        <Header />
        <Components />
        </Box>
        
        
      </>
    );
  };

export default AppWrapper;
