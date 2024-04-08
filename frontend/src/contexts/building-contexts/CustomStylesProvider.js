import React from "react";
import { CustomContainerProvider } from "./customContainerContext";
import { CustomBridgeProvider } from "./customBridgeContext";

const CustomStylesProvider = ({ children }) => {
  return (
    <CustomContainerProvider>
      <CustomBridgeProvider>{children}</CustomBridgeProvider>
    </CustomContainerProvider>
  );
};

export default CustomStylesProvider;
