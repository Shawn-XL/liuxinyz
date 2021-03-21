import React, {PureComponent} from 'react';
import "./articlecard.css";
import { Link } from 'react-router-dom';

class ArtcileCard extends PureComponent{
    render() {
        return(
            <div className="article-card">
                    <label className="article-card-title">
                        <Link className="article-card-link" to="/article/">
                            Working Process of Validations in MVC5
                        </Link>
                    </label>
            </div>
        )
    }
}

export default ArtcileCard;