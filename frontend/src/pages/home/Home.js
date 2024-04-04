import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import AsideBox from "../../components/AsideBox";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="wrapper-home">
      <main className="container-home">
        <section>
          <h2>O projektu</h2>
          <p>
            Css game je projekt, který je zaměřený na zpřístupnění základů css
            pro uživatele za pomoci interaktivity.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
