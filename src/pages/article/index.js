import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import * as Types from './store/actionTypes';
import axios from 'axios';
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

    componentDidMount() {
        console.log("Article did mount");
        const articleId = this.props.match.params.id;
        axios.get('/api/article/' + articleId).then((res) => {
            const data = res.data;
            const action = {
                type: Types.LOAD_ARTICLE,
                data: data
            }
            this.props.loadArticle(action);
        }).catch(() => {
            console.log('Failed to Call Article List Api');
        });
    }
}

const mapStateToProps = (state) => {
    return {
        article: state.getIn(['article', 'article']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadArticle(action) {
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);