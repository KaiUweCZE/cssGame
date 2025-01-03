import React, { useContext, useState } from "react";
import CssForm from "@components/css-form/CssForm";
import PlayGround from "./PlayGround";
import { BridgeProvider } from "@contexts/form-contexts/bridgeContext";
import { CheckContextProvider } from "@contexts/form-contexts/checkContext";
import { ContainerProvider } from "@contexts/form-contexts/containerContext";
import { EmojiProvider } from "@contexts/emojiContext";
import { LevelContext } from "@contexts/form-contexts/levelContext";
import { PartsProvider } from "@contexts/form-contexts/partsContext";
import { ResultProvider } from "@contexts/form-contexts/resultContext";
import EmptyBox from "@components/EmptyBox";
import Clouds from "./Clouds";
import MessageResult from "@components/feedback/MessageResult";
import ContainerTemporaryLabels from "./labels/ContainerTemporaryLabels";

const Mission = () => {
  const [containerClass, setContainerClass] = useState();
  const [partsClass, setPartsClass] = useState();
  const { level } = useContext(LevelContext);

  console.log("level", level);

  return (
    <CheckContextProvider>
      <ContainerProvider>
        <BridgeProvider>
          <EmojiProvider>
            <ResultProvider>
              <PartsProvider>
                <div className="container-mission">
                  <Clouds />
                  <MessageResult />
                  <div className="box__classes">
                    <CssForm name="bridge" />
                    <ContainerTemporaryLabels
                      level={level.id}
                      containerClass={containerClass}
                    />
                    {containerClass ? (
                      <CssForm
                        name="container"
                        state={containerClass}
                        func={setContainerClass}
                      />
                    ) : !level.banForm ? (
                      <EmptyBox
                        state={containerClass}
                        func={setContainerClass}
                      />
                    ) : (
                      ""
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
