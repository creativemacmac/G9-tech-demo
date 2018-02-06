// @flow
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
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

        return (
            <Form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    label='Title'
                    name='title'
                    component={this.renderField}
                />
                <Field
                    label='Categories'
                    name='categories'
                    component={this.renderField}
                />
                <Field
                    label='Post Content'
                    name='content'
                    component={this.renderField}
                />
                <Button type='submit' content='Submit' />
                <Button as={Link} to='/redux/post' type='cancel' content='Cancel' />

            </Form>
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