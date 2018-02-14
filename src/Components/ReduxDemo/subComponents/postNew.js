// @flow
/*eslint-disable*/
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../../../Redux/actions';

class PostNew extends React.Component {

    renderField = (field: any) => {
        return (
            <div>
                <label>{field.label}: </label>
                <input
                    type='text'
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        )
    }

    onSubmit = (values) => {
        this.props.createPost(values, () => {
            this.props.history.push('/redux/post');
        });
    }

    render() {
        const { handleSubmit} = this.props;
        const mediaTypes = [
            {key: 'i', text: 'Image', value: 'image' },
            {key: 'v', text: 'Video', value: 'video' },
            {key: 'g', text: 'Gif', value: 'gif' },
        ];

        return (
            <Grid centered padded>
                <Grid.Column  width={6} >
                    <Form onSubmit={handleSubmit(this.onSubmit)}>
                        <Form.Input
                            as={Field}
                            label='Title'
                            name='title'
                            placeholder='Title'
                            required
                            component={this.renderField}
                        />
                        <Form.Input
                            as={Field}
                            label='Categories'
                            name='categories'
                            placeholder='Categories'
                            required
                            component={this.renderField}
                        />
                        <Form.TextArea
                            as={Field}
                            label='Post Content'
                            name='content'
                            placeholder='Content'
                            required
                            component={this.renderField}
                        />
                        <Form.Select
                            label='Media type'
                            options={mediaTypes}
                            placeholder='Select media type'
                            error
                        />
                        <Button.Group fluid>
                            <Button type='Submit' content='Submit' positive />
                            <Button.Or />
                            <Button as={Link} to='/redux/post' type='cancel' content='Cancel' />
                        </Button.Group>

                    </Form>
                </Grid.Column>
            </Grid>
        )
    }

}

const validate = (values) => {
    const errors = {};

    if(!values.title) {
        errors.title = "Enter a title";
    }

    if(!values.categories) {
        errors.categories = "Enter categories"
    }

    if(!values.content) {
        errors.content = "Enter content";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(connect(null, { createPost })(PostNew));