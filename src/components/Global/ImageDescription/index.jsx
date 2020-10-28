import React from 'react';
import { Grid, Header, List, Image } from 'semantic-ui-react';
import styles from 'components/Global/global.module.scss';
import defaultImage from 'assets/home-image.svg';
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

export default ImageDescription;
