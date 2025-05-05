import React from 'react';
import { Rating, Form, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styles from '@/components/Brainstorming/brainstorming.module.scss';

const RatingFormContainer = ({ ideaText, rating, handleRate, textFields }) => {
  return (
    <section className={styles.ratingSection}>
      <Header content={`"${ideaText}"`} className={styles.title} />
      <div className={styleMedia.ratingBox}>
        <Rating icon="star" rating={rating} maxRating={5} onRate={handleRate} />
      </div>
      <Form>
        {textFields.map(field => (
          <Form.TextArea {...field} key={field.label} />
        ))}
      </Form>
    </section>
  );
};

RatingFormContainer.propTypes = {
  ideaText: PropTypes.string,
  rating: PropTypes.number,
  handleRate: PropTypes.func,
  textFields: PropTypes.array,
};

export default RatingFormContainer;
