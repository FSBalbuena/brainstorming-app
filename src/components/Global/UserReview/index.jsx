import React from 'react';
import { Segment, Header, Icon, Container } from 'semantic-ui-react';
import styles from 'components/Global/global.module.scss';

const UserReview = ({ review, author, rating }) => {
  const iconGroup = [];
  for (let i = 0; i < rating; i++) {
    iconGroup.push(<Icon name="star" color="yellow" size="big" />);
  }
  return (
    <Segment placeholder raised className={styles.reviewSegment}>
      <Container textAlign={'center'}>
        <Header
          size="large"
          content={review}
          subheader={author}
          className={styles.reviewText}
        />
        <span>{iconGroup}</span>
      </Container>
    </Segment>
  );
};

export default UserReview;
