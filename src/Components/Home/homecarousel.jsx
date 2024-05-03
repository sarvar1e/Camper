import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";

const images = [
  "https://as2.ftcdn.net/v2/jpg/06/63/73/09/1000_F_663730901_WipR8HFjEyVqO5URsrOQRiIRor3CpH3t.jpg",
  "https://causewaycampers.com/wp-content/uploads/2021/01/F74-7521-HIGH-RES-CMYK-scaled.jpg",
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

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "550px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${images[activeStep]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",

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
