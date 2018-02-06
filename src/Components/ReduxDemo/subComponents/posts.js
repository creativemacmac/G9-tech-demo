import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../../Redux/actions';
import { List } from 'semantic-ui-react';
import _ from 'lodash';

class Posts extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts = () => {
        return _.map(this.props.posts, post => {
            return (
                <List.Item  key={post.id}>
                    <Link to={`/redux/post/${post.id}`} className='list-group-item'>
                        {post.title}
                    </Link>
                </List.Item>
            )}
        )
    };

    render() {

        return (
            <div>
                <h3> Posts </h3>
                <List>
                    {this.renderPosts()}
                </List>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);