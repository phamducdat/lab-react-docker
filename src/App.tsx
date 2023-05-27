import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

    const [externalData, setExternalData] = useState<any>()

    useEffect(() => {
        axios.get(`/api/welcome`).then((response) => {
            setExternalData(response)
        }).catch(error => {
            setExternalData(error)
        })
    }, [])

    return (
        <>
            <div className="App">
                {JSON.stringify(externalData)}
            </div>
        </>
    );
}

export default App;
