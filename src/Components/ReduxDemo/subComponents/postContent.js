import React from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, deletePost } from '../../../Redux/actions';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class PostContent extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchSinglePost(id);
    }

    onDeleteClick = () => {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/redux/post');
        });
    }

    render() {
        const {post} = this.props;

        if(!post) {
            return <div>Loading ...</div>
        }

        return (
            <div>
                <Button onClick={this.onDeleteClick} content='Delete' color='red' />
                <h2>{post.title}</h2>
                <h3>Categories: {post.categories}</h3>
                <p>{post.content}</p>
            </div>
        )
    }
}

const mapStateToProps = ({posts}, ownProps) => {
    return {
        post: posts[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, { fetchSinglePost, deletePost })(PostContent);