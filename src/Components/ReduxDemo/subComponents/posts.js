import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import dummyImg from '../../../images/florida-3.jpg';
import { fetchPosts } from '../../../Redux/actions';
import { List, Image, Grid } from 'semantic-ui-react';
import _ from 'lodash';

class Posts extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts = () => {
        return _.map(this.props.posts, post => {
            if (post.title === null) return;
            return (
                <List.Item  key={post.id}>
                    <Image avatar src={dummyImg} />
                    <List.Header content='Mans not Hot posted...' />
                    <Link to={`/redux/post/${post.id}`} className='list-group-item'>
                        {post.title}
                    </Link>
                </List.Item>
            )}
        )
    };

    render() {
        console.log(this.props.posts);
        return (
            <div>
                <h3> Posts </h3>
                <Grid centered padded>
                    <Grid.Column  textAlign='center' width={6}>
                        <List divided relaxed>
                            {this.renderPosts()}
                        </List>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);