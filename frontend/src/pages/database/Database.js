import React, { useContext, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import "./database-styles.css";
import AsideBox from "../../components/aside/AsideBox";
import officeBackground from "@images/office.webp";
import DatabaseList from "./database-components/DatabaseList";
import { BuildingProvider } from "@contexts/building-contexts/buildingForm";
import { CustomContainerProvider } from "@contexts/building-contexts/customContainerContext";
import ProgressBar from "@/components/feedback/ProgressBar";
import { UserContext } from "@/contexts/UserContext";

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
  const { user } = useContext(UserContext);

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
            {data ? (
              <DatabaseList items={data.levels} userId={user.id} />
            ) : (
              <ProgressBar />
            )}
          </div>
          <AsideBox background={officeBackground}></AsideBox>
        </div>
      </CustomContainerProvider>
    </BuildingProvider>
  );
};

export default Database;
