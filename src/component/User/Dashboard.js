import React,{useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItems from './ListItems';
import Count_number from './Count_number';
import Count from './Count';
import Currentdate_time from './Currentdate_time'
import CurrentTime_digitalclock from './CurrentTime_digitalclock'
import Map_Fatarray_function from './Map_Fatarray_function'
import CurrentTime from './CurrentTime'
import Messagefor_gm_an_gn from './Messagefor_gm_an_gn';
import MinisecondProject from './MinisecondProject';
import React_SpreadOperator from './React_SpreadOperator';
import Reactevent_Form1 from './Reactevent_Form1';
import Reactevent_Form2 from './Reactevent_Form2';
import ReactEvent from './ReactEvent';
import Reactexpression from './Reactexpression';
import Reverse from './Reverse';
import Showdata_API from './Showdata_API';
import Showimages from './Showimages';
import TodoList_Project from './TodoList_Project';
import ContextApi from './Context-ContexApi/ContextApi';
import FetchApi from './React_FetchApi/FetchApi';
import Reducefunction from './React_Reduce/Reducefunction'
import Userdisplay from './Userdisplay'
import CurrentLocation from './CurrentLocation/UseLocation-Hooks/UseLocation';
import Registration from './Ragistration'
import Dynamic_routing from './DynamicRouting/Dynamic_routing';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
    <span className='spanCopy_Classname'>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">Your Website</Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </span>
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [getUserData, setUserData]= useState("");
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleComponent=async (showData)=>{
    switch (showData) {
      case 0:
        setUserData()
        break;

      case 1:
        setUserData(<Count_number/>)
        break;      

      case 2:
        setUserData(<Count/>)
        break;  

      case 3:
        setUserData(<Currentdate_time/>)
        break;     

      case 4:
        setUserData(<CurrentTime/>)
        break;    
    
      case 5:
        setUserData(<CurrentTime_digitalclock/>)
        break; 
     
      case 6:
        setUserData(<Map_Fatarray_function/>)
        break;  
          
      case 7:
        setUserData(<Messagefor_gm_an_gn/>)
        break;  

      case 8:
        setUserData(<MinisecondProject/>)
        break; 
        
      case 9:
        setUserData(<React_SpreadOperator/>)
        break;   
          
        case 10:
          setUserData(<Reactevent_Form1/>)
          break;

        case 11:
          setUserData(<Reactevent_Form2/>)
          break;

        case 12:
          setUserData(<ReactEvent/>)
          break;
      
          case 13:
            setUserData(<Reactexpression/>)
            break;

          case 14:
            setUserData(<Reverse/>)
            break;
              
          case 15:
            setUserData(<Showdata_API/>)
            break;
              
          case 16:
            setUserData(<Showimages/>)
            break;
                  
          case 17:
            setUserData(<TodoList_Project/>)
            break;

          case 18:
          setUserData(<ContextApi/>)
          break;   

          case 19:
            setUserData(<FetchApi/>)
            break; 
              
          case 20:
            setUserData(<Reducefunction/>)
            break;  
            
            case 21:
            setUserData(<Userdisplay/>)
            break;   
            
         case 22:
           setUserData(<Dynamic_routing/>);
           break;
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItems  handle_Component={handleComponent} />
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12}>
          
            </Grid>
          
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper} id="paperId">
                 {getUserData}
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            {/* <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
          
              </Paper>
            </Grid> */}
            {/* Recent Orders */}
            {/* <Grid item xs={12}>
              <Paper className={classes.paper}>
             
              </Paper>
            </Grid> */}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}