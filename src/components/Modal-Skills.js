import React from "react";
import BClose from "../images/BClose.png";
import Css from "../images/I-css.png";
import Js from "../images/I-js.png";
import Bootstrap from "../images/I-bootstrap.png";
import Html from "../images/I-html.png";
import Reactive from "../images/I-react.png";
import Mysql from "../images/I-mysql.png";
import Php from "../images/I-php.png";
import Laravel from "../images/I-laravel.png";
import Codeigniter from "../images/I-codeigniter.png";
import Docker from "../images/I-docker.png";
import Figma from "../images/I-figma.png";
import Git from "../images/I-git.png";
import Github from "../images/I-github.png";
import Gitlab from "../images/I-gitlab.png";
import Laragon from "../images/I-laragon.png";
import Putty from "../images/I-putty.png";
import Slack from "../images/I-slack.png";
import Soap from "../images/I-soap.png";
import Trello from "../images/I-trello.png";

const ModalSkills = ({ show, close, title }) => {
    const modalClasses = show ? "modal" : "modal hide";
    return (
        show && (
        <div className="modal-container" onClick={close}>
            <div className={modalClasses} onClick={(e) => e.stopPropagation()}>
                <header className="modal-header">
                    <h2 className="modal-header-title">{title}</h2>
                    <button className="close" onClick={close}>
                    <img className="BClose" src={BClose} alt="close" />
                    </button>
                </header>
                <main className="modal-content">
                    <div className="icons">
                        <h1>FrontEnd</h1>
                        <div className="front">
                            <div className="structure">
                                <div className="sk">
                                    <img src={Html} alt="html" />
                                    <p>HTML</p>
                                </div>
                                <div className="sk">
                                    <img src={Css} alt="css" />
                                    <p>CSS</p>
                                </div>
                                <div className="sk">
                                    <img src={Js} alt="js" />
                                    <p>JavaScript</p>
                                </div>
                                <div className="sk">
                                    <img src={Reactive} alt="react" />
                                    <p>React.js</p>
                                </div>
                                <div className="sk">
                                    <img src={Bootstrap} alt="bootstrap" />
                                    <p>Bootstrap</p>
                                </div>
                            </div>
                        </div>
                        <h1>BackEnd</h1>
                        <div className="back">
                            <div className="structure">
                                <div className="sk">
                                    <img src={Php} alt="php" />
                                    <p>PHP</p>
                                </div>
                                <div className="sk">
                                    <img src={Mysql} alt="mysql" />
                                    <p>MySQL</p>
                                </div>
                                <div className="sk">
                                    <img src={Laravel} alt="laravel" />
                                    <p>Laravel</p>
                                </div>
                                <div className="sk">
                                    <img src={Codeigniter} alt="codeigniter" />
                                    <p>Codeigniter</p>
                                </div>
                            </div>
                        </div>
                        <h1>Adittionals</h1>
                        <div className="extras">
                            <div className="structure">
                                <div className="sk">
                                    <img src={Git} alt="git" />
                                    <p>Git</p>
                                </div>
                                <div className="sk">
                                    <img src={Github} alt="github" />
                                    <p>Github</p>
                                </div>
                                <div className="sk">
                                    <img src={Gitlab} alt="gitlab" />
                                    <p>Gitlab</p>
                                </div>
                                <div className="sk">
                                    <img src={Docker} alt="docker" />
                                    <p>Docker</p>
                                </div>
                                <div className="sk">
                                    <img src={Laragon} alt="laragon" />
                                    <p>Laragon</p>
                                </div>
                                <div className="sk">
                                    <img src={Putty} alt="putty" />
                                    <p>Putty</p>
                                </div>
                                <div className="sk">
                                    <img src={Soap} alt="soap" />
                                    <p>Soap</p>
                                </div>
                                <div className="sk">
                                    <img src={Trello} alt="trello" />
                                    <p>Trello</p>
                                </div>
                                <div className="sk">
                                    <img src={Slack} alt="slack" />
                                    <p>Slack</p>
                                </div>
                                <div className="sk">
                                    <img src={Figma} alt="figma" />
                                    <p>Figma</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-background">
                        <p>SKILLS</p>
                    </div>
                </main>
                
            </div>
        </div>
        )
    );
};

export default ModalSkills;