/* eslint-disable */
import React from 'react';
import { Link, Router } from 'react-router-dom';
import {Flag, Header, Card, Icon, Label, Grid, Dimmer, Loader} from 'semantic-ui-react'
import dummyImg from '../../images/florida-3.jpg';
import axios from 'axios';

class MMD extends React.Component {

    state = {
      mediaLoading: true
    }

    componentDidMount() {

      setTimeout(() => {
        this.setState({mediaLoading: false});
      }, 2000);

    }




    generateTags = (media) => {
        return (
          <Label
            as='div'
            color='yellow'>
            <Icon name={media === 'video' ? 'video camera' : 'camera retro'} />
            {media}
          </Label>
        )
      }

      handleContextRef = contextRef => this.setState({ contextRef })

      populateGrid = (meta, key) => {
        return (
          <Card
            as={Link}
            to={`${this.props.match.url}/${meta}-${key.toString()}`}
            key={key.toString()}
            image={dummyImg}
            header='Loerm ipsum'
            meta={meta}
            extra={this.generateTags(meta)}
          />
        )
      }

      render() {
        let imageCardGrid = [];
        let videoCardGrid = [];
        let mediaLoading = this.state.mediaLoading;

        for(let i = 0; i < 10; i++) {
          imageCardGrid[i] = this.populateGrid('Image', i);
          videoCardGrid[i] = this.populateGrid('Video', i);
        }

        return (
          <div>
            <Dimmer active={mediaLoading}>
              <Loader indeterminate>Loading up all da media</Loader>
            </Dimmer>

            <Grid padded>
                <Grid.Row centered columns={1}>
                    <Grid.Column>
                        <div className='image-section'>

                            <Card.Group itemsPerRow={4}>
                            {imageCardGrid.map(card => card)}
                            </Card.Group>
                        </div>

                        <div className='video-section'>

                            <Card.Group itemsPerRow={4}>
                            {videoCardGrid.map(card => card)}
                            </Card.Group>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
          </div>
        );
      }
}

export default MMD;