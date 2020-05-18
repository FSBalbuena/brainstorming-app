import React from 'react';
import { useSelector } from 'react-redux';
//import PropTypes from 'prop-types';

import adminImage from 'assets/brainstorming.png';
import { Grid } from 'semantic-ui-react';
import styles from 'components/Brainstorming/styles';
import { AdminBox, HeaderContent } from 'components/Brainstorming';
import CopyToClipboard from 'components/CopyToClipboard';

const HeaderContainer = () => {
  const { admin, sessionTitle, url, goal } = useSelector(
    state => state.brainstorming
  );
  return (
    <Grid
      divided="vertically"
      data-test="header"
      style={styles.headerContainer}
    >
      <Grid.Row columns={2}>
        <Grid.Column>
          <AdminBox name={admin} image={adminImage} />
          <HeaderContent sessionTitle={sessionTitle} goal={goal} />
        </Grid.Column>
        <Grid.Column style={styles.copyBox} data-test="session-url">
          <CopyToClipboard url={url} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

HeaderContainer.defaultProps = {};

HeaderContainer.propTypes = {
  /**
     * // Puedes declarar que una propiedad es un tipo específico de JS. Por defecto, estas
  // son todas opcionales.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // Cualquier cosa que sea interpretada: números, cadenas, elementos o un array
  // (o fragment) que contengan estos tipos.
  optionalNode: PropTypes.node,

  // Un elemento de React
  optionalElement: PropTypes.element,

  // Un tipo de elemento React (ej. MyComponent).
  optionalElementType: PropTypes.elementType,

  // Además puedes declarar que una prop es una instancia de una clase. Este usa
  // el operador instanceof de JS.
  optionalMessage: PropTypes.instanceOf(Message),

  // Puedes asegurar que una prop esta limitada a valores específicos si se
  // considera como enum.
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // Un objeto que puede ser de diferentes tipos
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // Un array de determinado tipo
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // Un objeto con valores de propiedad de determinado tipo
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // Un objeto que tenga determinada estructura
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  })
     */
};

export default HeaderContainer;
