/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import dummyImg from '../../images/florida-3.jpg';
import { Grid, Image, Divider, Container, Button, Icon, Header } from 'semantic-ui-react';

// Styles
import './__styles__/index.css';


class MediaDetail extends React.Component {
    render() {
        const reg = /(Video)|(Image)/g;
        const jawn = reg.exec(this.props.match.url);

        return (
            <div className='media-detail'>
                <Grid columns='equal' padded>
                    <Grid.Column width={12} className='no-padding media-detail__image'>
                        <Header
                            as='h2'
                            className='media-detail__back-button'
                            color='grey'
                            onClick={() => this.props.history.goBack()}
                            >
                            <Icon
                                name='arrow left'
                                size='big'
                            />
                            Back
                        </Header>

                        <Image
                            src={dummyImg}
                            size='huge'
                            verticalAlign='middle'
                            centered
                        />
                    </Grid.Column>
                    <Grid.Column className='media-detail__info' verticalAlign='middle'>
                        Details
                        <Divider horizontal />
                        <Container textAlign='left'>
                            <p>Date Added: January 1, 1983</p>
                            <p>Filename: {dummyImg}</p>
                            <p>Added By: Gucci Mane</p>
                            <p>Asset Type: {jawn[0]}</p>
                            <Button
                                primary
                                icon='download'
                                labelPosition='right'
                                content='Download file'
                            />
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default MediaDetail;