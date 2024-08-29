import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import "./database-styles.css";
import AsideBox from "../../components/AsideBox";
import officeBackground from "@images/office.webp";
import DatabaseList from "./database-components/DatabaseList";
import { BuildingProvider } from "@contexts/building-contexts/buildingForm";
import { CustomContainerProvider } from "@contexts/building-contexts/customContainerContext";
import ProgressBar from "@components/ProgressBar";

const GET_LEVELS = gql`
  query GetLevels {
    levels {
      id
      name
      author
      bridgeProperties
      containerProperties
      description
      likes
      likeCount
      finish
      usersPlayed
      usersCount
    }
  }
`;

const Database = () => {
  const { data } = useQuery(GET_LEVELS);

  useEffect(() => {
    if (data) {
      console.log(data.levels);
    }
  }, [data]);
  return (
    <BuildingProvider>
      <CustomContainerProvider>
        <div className="wrapper-database">
          <div className="container-database">
            {data ? <DatabaseList items={data.levels} /> : <ProgressBar />}
          </div>
          <AsideBox background={officeBackground}></AsideBox>
        </div>
      </CustomContainerProvider>
    </BuildingProvider>
  );
};

export default Database;
