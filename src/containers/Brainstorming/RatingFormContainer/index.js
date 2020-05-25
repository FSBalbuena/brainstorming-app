import React, { useState } from 'react';
import { Rating, Form } from 'semantic-ui-react';
import styles from 'components/Brainstorming/brainstorming.module.scss';

const RatingFormContainer = ({ rating, handleRate, textFields }) => {
  return (
    <section className={styles.ratingSection}>
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

export default RatingFormContainer;
