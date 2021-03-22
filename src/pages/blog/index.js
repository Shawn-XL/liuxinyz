import React, {PureComponent} from 'react';
import ArtcileCard from '../../components/articleCard';
import { connect } from 'react-redux';

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


}
const mapStateToProps = (state) => {
    return {
        articles: state.getIn(['blog', 'articles']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);