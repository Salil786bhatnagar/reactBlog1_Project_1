import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const CurrentTime=()=> {
   let CurrentTime = new Date().toLocaleTimeString();
    const [getTime, setTime] = useState(CurrentTime);
    const classes = useStyles();


const showTime=()=>{
    let  newCTime = new Date().toLocaleTimeString(); 
    setTime(newCTime)
}    

    return (
        <div>
            {getTime}
            <Button onClick={showTime} variant="contained" color="primary">
               Time...
             </Button>
        </div>
    )
}
export default CurrentTime;