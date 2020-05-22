import React from 'react';
import PropTypes from 'prop-types';
import { Table, Rating, Popup } from 'semantic-ui-react';
import styles from 'components/Brainstorming/styles';

const IdeaTable = ({ canRate, ideas, handleRate }) => {
  return (
    <div style={styles.tableBox}>
      <Table celled padded style={styles.table}>
        <Table.Header>
          <Table.Row>
            <Popup
              content="Aqui se colocaran las ideas"
              trigger={<Table.HeaderCell>Idea</Table.HeaderCell>}
            />
            <Popup
              content="En el paso 2 podras puntuar tus ideas"
              trigger={<Table.HeaderCell collapsing>Rating</Table.HeaderCell>}
            />
          </Table.Row>
        </Table.Header>
      </Table>
      <div style={styles.tableBody}>
        <Table celled padded>
          <Table.Body>
            {ideas.map(({ id, text, rating }) => (
              <Table.Row key={id}>
                <Table.Cell>{text}</Table.Cell>
                <Table.Cell collapsing>
                  <Rating
                    id={id}
                    disabled={!canRate}
                    onRate={handleRate}
                    icon="star"
                    rating={rating}
                    maxRating={5}
                  />
                </Table.Cell>
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
};

export default IdeaTable;
