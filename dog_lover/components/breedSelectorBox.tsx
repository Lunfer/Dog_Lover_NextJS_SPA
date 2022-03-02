import React, { FunctionComponent, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import {
  useVariableBreedContext,
  useVariableClickedBreedContext,
  useFunctionHeartContext,
  useFunctionFetchBreedsContext,
  useVariableQueryContext,
  useFunctionQueryContext,
} from "../src/breedContext";

export interface DogBreed {
  key: string;
  value: string;
}
export interface ListAllResponse {
  message: {
    [key: string]: string[];
  };
}
export interface ImageResponse {
  message: string;
}
export interface DogBreedImage {
  breed: string;
}

const BreedSelectorBox: FunctionComponent = () => {
  const breeds = useVariableBreedContext();
  const clickedBreed = useVariableClickedBreedContext();
  const handleHeartClicked = useFunctionHeartContext();
  const fetchBreedsList = useFunctionFetchBreedsContext();
  const query = useVariableQueryContext();
  const filterList = useFunctionQueryContext();

  useEffect(() => {
    fetchBreedsList();
  }, []);

  return (
    <Box
      id="breedSelector"
      sx={{
        background: "rgba(121, 100, 252, 0.7)",
        border: "1px solid black",
        padding: "20px",
        width: "100%",
        borderRadius: "30px",
        height: "100%",
      }}
    >
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Button
            id="whoLetTheDogsOut"
            variant="contained"
            sx={{
              display: "block",
              border: "1px solid black",
              background: "rgba(103, 164, 252, 0.7)",
              marginBottom: "10px",
              "&:hover": {
                backgroundColor: "#67A4FF",
              },
            }}
            onClick={fetchBreedsList}
          >
            <Typography
              variant="subtitle2"
              sx={{ textTransform: "Capitalize", color: "#EEEBA6" }}
            >
              Who let the dogs out?
            </Typography>
          </Button>
        </Grid>
        <Grid item xs>
          <TextField
            label="Any specific breed in mind?"
            fullWidth
            InputLabelProps={{
              style: { color: "#EEEBA6", fontSize: "0.8rem" },
            }}
            size="small"
            variant="standard"
            onChange={filterList}
            sx={{
              display: "inline-block",
              alignSelf: "center",
              width: "100%",
              marginBottom: "22px",
              color: "#EEEBA6",
            }}
          />
        </Grid>
      </Grid>

      <ImageList
        sx={{
          width: 800,
          height: 600,
          transform: "translateZ(0)",
          border: "1px solid black",
          "&::-webkit-scrollbar": {
            width: 11,
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(103, 164, 255, 0.7)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#EEEBA6",
            borderRadius: 1,
          },
        }}
        rowHeight={200}
        gap={1}
      >
        {breeds &&
          breeds
            .filter((breed) => {
              if (query == "") {
                return breed;
              } else if (
                breed.key.toLowerCase().includes(query.toLowerCase())
              ) {
                return breed;
              }
            })
            .map((breed) => {
              return (
                <ImageListItem key={breed.key} cols={1} rows={2}>
                  <img
                    src={breed.value}
                    alt={breed.key}
                    width="100%"
                    height="100%"
                  />
                  <ImageListItemBar
                    sx={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                        "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                      textTransform: "Capitalize",
                    }}
                    title={breed.key}
                    position="top"
                    actionIcon={
                      <Link href="/#randomBreedImage">
                        <IconButton
                          sx={{ color: "white" }}
                          aria-label={`star ${breed.key}`}
                          onClick={handleHeartClicked(breed.key)}
                        >
                          {clickedBreed[breed.key] ? (
                            <FavoriteOutlinedIcon />
                          ) : (
                            <FavoriteBorderOutlinedIcon />
                          )}
                        </IconButton>
                      </Link>
                    }
                    actionPosition="left"
                  />
                </ImageListItem>
              );
            })}
      </ImageList>
    </Box>
  );
};
export default BreedSelectorBox;
