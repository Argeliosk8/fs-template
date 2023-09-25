import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const ContextWrapper = ({children})=> {
     /*Global States*/
    const [name, setName] = useState("Argelio Baca");
    const [titles, setTitles] = useState(["Fullstack", "Recruiter", "Hustler"])
    const [counter, setCounter] = useState(0)
    const [char, setChar] = useState({})
      
    /*Global Functions*/
    const changeName = (newName)=>{
        if(name === "Argelio Baca"){
            setName(newName)
        } else {
            setName("Argelio Baca")
        }
    }
    const addTitle = (newTitle)=>{
        setTitles(prev=>[...prev, newTitle])
    }

    const clearTitles = ()=>{
        setTitles([])
    }

    const increaseCounter = ()=>{
        setCounter(prev =>(prev + 1))
    }

    const getChar = async ()=> {
        try {
            const resp = await fetch('https://swapi.dev/api/people/4', {
                method: 'GET'
            })
            if (resp.ok){
                const data = await resp.json()
                setChar(data)
                console.log(char)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        
        <AppContext.Provider value={{
            name, 
            titles,
            counter,
            char,
            changeName,
            addTitle,
            clearTitles,
            increaseCounter,
            getChar
            }}>
            {children}
        </AppContext.Provider>
    )   
}