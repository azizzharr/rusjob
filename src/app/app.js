import React, { Component } from "react"
import Header from "../components/header/header"
import Listjob from "../components/listjob/listjob";
import Search from "../components/search/search"

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Search/>
                <Listjob/>
                
            </div>
        )
    }
}

export default App;