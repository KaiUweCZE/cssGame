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
                    Iste tenetur eligendi vitae inventore cupiditate excepturi odio laudantium ad, placeat consequatur ea, delectus et id, 
                    voluptatum animi fugit laborum nesciunt obcaecati!
                    Ab, eligendi ipsam. Quae, explicabo. Iste, repellat! 
                    Corrupti nemo quos blanditiis exercitationem quae tempora 
                    repellat hic sequi odit suscipit, a ipsum vero, consectetur quisquam ipsa nisi? Quisquam aut ut dolor.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam sunt, quia ex necessitatibus quisquam accusamus 
                    sit molestiae autem fuga eligendi nesciunt et minima odio enim commodi, culpa obcaecati? Nihil ex, eos, non cumque, corporis alias praesentium 
                    totam culpa vel qui in? Itaque quia magni culpa impedit, ea sunt, rem atque doloribus mollitia, quod explicabo.
                </p>
            </section>
            <section>
                <h2>Plány</h2>
                <ul>
                </ul>
            </section>

            <section>
                {
                    user ?
                    <article>
                        <h2>User</h2>
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

            <section>
                <h2>Style Resolver</h2>
            </section>
        </main>
    )
}


export default Home