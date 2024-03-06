import React from "react";
import {useParams } from "react-router-dom";
import { aboutLevelData } from "../data/AboutLevelData";
import { hashtagIcon } from "../data/ImagesData";

const LevelInfo = () => {
    const {id} = useParams()

    const data = aboutLevelData.find(level => level.id === Number(id))
    let index = 0
    return(
        <>
        <div className="container-level">
            <main>
                <h2>level {data.id}</h2>
                <p>{data.fullData.main.description ?? 'popis není k dispozici'}</p>
                <ul>
                    {   
                        data.fullData?.main?.li?.map((li) => {       
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
            data.fullData.videoSection?.src ?
            <section className="video__section">
                <article>
                    <h3>Video</h3>
                    <p>{data.fullData.videoSection?.text}</p>
                </article>
                <iframe width="560" height="315" src={data.fullData.videoSection?.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
            : ""
            }

            <section className="tip__section">
                <article>
                    <h3>Tip na závěr</h3>
                    {
                    data.fullData.tipsSection?.p.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                    }
                    <div className="article__card" onClick={() => {window.location.href = data.fullData?.tipsSection.src}}>
                        <h2>{data.fullData.tipsSection?.h2}</h2>
                        <img src={data.fullData.tipsSection?.img} alt="" />
                        <p>
                            Přejít na web
                        </p>
                    </div>
                </article>
            </section>
            
        </div>
        
        </>
    )
}

export default LevelInfo