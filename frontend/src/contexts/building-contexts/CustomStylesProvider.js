import React from "react";
import { CustomContainerProvider } from "./customContainerContext";
import { CustomBridgeProvider } from "./customBridgeContext";
import { CustomCommonProvider } from "./customCommonContext";

const CustomStylesProvider = ({ children }) => {
  return (
    <CustomContainerProvider>
      <CustomBridgeProvider>
        <CustomCommonProvider>{children}</CustomCommonProvider>
      </CustomBridgeProvider>
    </CustomContainerProvider>
  );
};

export default CustomStylesProvider;
