import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

export default function ListItems(props){
       const handleClick =(showData)=>{
       props.handle_Component(showData)
    };
      return(
        <div>
        <ListItem button onClick={()=>handleClick(0)}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={()=>handleClick(1)}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Count Number" />
        </ListItem>
        <ListItem button onClick={()=>handleClick(2)}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Increment & Decrement" />
        </ListItem>
        <ListItem button onClick={()=>handleClick(3)}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Currentdate Time" />
        </ListItem>

        
        <ListItem button onClick={()=>handleClick(4)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Current Time" />
          
        </ListItem>

        <ListItem button onClick={()=>handleClick(5)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Digitalclock" />
        </ListItem>

        <ListItem button onClick={()=>handleClick(6)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Map Fatarray Function" />
          
        </ListItem>

        <ListItem button onClick={()=>handleClick(7)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Messagefor Gm An Gn"/>
        </ListItem>  




        <ListItem button onClick={()=>handleClick(8)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Minisecond Project"/>
        </ListItem> 
      
        <ListItem button onClick={()=>handleClick(9)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="React SpreadOperator"/>
        </ListItem> 


        <ListItem button onClick={()=>handleClick(10)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Reactevent Form1"/>
        </ListItem> 

        <ListItem button onClick={()=>handleClick(11)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Reactevent Form2"/>
        </ListItem> 

       <ListItem button onClick={()=>handleClick(12)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="React Event"/>
        </ListItem> 

       <ListItem button onClick={()=>handleClick(13)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="React Expression"/>
        </ListItem> 

        <ListItem button onClick={()=>handleClick(14)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Reverse"/>
        </ListItem> 

       <ListItem button onClick={()=>handleClick(15)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Showdata API"/>
        </ListItem> 

        <ListItem button onClick={()=>handleClick(16)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Show Images"/>
        </ListItem> 

         <ListItem button onClick={()=>handleClick(17)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="TodoList Project"/>
        </ListItem> 

        <ListItem button onClick={()=>handleClick(18)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Context Api"/>
        </ListItem> 

        <ListItem button onClick={()=>handleClick(19)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Fetch Api"/>
        </ListItem> 

        <ListItem button onClick={()=>handleClick(20)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Reduce function"/>
        </ListItem> 


        <ListItem button onClick={()=>handleClick(21)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="User Record"/>
        </ListItem>

        <ListItem button onClick={()=>handleClick(22)}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Dynamic Routing"/>
        </ListItem>


      </div>
      );
}
 
