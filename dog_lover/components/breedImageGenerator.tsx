import React, { FunctionComponent, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import axios, { AxiosResponse } from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { ImageResponse } from "../components/breedSelectorBox";

interface ImageProps {
  breed: string;
}
const BreedImageGenerator: FunctionComponent<ImageProps> = ({
  breed,
}: ImageProps) => {
  const [randomImages, setRandomImages] = useState<ImageResponse[]>([]);

  useEffect(() => {
    try {
      const fetchRandomImages = async () => {
        const res: AxiosResponse = await axios.get<ImageResponse[]>(
          `https://dog.ceo/api/breed/${breed}/images/random/6`
        );
        setRandomImages(res.data.message);
      };
      fetchRandomImages();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <Box
      id="randomBreedImage"
      sx={{
        background: "rgba(103, 164, 255, 0.7)",
        border: "1px solid black",
        padding: "20px",
        width: "100%",
        borderRadius: "30px",
        height: "100%",
      }}
    >
      <Box>
        <ImageList
          gap={1}
          sx={{
            width: 500,
            height: 500,
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
        >
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader
              component="div"
              sx={{
                fontSize: "1rem",
                color: "#EEEBA6",
                background: "rgba(121, 100, 252, 0.7)",
                textTransform: "Capitalize",
                borderBottom: "1px solid black",
              }}
            >
              {breed}
            </ListSubheader>
          </ImageListItem>
          {randomImages &&
            randomImages.map((randomImage) => (
              <ImageListItem key={randomImage}>
                <img src={randomImage} />
              </ImageListItem>
            ))}
        </ImageList>
      </Box>
    </Box>
  );
};
export default BreedImageGenerator;
