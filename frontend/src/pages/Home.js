import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";


const Home = () => {
    const {user} = useContext(UserContext)

    return(
        <main className="container-home">
            <section>
                <h2>Verze 0</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Iste tenetur eligendi vitae inventore cupiditate excepturi odio laudantium ad, placeat consequatur ea, delectus et id, voluptatum animi fugit laborum nesciunt obcaecati!
                    Ab, eligendi ipsam. Quae, explicabo. Iste, repellat! 
                    Corrupti nemo quos blanditiis exercitationem quae tempora 
                    repellat hic sequi odit suscipit, a ipsum vero, consectetur quisquam ipsa nisi? Quisquam aut ut dolor.
                    Centrem webu je css game, která má umožnit interaktivní stylování, za jehož pomoci uživatel bude překonávat překážky na cestě.
                    V průběhu putování bude uživatel odměňován(tipy, videi, články, užitečné generátory, atd.),které
                    by mu měly pomoci dostat se až na samí konec cesty, rozhodně v tom ale nebude sám,
                    kdykoliv mu bude po ruce nápomocen průvodce....  
                </p>
            </section>
            <section>
                <h2>Plány</h2>
                <ul>
                    <li>Projet skripta CSS a udělat by voko lvl mapu</li>
                    <li>Backend kvůli registraci/přihlašování</li>
                    <li>mapa s levly</li>
                    <li>předělat .bridge, seamless texture</li>
                </ul>
                <ul>
                    <h2>Levely na zkoušku</h2>
                    <li>1. na align items</li>
                    <li>2. transform rotate</li>
                    <li>3. marginy</li>
                    <li>4. zkouška nastavení rozkouskování prkna na více částí</li>
                </ul>
            </section>

            <section>
                {
                    user ?
                    <article>
                        <ul>
                            <li>{user.name}</li>
                            <li>{user.id}</li>
                            <li>{user.level}</li>
                        </ul>

                    </article>
                    :
                    "nic nebylo obdrženo"
                }
            </section>
        </main>
    )
}


export default Home