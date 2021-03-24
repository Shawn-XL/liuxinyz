import React, {PureComponent} from 'react';
import ArtcileCard from '../../components/articleCard';
import { connect } from 'react-redux';
import axios from 'axios';
import * as types from './store/actionTypes';


class Blog extends PureComponent{
    
    render() {
        const {articles} = this.props;
        return(
            <div>
            {
                articles.map((article)=>{
                    return (
                        <ArtcileCard key={article.get('id')} article={article}/>
                    );
                })
            }
            </div>
        )
    }

    getArticleCards = () => {
        const {articles} = this.props;

        const cards = articles.map((article)=>{
                return (
                    <ArtcileCard key={article.id} article={article}/>
                );
            });
        return cards;
    }

    componentDidMount() {
        const action = {
            type: types.LOAD_BLOG_ARTICLES,
            data: "test"
        }
        this.props.loadblog(action);
        axios.get('/article/list').then((res)=>{
            const data = res.data;
            const action = {
                type: types.LOAD_BLOG_ARTICLES,
                data: data
            }
            this.props.loadblog(action);
        }).catch(()=>{
            console.log('Failed Call Article List Api');     
        });
    }


}

const mapStateToProps = (state) => {
    return {
        articles: state.getIn(['blog', 'articles']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadblog(action){
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);