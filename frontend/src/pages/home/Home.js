import React, { useContext } from "react";
import HomeSection from "./home-components/HomeSection";
import "./home-style.css";
import { homeData } from "./data";
import useScrollPosition from "@utils/hooks/useScrollPosition";
import HomeIntrodaction from "./home-components/HomeIntrodaction";
import EmailSender from "@/components/EmailSender";
import ConfirmationEmail from "@/components/ConfirmationEmail";
import { UserContext } from "@/contexts/UserContext";
import { useMutation } from "@apollo/client";
import {
  CREATE_VERIFICATION_TOKEN,
  useCreateToken,
} from "@/utils/queries/createVerificationToken";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dataHome = homeData;
  const { scrollY } = useScrollPosition();
  const context = useContext(UserContext);
  const navigate = useNavigate();
  const { createToken, loading, error } = useCreateToken();

  const handleCreateToken = () => {
    if (context?.user?.id) {
      createToken(context?.user.id);
    }
  };

  return (
    <main className="container-home">
      {/*<HomeSection data={dataHome[0]} load={true} />
      <HomeSection data={dataHome[1]} load={scrollY > 100 ? true : false} />*/}
      <HomeIntrodaction />

      {/*context && (
        <button
          className="primary-button"
          onClick={() => handleCreateToken()}
          disabled={loading}
        >
          {loading ? "Creating token..." : "Create token"}
        </button>
      )*/}
    </main>
  );
};

export default Home;
