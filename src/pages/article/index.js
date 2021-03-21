import React, {PureComponent} from 'react';

class Article extends PureComponent{
    render() {
        return(
            <div>
                Article, {this.props.match.params.id}
            </div>
        )
    }
}

export default Article;