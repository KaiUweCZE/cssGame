import React, { useContext, useState } from "react";
import CssForm from "./CssForm";
import PlayGround from "./PlayGround";
import { BridgeProvider } from "@contexts/form-contexts/bridgeContext";
import { CheckContextProvider } from "@contexts/form-contexts/checkContext";
import { ContainerProvider } from "@contexts/form-contexts/containerContext";
import { EmojiProvider } from "@contexts/emojiContext";
import { LevelContext } from "@contexts/form-contexts/levelContext";
import { PartsProvider } from "@contexts/form-contexts/partsContext";
import { ResultProvider } from "@contexts/form-contexts/resultContext";
import EmptyBox from "./EmptyBox";
import Clouds from "./Clouds";

const Mission = () => {
  const [containerClass, setContainerClass] = useState();
  const [partsClass, setPartsClass] = useState();
  const { level } = useContext(LevelContext);

  return (
    <CheckContextProvider>
      <ContainerProvider>
        <BridgeProvider>
          <EmojiProvider>
            <ResultProvider>
              <PartsProvider>
                <div className="container-mission">
                  <Clouds />
                  <div className="box__classes">
                    <CssForm name="bridge" />
                    {containerClass ? (
                      <CssForm
                        name="container"
                        state={containerClass}
                        func={setContainerClass}
                      />
                    ) : (
                      <EmptyBox
                        state={containerClass}
                        func={setContainerClass}
                      />
                    )}
                    {level?.partsStyle ? (
                      partsClass ? (
                        <CssForm
                          name="parts"
                          state={partsClass}
                          func={setPartsClass}
                        />
                      ) : (
                        <EmptyBox state={partsClass} func={setPartsClass} />
                      )
                    ) : (
                      <></>
                    )}
                  </div>
                  <PlayGround />
                </div>
              </PartsProvider>
            </ResultProvider>
          </EmojiProvider>
        </BridgeProvider>
      </ContainerProvider>
    </CheckContextProvider>
  );
};

export default Mission;
