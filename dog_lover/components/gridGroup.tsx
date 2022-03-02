import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DogGenerator from "./dogGeneratorBox";
import BreedSelectorBox from "./breedSelectorBox";
import BreedImageGenerator from "./breedImageGenerator";
import {
  useVariableBreedContext,
  useVariableClickedBreedContext,
  useVariableOpenContext,
} from "../src/breedContext";

const GridGroup: FunctionComponent = () => {
  const clickedBreed = useVariableClickedBreedContext();
  const isOpened = useVariableOpenContext();
  const breeds = useVariableBreedContext();

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        marginTop: "5px",
      }}
    >
      <Grid container spacing={10} direction="row">
        <Grid item lg="auto" xl={7.5} />
        <Grid item md="auto" xl={3.5}>
          <DogGenerator />
        </Grid>
        <Grid item lg={1} />
        <Grid item md="auto">
          <BreedSelectorBox />
        </Grid>
        <Grid item lg="auto" xl={6.5} />
        <Grid item md="auto">
          {breeds &&
            breeds.map((breed) => {
              return (
                clickedBreed[breed.key] &&
                isOpened && (
                  <BreedImageGenerator breed={breed.key} key={breed.key} />
                )
              );
            })}
        </Grid>
      </Grid>
    </Box>
  );
};
export default GridGroup;
