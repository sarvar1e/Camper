import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";

const images = [
  "https://cdn.motor1.com/images/mgl/RqgR6m/s1/kia-bongo-camper.webp",
  "https://www.cnet.com/a/img/resize/707501bab2d8e5df69fd5c97199cccaa43404125/hub/2022/04/22/8fe39662-dc2a-4d77-9afa-ef73462e2895/fe3d192c918c49a38377d564bfeff287.png?auto=webp&fit=crop&height=675&width=1200",
  "https://media.ford.com/content/dam/fordmedia/Europe/en/2023/08/Next-Generation-Nugget/2023_FORD_Transit_Custom_Nugget_08.jpg",
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const autoPlayInterval = 3000; // 3 seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    }, autoPlayInterval);

    return () => clearInterval(intervalId);
  }, [maxSteps]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "550px", // Adjust height as needed
        overflow: "hidden", // Hide overflow to prevent MobileStepper from extending beyond the container
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${images[activeStep]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          textAlign: "center",
        }}
      >
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            display: "flex",

            justifyContent: "center",
            zIndex: "9998",
            marginTop: "-50px",
            backgroundColor: "transparent",
          }}
        />
      </Box>
    </Box>
  );
}

export default Carousel;
