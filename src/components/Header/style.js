import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderBottomLeftRadius: 50,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
  },
  header: {
    color: '#fff',
    margin: 0,
    fontSize: '1.6rem'
  },
  user: {
    color: '#fff'
  },
  searchBox: {
    background: '#ffffff73',
    borderRadius: 50,
    paddingRight: 5,
  },
  searchInput: {
    outline: 'none',
    border: 'none',
    paddingLeft: 10,
    background: 'transparent',
    minWidth: 200
  }
});