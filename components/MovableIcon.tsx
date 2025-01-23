"use client";
import useMousePosition from "@utils/hooks/useMousePosition";
import React from "react";

const MovableIcon = () => {
  const { x, y } = useMousePosition();
  const scaledX = x * 0.2 + 50;
  const scaledY = y * 0.2 + 50;

  const iconStyle = {
    left: `${scaledX}px`,
    top: `${scaledY}px`,
    transition: "left 0.1s, top 0.1s",
  };

  return (
    <div
      style={iconStyle}
      className="absolute bottom-0 h-32 w-1/2 -z-10 border flex items-center justify-center rounded-full"
    >
      <span className="bg-custom_gradient block w-3/4 h-full blur-2xl" />
    </div>
  );
};

export default MovableIcon;
