import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Header, Input } from 'semantic-ui-react';
import Action from './components/Action';

const styles = {
  copy: {
    display: 'flex',
    flexDirection: 'column',
  },
};
const CopyToClipboard = ({ url, text }) => {
  const textAreaRef = useRef(null);
  const [open, setOpen] = useState(false);

  const copyToClipboard = () => {
    textAreaRef.current.select();
    document.execCommand('copy');
    onCopy();
  };
  const onCopy = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), 1000);
  };
  const actionProps = {
    open,
    onClick: copyToClipboard,
  };
  return (
    <div style={styles.copy} data-test="copy">
      <Header content={text} as="h5" />
      <Input
        ref={textAreaRef}
        action={<Action {...actionProps} />}
        value={url}
      />
    </div>
  );
};

CopyToClipboard.defaultProps = {
  url: 'https://...',
  text: 'Invite your team',
};

CopyToClipboard.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default CopyToClipboard;
