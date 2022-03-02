import React, { FunctionComponent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { NextRouter, useRouter } from "next/router";
import { useVariableOpenContext } from "../src/breedContext";

const TopBar: FunctionComponent = () => {
  const router: NextRouter = useRouter();
  const isOpened = useVariableOpenContext();

  const oneClickRandomDog = () => {
    const randomDogButton = document.getElementById("dogGenerator");
    if (randomDogButton) {
      randomDogButton.click();
    }
  };
  const oneClickBreedsList = () => {
    const breedSelectorButton = document.getElementById("whoLetTheDogsOut");
    if (breedSelectorButton) {
      breedSelectorButton.click();
    }
  };

  const twoClicksBreedsList = () => {
    router.push("/#breedSelector");
    oneClickBreedsList();
    oneClickRandomDog();
  };

  const twoClicksRandomDog = () => {
    router.push("/#randomDog");
    oneClickRandomDog();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="relative"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          width: "100%",
          height: "100vh",
          padding: "10px",
        }}
      >
        <Grid
          container
          direction="row"
          spacing={0.2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={1}>
            <Box
              sx={{
                background: "rgba(103, 164, 255, 0.7)",
                boxShadow: "none",
                borderRadius: "30px",
                padding: "5px",
                border: "1px solid black",
                flexGrow: 3,
              }}
            >
              <Typography
                variant="h5"
                component="h5"
                align="center"
                noWrap
                sx={{
                  color: "#EEEBA6",
                  display: { xs: "none", xl: "block" },
                }}
              >
                DogLover
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                align="center"
                noWrap
                sx={{
                  color: "#EEEBA6",
                  display: { lg: "block", xl: "none" },
                }}
              >
                DL
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={11}>
            <Grid
              container
              direction="row"
              spacing={0.3}
              justifyContent="flex-end"
              alignItems="center"
              sx={{ flexGrow: 3 }}
            >
              <Grid item>
                <Button
                  variant="contained"
                  size="small"
                  disableElevation
                  onClick={twoClicksRandomDog}
                  sx={{
                    boxShadow: "none",
                    background: "rgba(103, 164, 255, 0.7)",
                    padding: "7px",
                    border: "1px solid black",
                    "&:hover": {
                      backgroundColor: "#7964FC",
                      boxShadow: "none",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ textTransform: "Capitalize", color: "#EEEBA6" }}
                  >
                    Random Dog Alert
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="small"
                  disableElevation
                  onClick={twoClicksBreedsList}
                  sx={{
                    boxShadow: "none",
                    background: "rgba(103, 164, 255, 0.7)",
                    padding: "7px",
                    border: "1px solid black",
                    "&:hover": {
                      backgroundColor: "#7964FC",
                      boxShadow: "none",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ textTransform: "Capitalize", color: "#EEEBA6" }}
                  >
                    Breed Selector
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="small"
                  disableElevation
                  disabled={!isOpened}
                  onClick={() => router.push("/#randomBreedImage")}
                  sx={{
                    boxShadow: "none",
                    background: "rgba(103, 164, 255, 0.7)",
                    padding: "7px",
                    border: "1px solid black",
                    "&:hover": {
                      backgroundColor: "#7964FC",
                      boxShadow: "none",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ textTransform: "Capitalize", color: "#EEEBA6" }}
                  >
                    Breed photo truck
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          rowSpacing={0.5}
          sx={{ top: "40%" }}
        >
          <Box
            id="welcomeMsg"
            sx={{
              background: "rgba(103, 164, 255, 0.7)",
              padding: "20px",
              borderRadius: "30px",
              border: "1px solid black",
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="body1"
                align="center"
                sx={{ color: "#EEEBA6", flexGrow: 1 }}
                gutterBottom
              >
                In need of some serotonin boost?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                align="center"
                sx={{
                  color: "#EEEBA6",
                }}
              >
                <Typography
                  variant="subtitle2"
                  align="center"
                  sx={{
                    color: "#EEEBA6",
                    fontWeight: "600",
                  }}
                >
                  You are in the right place.
                </Typography>
                {<br />}Start navigating the DogLover app by clicking{<br />}at
                the light blue buttons in the upper right corner.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                align="center"
                sx={{
                  color: "#EEEBA6",
                }}
              >
                <Typography
                  variant="subtitle2"
                  align="center"
                  sx={{
                    color: "#EEEBA6",
                    fontWeight: "600",
                    display: "inline-block",
                  }}
                >
                  Tip:
                </Typography>{" "}
                Try choosing your favourite breed and{<br />}then you will see
                the purple button come to life!
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default TopBar;
