import React from 'react';
import PropTypes from 'prop-types';
import { Table, Rating, Popup } from 'semantic-ui-react';
import styles from 'components/Brainstorming/brainstorming.module.scss';
import { IdeaEdition } from 'containers/Brainstorming';

const IdeaTable = ({ canRate, headers, ideas }) => {
  return (
    <div className={styles.tableBox}>
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
      <div className={styles.tableBody}>
        <Table celled padded fixed>
          <Table.Body>
            {ideas.map(idea => (
              <Table.Row key={idea.id}>
                {headers.map(({ value, props }) => {
                  if (value === 'edit')
                    return (
                      <Table.Cell
                        key={'edit' + value}
                        {...props}
                        content={<IdeaEdition canRate={canRate} idea={idea} />}
                      />
                    );
                  return (
                    <Table.Cell key={value} {...props}>
                      {value === 'rating' ? (
                        <Rating
                          id={idea.id}
                          disabled
                          icon="star"
                          rating={idea[value]}
                          maxRating={5}
                        />
                      ) : (
                        idea[value]
                      )}
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

IdeaTable.propTypes = {
  ideas: PropTypes.array,
  canRate: PropTypes.bool,
  handleRate: PropTypes.func,
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
