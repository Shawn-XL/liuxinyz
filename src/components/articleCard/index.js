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
                    <span className="article-card-content">
                        {this.getShortContent()}
                    </span>
                </div>
            </div>
        )
    }

    getShortContent = () => {
        const {article} = this.props;
        if (article.get("content").length > 120) {
            return article.get("content").substring(0, 120) + "...";
        }else{
            return article.get("content");
        }
    }
}

export default ArtcileCard;