import React, {PureComponent} from 'react';
import "./articlecard.css";
import { Link } from 'react-router-dom';

class ArtcileCard extends PureComponent{
    render() {
        const {article} = this.props;
        return(
            <div className="article-card">
                <div>
                    <label className="article-card-title">
                        <Link className="article-card-link" to={"/article/" + article.get("id")}>
                            {article.get("title")}
                        </Link>
                    </label>
                </div>
                <div>
                    <span>
                        {article.get("content")}
                    </span>
                </div>
            </div>
        )
    }
}

export default ArtcileCard;