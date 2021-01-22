import React, { Component } from "react"
import "./header.scss"

class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <img className="header_img" src="https://rusjobs.co/assets/icons/png-icons/logo.png" alt="" />
                    <h1 className="header_title">
                        Найди лучшую работу в Америке
    </h1>
                    <h3 className="header_h3">
                        RusJobs вручную отбирает свмые свежие вакансии
    <br /> для русскоязычного сообщества живущих в США
    </h3>
                    <br />
                    <div className=" row">

                   
                    <div className="search">


                    </div>
                     </div>

                </header>
            </div>
        )
    }
}

export default Header;