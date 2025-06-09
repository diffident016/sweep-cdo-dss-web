"use client";
import { Slider, styled } from "@mui/material";
import React from "react";

function ParameterSlider({
  value,
  onChange,
}: {
  value?: number;
  onChange?: (event: Event, value: number | number[]) => void;
}) {
  const CustomSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.grey[900],
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&::before": {
        display: "none",
      },
    },
    "& .MuiSlider-rail": {
      color: theme.palette.grey[400],
      height: 8,
      borderRadius: 4,
    },
  }));

  return (
    <CustomSlider defaultValue={value} className="w-full" onChange={onChange} />
  );
}

export default ParameterSlider;
