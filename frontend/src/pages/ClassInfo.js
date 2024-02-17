import React from "react";
import {useParams } from "react-router-dom";
import { aboutLevelData } from "../data/LevelInfo";
import { hashtagIcon } from "../data/images";

const ClassInfo = () => {
    const {id} = useParams()

    const data = aboutLevelData.find(level => level.id === Number(id))
    let index = 0
    return(
        <>
        <div className="container-level">
            <main>
                <h2>level {data.id}</h2>
                <p>{data.fullData.text.description ?? 'popis není k dispozici'}</p>
                <ul>
                    {   
                        data.fullData?.text?.li?.map((li) => {       
                            index += 1
                            return(
                                <li key={index}>
                                    <div>
                                        <img src={hashtagIcon} alt="" />
                                        <h3>{li.headline}</h3>
                                    </div>
                                    <p>{li.p}</p>
                                </li>
 
                            )
                        })
                    }
                </ul>
            </main>
           {
            data.fullData.video?.src ?
            <section className="video__section">
                <article>
                    <h3>Video</h3>
                    <p>{data.fullData.video?.text}</p>
                </article>
                <iframe width="560" height="315" src={data.fullData.video?.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
            : ""
            }
            
        </div>
        
        </>
    )
}

export default ClassInfo