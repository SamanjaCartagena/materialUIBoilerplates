import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import  FormControlLabel  from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import  ButtonGroup  from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import  Checkbox  from '@material-ui/core/Checkbox';
import  TextField  from '@material-ui/core/TextField';
import {makeStyles, ThemeProvider, createTheme} from '@material-ui/core/styles';
import { green, orange, purple } from '@material-ui/core/colors';
import 'fontsource-roboto';
import  Typography  from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import  Toolbar  from '@material-ui/core/Toolbar';
import  IconButton  from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root:{
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border:0,
    borderRadius:15,
    color:purple,
    padding: '0 30px'
  }
})
const theme = createTheme({
  typography:{
    h2:{
      fontSize:24,
      marginBottom:0,
    }
  },
  palette: {
    primary:{
      main:orange[500],
    },
    secondary:{
      main:green[500]
    }
  }
})

function ButtonStyled(){
  const classes= useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample(){
const [checked, setChecked] =useState(true)

  return(
    <FormControlLabel 
      control = {<Checkbox 
        checked={checked}
        icon={<DeleteIcon />}
        checkedIcon={<SaveIcon />}
        onChange={(e) =>setChecked(e.target.checked)}
        color="primary"
        inputProps={{
          'aria-label':'secondary checkbox'
        }}
      />}
      label="Testing Checkbox"

    />
      
    
  )
}
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="sm">
    <div className="App">
    <AppBar>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
            MUI Theming
        </Typography>
        <Button>
          Login
        </Button>
      </Toolbar>
    </AppBar>
    <Typography variant="h2" component="div">
       Welcome to MUI
    </Typography>
    <Typography variant="h3">
       Learn how to use material ui
    </Typography>
    <ButtonStyled/>
    <Grid container spacing={4} justify="center">
    <Grid item xs={12} sm={6}>
      <Paper style={{height:75, width:'100%', backgroundColor:'black'}}/>
    </Grid>
    <Grid item xl={3}>
      <Paper style={{height:75, width:50}}/>
    </Grid>
    <Grid item xl={3}>
      <Paper style={{height:75, width:50}}/>
    </Grid>
    </Grid>
    <CheckboxExample />
    <ButtonGroup>
      <Button 
      startIcon={<SaveIcon />}
      size="small"
      style={{
        fontSize:14
      }}
      onClick={
        () =>alert('Hello')} 
        href="#" 
        variant="contained" color="primary">
      Save
      </Button>
      <Button 
      startIcon={<DeleteIcon />}
      size="small"
      style={{
        fontSize:14
      }}
      onClick={
        () =>alert('Hello')} 
        haref="#" 
        variant="contained" color="secondary">
      Discard
      </Button>
      </ButtonGroup>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
