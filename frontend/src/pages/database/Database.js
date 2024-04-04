import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import "@styles/database-styles.css";
import AsideBox from "../../components/AsideBox";
import officeBackground from "@images/office.webp";
import DatabaseList from "./database-components/DatabaseList";

const GET_LEVELS = gql`
  query GetLevels {
    levels {
      name
      author
      bridgeProperties
      containerProperties
      description
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
    <div className="wrapper-database">
      <div className="Database">
        <DatabaseList items={data ? data.levels : [""]} />
      </div>
      <AsideBox background={officeBackground}></AsideBox>
    </div>
  );
};

export default Database;
