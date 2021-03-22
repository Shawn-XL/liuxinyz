import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import person from "../images/image.jpeg";
import "./personcard.css";

class PersonCard extends PureComponent{
    render() {
        return(
            <div className="card center">
                <img src={person} alt="personal" className="card-image center"/>
                <label className="center name">Xin Liu</label>
                <label className="center job">Software Developer</label>

                <div className="contact-card">
                    <ul className="contact-ul">
                        <li>
                            <label className="li-item">
                                <span className="icon iconfont li-icon">&#xe617;</span>
                                <span className="li-text">Ottawa, ON, Canada</span>
                            </label>
                        </li>
                        <li>
                            <label className="li-item">
                                <span className="icon iconfont li-icon">&#xe63b;</span>
                                <span className="li-text">+1 (613)-501-8266</span>
                            </label>
                        </li>
                        <li>
                            <label className="li-item">
                                <span className="icon iconfont li-icon">&#xe618;</span>
                                <span className="li-text"><a style={{"textDecoration":"none"}} className="a-item" href="mailto:liuxinyz@gmail.com">liuxinyz@gmail.com</a></span>
                            </label>
                        </li>
                        <li>
                            <label className="li-item">
                                <span className="icon iconfont li-icon-linkedin">&#xe8ca;</span>
                                <span className="li-text"><a style={{"textDecoration":"none"}} className="a-item" href="https://www.linkedin.com/in/shawn-liu-bb623a90/">LinkedIn</a></span>
                            </label>
                        </li>
                        <li>
                            <label className="li-item">
                                <span className="icon iconfont li-icon">&#xe6a5;</span>
                                <span className="li-text"><a style={{"textDecoration":"none"}} className="a-item" href="https://github.com/Shawn-XL">Github</a></span>
                            </label>
                        </li>
                        <li>
                            <label className="li-item">
                                <span className="icon iconfont li-icon">&#xe698;</span>
                                <span className="li-text">
                                    <Link to="/Xin_Resume.pdf" target="_blank" style={{"color" : "inherit"}}>
                                        Resume
                                    </Link>
                                </span>
                            </label>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default PersonCard;