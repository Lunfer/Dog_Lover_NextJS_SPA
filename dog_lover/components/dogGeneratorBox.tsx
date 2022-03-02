import React, { FunctionComponent, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  useVariableRandomImageContext,
  useFunctionRandomImageContext,
} from "../src/breedContext";
// import "aos/dist/aos.css";

const DogGenerator: FunctionComponent = () => {
  const randomImage = useVariableRandomImageContext();
  const fetchRandomImages = useFunctionRandomImageContext();

  useEffect(() => {
    fetchRandomImages();
  }, []);

  return (
    <Box
      id="randomDog"
      // data-aos="fade-up"
      // data-aos-anchor="#welcomeMsg"
      // data-aos-anchor-placement="top-top"
      sx={{
        background: "rgba(103, 164, 255, 0.7)",
        border: "1px solid black",
        padding: "20px",
        width: "100%",
        borderRadius: "30px",
        height: "350px",
      }}
    >
      <Button
        id="dogGenerator"
        variant="contained"
        sx={{
          border: "1px solid black",
          background: "rgba(121, 100, 252, 0.7)",
          marginBottom: "10px",
          "&:hover": {
            backgroundColor: "#7964FC",
          },
        }}
        onClick={fetchRandomImages}
      >
        <Typography
          variant="subtitle2"
          sx={{ textTransform: "Capitalize", color: "#EEEBA6" }}
        >
          Dog Generator
        </Typography>
      </Button>
      <Box>
        {randomImage && (
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 600 },
              maxWidth: { xs: 350, md: 600 },
              border: "1px solid black",
            }}
            alt="If you see me that means that you have to click the button, sorry!"
            src={randomImage.message}
          />
        )}
      </Box>
    </Box>
  );
};
export default DogGenerator;
