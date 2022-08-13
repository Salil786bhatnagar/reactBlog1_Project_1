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

export default function Count_number() {
    const [count, setCount] = useState(0)

    const classes = useStyles();

    const countData=()=>{
        setCount(count+1);
    }
    
    return (
        <div>
             <h2>{count}</h2>
             <Button onClick={countData} variant="contained" color="primary">
               Primary
             </Button>
        </div>
    )
}
