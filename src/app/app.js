import React, { Component } from "react"
import Header from "../components/header/header"
import Listjob from "../components/listjob/listjob"


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Listjob/>
                
            </div>
        )
    }
}

export default App;