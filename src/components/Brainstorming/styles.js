import { colors } from 'data/styles';

export default {
  container: {
    width: '80%',
    paddingTop: '60px',
  },
  headerContainer: {
    marginBottom: '30px',
  },
  adminBox: {},
  title: {
    color: colors.primary,
  },
  goal: {
    color: colors.primary,
    fontWeight: 'normal',
  },
  copyBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tableBox: {
    flex: '2',
  },
  tableBody: {
    maxHeight: '50vh',
    overflow: 'auto',
  },
  ideaFormBox: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
  },
  ideaForm: {
    width: '80%',
  },
};
