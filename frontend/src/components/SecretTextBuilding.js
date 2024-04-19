import React from "react";

const SecretTextBuilding = ({ data }) => {
  console.log(data);
  return (
    <div className="SecretTextBuilding">
      <article>
        <h2>{data.intro.h2}</h2>
        {data.intro.texts.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>

      <h2>{data.tips.h2}</h2>
      <ul>
        {data.tips.li.map((text, index) => {
          return (
            <li key={index}>
              <span>{data.tips.boldPart[index]} </span>
              {text}
            </li>
          );
        })}
      </ul>
      <h3>Další příklad</h3>
      <p>
        Chci se zaměřit na znemožnění užití grid-row a zároveň zabránit
        uživateli v obyčejném posunutí za pomoci position: absolute, atd. Je-li
        mým cílem aby uživatel musel použít např. grid-area, bylo by záhodno
        zablokovat ještě vlastnost transform a translate, případně zvolit
        variantu allowed listu a povolit grid-area(tak bude uživatel moci měnit
        pouze tento styl), avšak musím v tomto případě počítat s tím, že o svém
        omezení bude informován.
      </p>
      <img src={data.tips.img} alt="" />
    </div>
  );
};

export default SecretTextBuilding;
