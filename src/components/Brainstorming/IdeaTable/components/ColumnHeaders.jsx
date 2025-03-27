import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popup } from 'semantic-ui-react';
import styles from '@/components/Brainstorming/brainstorming.module.scss';

const IdeaTable = ({ headers }) => {
  return (
    <Table celled padded fixed className={styles.table}>
      <Table.Header>
        <Table.Row>
          {headers.map(({ content, text, props }) => (
            <Popup
              key={text}
              content={content}
              trigger={<Table.HeaderCell {...props}>{text}</Table.HeaderCell>}
            />
          ))}
        </Table.Row>
      </Table.Header>
    </Table>
  );
};

IdeaTable.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      text: PropTypes.string,
      value: PropTypes.string,
      props: PropTypes.object,
    })
  ),
};

export default IdeaTable;
