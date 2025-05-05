import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CompleteModal } from '@/components/Global';
import { EditIcon } from '@/components/Brainstorming';
import { RatingForm } from '@/containers/Brainstorming';
import { updateIdea } from '@/store/actions/brainstorming';
const IdeaEditionContainer = ({ idea, canRate }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(idea.rating);
  const [pros, setPros] = useState(idea.pros);
  const [cons, setCons] = useState(idea.cons);
  const handleRate = (_, { rating }) => setRating(rating);
  const { id } = useSelector(state => state.brainstorming.data);
  const textFields = [
    {
      label: 'Pros',
      placeholder: 'This is a good idea because...',
      value: pros,
      onChange: (_, { value }) => setPros(value),
    },
    {
      label: 'Cons',
      placeholder: 'This is a bad idea because...',
      value: cons,
      onChange: (_, { value }) => setCons(value),
    },
  ];
  const cancel = {
    content: 'Cancel',
    color: 'red',
    onClick: () => setOpen(false),
  };
  const create = {
    content: 'Edit',
    color: 'teal',
    onClick: () => {
      const newIdea = { ...idea, pros, cons, rating };
      dispatch(updateIdea(id, newIdea));
      setOpen(false);
    },
  };
  const modalProps = {
    header: 'Rate idea',
    onClose: () => setOpen(false),
    open,
    cancel,
    create,
  };
  const handleEditIconClick = () => {
    if (canRate) {
      setOpen(true);
    }
  };
  return (
    <>
      <EditIcon canRate={canRate} onClick={handleEditIconClick} />
      <CompleteModal {...modalProps}>
        <RatingForm
          textFields={textFields}
          rating={rating}
          ideaText={idea.text}
          handleRate={handleRate}
        />
      </CompleteModal>
    </>
  );
};
IdeaEditionContainer.propTypes = {
  idea: PropTypes.object,
  canRate: PropTypes.bool,
};
export default IdeaEditionContainer;
