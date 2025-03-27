import React from 'react';
import { Grid, Header, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import defaultImage from '@/assets/home-image.svg';
const ImageDescription = ({ title, items, sectionRender }) => {
  return (
    <Grid container stackable>
      <Grid.Row>
        <Grid.Column width={9} verticalAlign={'middle'}>
          <Header size={'large'} content={title} color={'teal'} />
          <List size={'large'}>
            {items.map((item, idx) => (
              <List.Item key={idx}>
                <List.Icon name="check" color={'teal'} />
                <List.Content>{item}</List.Content>
              </List.Item>
            ))}
          </List>
        </Grid.Column>
        <Grid.Column width={7} verticalAlign={'middle'}>
          {sectionRender}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

ImageDescription.defaultProps = {
  image: defaultImage,
};

ImageDescription.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  sectionRender: PropTypes.node.isRequired,
};

export default ImageDescription;
