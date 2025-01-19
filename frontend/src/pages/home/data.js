import screen1 from "@images/screens/screen1.webp";
import screen2 from "@images/screens/screen2.webp";
import screen3 from "@images/screens/screen3.webp";
import gameScreen from "@images/screens/game-screen.webp";
import databaseScreen from "@images/screens/database-screen.webp";

import academyScreen from "@images/screens/academy-screen.webp";
import mapScreen from "@images/screens/map-screen.webp";

export const homeData = [
  {
    id: 0,
    headline: "Hodně zdaru na cestě k CSS!",
    texts: [
      `První seznámení s CSS může působit chaoticky, ale skrývá v sobě kouzlo 
    čekající na odhalení.`,
      `Jakmile se ponoříte do tohoto jazyka, 
    zjistíte, že co se na počátku zdálo jako zmatek, 
    je ve skutečnosti bohatým a dynamicky se vyvíjejícím nástrojem, 
    který umožňuje tvořit a oživovat webové stránky nekonečnými způsoby.`,
      `CSS se neustále rozrůstá a přizpůsobuje novým trendům a potřebám webového designu. 
    Tento dynamický vývoj znamená, že vždy bude 
    existovat něco nového k naučení, což vaši cestu nikdy nenechá být nudnou.`,
      `Přestože se cesta učením CSS může zdát náročná, je důležité si uvědomit, 
    že se učíte pracovat s jedním z pilířů webového vývoje. 
    Ovládnutí CSS vám dá moc transformovat základní HTML struktury na vizuálně 
    atraktivní webové stránky, které lákají a udržují pozornost návštěvníků.`,
    ],
  },
  {
    id: 1,
    headline: "CSS Play",
    texts: [
      "CSS Play má snahu zřetelně zpřístupnit vlastnosti stylů za pomoci interaktivity.",
      "Pomocí nejrůznějších CSS vlastností budete muset stylovat herní prostředí a tak obstát a dostat se do dalšho levelu.",
      `Na holičkách ale nezůstanete, hned zpočátku se k vám připojí průvodce, který vám bude na blízku po celou dobu hry. `,
      `Mimo jiné vám také každá nová úroveň otevře relevantní materiály, 
      které dokáží přinést teoretický základ stravitelně.`,
      `Ke každé jedné kapitole je přiložen i bonusový tip na užitečné stránky, nebo generátory, které vám zpříjemní práci se styly.`,
      `Uživatelé mohou nejen vytvářet své vlastní levely, ale také zkoušet levely vytvořené ostatními uživateli, což podporuje sdílení znalostí.`,
      `V postranních panelech hry najdete důležité informace o příběhu, nápovědu pro aktuální úroveň, nebo informace o aktuální stránce, což umožňuje lepší orientaci a zážitek z hry.`,
    ],
    images: [screen1, screen2, screen3],
  },
];

export const homeIntro = [
  {
    id: 0,
    headline: "Map",
    description:
      "After registration, you'll gain access to the game. The main feature is a campaign where each level presents a new challenge. If you need assistance, the academy provides all the necessary information to successfully complete your tasks.",
    img: mapScreen,
  },
  {
    id: 1,
    headline: "Game",
    description:
      "In the game, you'll be able to style up to three elements. Essential information about .bridge and .container can be found under the magnifying glass icon. If you're unsure, don't hesitate to ask your guide for help using the 'help' button - they'll always try to point you in the right direction.",
    img: gameScreen,
  },
  {
    id: 2,
    headline: "Academy",
    description:
      "The academy houses all the materials, tips, and information you'll need. You'll gradually unlock access to articles, CSS videos, and useful applications that you can leverage in your projects.",
    img: academyScreen,
  },
  {
    id: 3,
    headline: "Building",
    description:
      "Create challenges for other users using CSS rules and custom settings. You can also test your skills by trying levels designed by fellow users, providing a dynamic learning experience.",
    img: databaseScreen,
  },
  {
    id: 4,
    headline: "Database",
    description:
      "This is your hub for accessing all levels created by other users. Here, you can easily explore and attempt creative challenges designed by the community. It's a perfect place to test your skills, find inspiration, and engage with diverse CSS puzzles crafted by fellow learners.",
    img: databaseScreen,
  },
];
