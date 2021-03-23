import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import './article.css';

class Article extends PureComponent{
    render() {
        const { article } = this.props;
        return(
            <div className="article-page">
                <div className="article-title">
                    { article.get("title")}
                </div>
                <div className="article-content">
                    { article.get("content")}
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        article: state.getIn(['article', 'article']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);