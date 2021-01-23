import React, { Component } from "react"
import "./search.scss"

class Search extends Component {
    render() {
        return (
            <div className="container">
   <form className="row"  action="">
   <input className="search col-5 ml-5  form-control form-group" type="search"/>
       <input className="search col-5 ml-5  form-control" type="search"/>
   </form>
            </div>
        )
    }
}

export default Search;