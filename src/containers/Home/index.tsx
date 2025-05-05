import React from 'react';
import { withRouter } from 'react-router-dom';

import * as routes from '@/data/routes';
import PropTypes from 'prop-types';
import { Divider, Image, Container } from 'semantic-ui-react';
import selectSteps from '@/assets/select-steps.png';
import dotsJointLogo from '@/assets/dotsjoint-logo.png';
import {
  CopyToClipboard,
  Slogan,
  UserReview,
  ImageDescription,
} from '@/components/Global';
import { IdeaForm } from '@/components/Brainstorming';
import styles from '@/components/Global/home.module.scss';
import homeImage from '@/assets/home-image.svg';
import Footer from '@/components/Global/Footer';

const HomeContainer = ({ history }) => {
  const handleButton = () => {
    history.push(routes.BRAINSTORMING);
  };
  const firstReviewProps = {
    rating: 5,
    review:
      '“The creativity of a team is surprising when they don’t feel exposed and their ideas are taken into account objectively.”',
    author: '- Angie Ojeda, Recruiting Manager at Nearsure',
  };
  const firstImageProps = {
    title: 'Methodology approved.',
    items: [
      "Ideas can't be deleted",
      'All ideas are shared, because they are submited anonimusly.',
      'Team discuss, leader hears, and ideas are scored.',
    ],
    sectionRender: (
      <div className={styles.copyBox}>
        <CopyToClipboard url={'https://www.dotsjoint.com'} />
      </div>
    ),
  };
  const secondImageProps = {
    title: 'Protect the shyest!',
    items: [
      'Is anonimous, no one feels exposed. Give wings to creativity!',
      'Objective scores, ideas are good or bad, no matter who wrote them.',
    ],
    sectionRender: <IdeaForm defaultOpen={false} />,
  };
  const lastImageProps = {
    title: 'You are the leader!',
    items: [
      'Decide when is time to go next step.',
      'Write down the pros and cons based on your team opinions',
      'Download the session for future reference.',
    ],
    sectionRender: <Image src={selectSteps} />,
  };
  const secondReviewProps = {
    rating: 5,
    review:
      '“The use of this tool has substantially improved the relationships between leaders and their work teams”',
    author: '- Marcelo Luksenbergh, Backend Developer, Ring',
  };
  return (
    <main>
      <Image src={dotsJointLogo} size="tiny" className={styles.logo} />
      <Container className={styles.container} textAlign={'center'}>
        <Slogan handleButton={handleButton} />
        <Image src={homeImage} className={styles.homeImage} />
      </Container>
      <UserReview {...firstReviewProps} />
      <section className={styles.descriptionBox}>
        <ImageDescription {...firstImageProps} />
        <ImageDescription {...secondImageProps} />
      </section>
      <UserReview {...secondReviewProps} />
      <section className={styles.descriptionBox}>
        <ImageDescription {...lastImageProps} />
      </section>
      <Divider />
      <Container className={styles.footerSlogan} textAlign={'center'}>
        <Slogan handleButton={handleButton} />
      </Container>
      <Footer />
    </main>
  );
};

HomeContainer.propTypes = {
  history: PropTypes.object,
};

const RoutedHomeContainer = withRouter(HomeContainer);
export default RoutedHomeContainer;
