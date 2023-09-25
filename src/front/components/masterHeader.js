import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../store/contextWrapper";


export const MasterHeader = ()=>{
    const store = useContext(AppContext)
    const [newTitle, setNewTitle] = useState()
    const handleClick = (e)=>{
        e.preventDefault()
        store.changeName("John Doe")
    }

    const showTitles = ()=>{
        let oneLiner = ""
        store.titles.forEach(title => {
            oneLiner = oneLiner + " " + title
        });

        return (<p class="masthead-subheading font-weight-light mb-0">{oneLiner}</p>)
    }

    useEffect(()=>{store.getChar()},[])
    return (
        <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                {/*-- Masthead Avatar Image--*/}
                <img class="masthead-avatar mb-5" src="assets/img/ab.jpg" alt="..." />
                {/*-- Masthead Heading--*/}
                <h1 class="masthead-heading text-uppercase mb-0">{store.name}</h1>
                {/*-- Icon Divider--*/}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                 {/*-- Masthead Subheading--*/}
                 { showTitles() }
                <p>{store.counter}</p>
                <button onClick={handleClick}>Change Name</button>
                <input type="text" onChange={(e)=>{setNewTitle(e.target.value)}}></input>
                <button onClick={()=>{store.addTitle(newTitle)}}>Add title</button>
                <button onClick={()=>{store.clearTitles()}}>Clear Titles</button>
                <button onClick={()=>{store.increaseCounter()}}>Increase Counter</button>
                <p>{store.char.name}</p>
                <p>{store.char.hair_color}</p>
            </div>
        </header>
    )
}