import React, { useRef } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import {
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
  Dimmer,
} from 'semantic-ui-react';

import { createCSVSession } from 'factory/brainstorming';
import styles from 'components/Brainstorming/brainstorming.module.scss';

const DownloadContainer = () => {
  const { data: session } = useSelector(state => state.brainstorming);

  const { id: authId } = useSelector(state => state.auth);
  const isSessionAdmin = authId === session.adminId;

  const csvLink = useRef(null);
  const handleCSVClick = () => {
    if (isSessionAdmin) {
      csvLink.current.click();
    }
  };
  const handlePDFClick = () => {
    if (isSessionAdmin) {
      console.log(session);
    }
  };

  const csvUrl = createCSVSession(session);

  const fileName = format =>
    `${session.admin}_${session.title}.${format}`.replace(/\s/g, '_');

  return (
    <Segment className={styles.downloadBox} basic>
      <a
        href={csvUrl}
        ref={csvLink}
        target="_blank"
        rel="noreferrer"
        style={{ visibility: 'hidden' }}
        download={fileName('csv')}
      ></a>
      <Grid
        columns={2}
        className={styles.downloadGrid}
        stackable
        textAlign="center"
      >
        <Divider vertical>Or</Divider>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Header
              icon
              size="large"
              disabled={!isSessionAdmin}
              className={cx(
                styles.title,
                isSessionAdmin && styles.downloadOption
              )}
              onClick={handleCSVClick}
            >
              <Icon name="file excel" color="green" />
              Download to CSV
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Dimmer.Dimmable dimmed>
              <Dimmer active inverted>
                <Header as="h2" color="grey">
                  Coming Soon.
                </Header>
              </Dimmer>
              <Header
                icon
                size="large"
                disabled={!isSessionAdmin}
                className={cx(
                  styles.title,
                  isSessionAdmin && styles.downloadOption
                )}
                onClick={handlePDFClick}
              >
                <Icon name="file pdf" color="red" />
                Download to PDF
              </Header>
            </Dimmer.Dimmable>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DownloadContainer;
