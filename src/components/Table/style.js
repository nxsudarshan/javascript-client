export const style = {
  root: {
    width: 'auto%',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    margin: 10,
    width: 'auto%',
    overflowX: 'auto',
    marginBottom: 2,
  },
  table: {
    minWidth: 400,
    align: 'center',

  },
  alternateRow: {
    '&:nth-of-type(odd)': {
      background: '#f1f8ff',
    },
  },
  rowHover: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
};
