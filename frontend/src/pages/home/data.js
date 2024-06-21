import screen1 from "@images/screens/screen1.webp";
import screen2 from "@images/screens/screen2.webp";
import screen3 from "@images/screens/screen3.webp";
import gameScreen from "@images/screens/game.webp";
import databaseScreen from "@images/screens/database.webp";
import buildingScreen from "@images/screens/building.webp";
import academyScreen from "@images/screens/academy.webp";
import mapScreen from "@images/screens/map.webp";

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
      "Po registraci budeš moci přistoupit do hry, kdy hlavním prvkem aplikace je kampaň a na každém levelu tě bude čekat nová výzva, kterou budeš muset zvládnout. Pokud si nebudeš vědět rady, tak v akademii bys měl najít veškeré informace, které jsou potřeba k tomu abys poté úkol zvládnul",
    img: mapScreen,
  },
  {
    id: 1,
    headline: "Game",
    description:
      "V samotné hře budeš moci stylovat až tři prvky, potřebné informace o .bridge a .container najdeš pod lupou. V případě, že si nebudeš vědět rady, tak se neváhej obrátit na tvého průvodce za pomoci tlačítka help, vždy se tě pokusí nějak nasměrovat",
    img: gameScreen,
  },
  {
    id: 2,
    headline: "Academy",
    description:
      "Zde se ukrývají veškeré potřebné materiály s informacemi a tipy, ke kterým postupně v průběhu budeš získavat přístup. Každý článek v sobě ukrývá informace potřebné pro splnění další lekce, video ze světa css a šikovnou aplikaci, kterou možná budeš moci využít při svých projektech.",
    img: academyScreen,
  },
  {
    id: 3,
    headline: "Building",
    description:
      "Sám také budeš moci vytvářet úkoly pro další uživatele, kde za pomoci css pravidel v kombinaci s pravidly, která navolíš, můžeš prozkoušet dovednosti ostatních uživatelů. Zároveň máš možnost ozkoušet levely, které vytvořili ostatní.",
    img: buildingScreen,
  },
  {
    id: 4,
    headline: "Database",
    description:
      "Sám také budeš moci vytvářet úkoly pro další uživatele, kde za pomoci css pravidel v kombinaci s pravidly, která navolíš, můžeš prozkoušet dovednosti ostatních uživatelů. Zároveň máš možnost ozkoušet levely, které vytvořili ostatní.",
    img: databaseScreen,
  },
];
