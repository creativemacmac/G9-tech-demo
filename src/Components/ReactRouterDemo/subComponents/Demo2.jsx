// @flow
/* eslint-disable */
import React from 'react';
import Demo2API from './Demo2API';
import { Link } from 'react-router-dom';

// Styles
import { Header, List } from 'semantic-ui-react';

const Demo2 = ( props: any ) => {

const skater = Demo2API.skaters[parseInt(props.match.params.id, 10)];
const videoId = skater ? `https://www.youtube.com/embed/${skater.videoId}` : '';

  return (
    <div>
      <Header as='h2' content='Greatest Skate video of all time with the best team (minus one or two)' />

      {
        Demo2API.skaters.map((skater) => (
            <List key={skater.id} horizontal>
                <List.Item as={Link} to={`/reactRouter/demo2/${skater.id}`}>
                    {skater.name} | </List.Item>
            </List>
        ))
      }
      {/* {skater && */}

        <h1 className='jawn'>{skater.name}</h1>
        <iframe width="560" height="315" src={videoId} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      {/* } */}
    </div>
  )
}

export default Demo2;