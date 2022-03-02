import type { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import { theme } from "../src/theme";
import TopBar from "../components/topBar";
import GridGroup from "../components/gridGroup";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DogLover App</title>
        <meta name="description" content="In need of some serotonin boost?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <div
          style={{
            backgroundImage: "url(./images/pexels-pixabay-37401.jpg)",
            padding: "10px",
            overflow: "hidden",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <TopBar />
          <GridGroup />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Home;
