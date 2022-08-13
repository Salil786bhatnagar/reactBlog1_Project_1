import React, { useMemo } from 'react';
import './Custom.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Currentdate_time from './component/User/Currentdate_time';
import Messagefor_gm_an_gn from './component/User/Messagefor_gm_an_gn';
import Reactexpression from './component/User/Reactexpression';
import Showimages from './component/User/Showimages';
import Mytestpage,{testcoding,Mycoding} from './component/Testpage';
import * as showDetails from './component/Testpage';
import  {Add, Sub, Mul, Div} from './component/Calc';
import Cards from './component/Miniproject_netflix';
import Ndata from './component/User/Ndata';
import Map_Fatarray_function from './component/User/Map_Fatarray_function';
import Showdata_API from './component/User/Showdata_API';
import MinisecondProject from './component/User/MinisecondProject';
import Netflex from './component/Netflex';
import Amazon from './component/Amazon';
import { Backdrop } from 'material-ui-core';
import Machine_game from './component/User/Machine_game';
import Count_number from './component/User/Count_number';
import CurrentTime from './component/User/CurrentTime';
import Currentdigitalclock from './component/User/CurrentTime_digitalclock';
import Reverse from './component/User/Reverse';
import ReactEvent from './component/User/ReactEvent';
import Reactevent_Form1 from './component/User/Reactevent_Form1';
import Reactevent_Form2 from './component/User/Reactevent_Form2';
import Count from './component/User/Count';
import React_SpreadOperator from './component/User/React_SpreadOperator';
import TodoList_Project from './component/User/TodoList_Project';
import ContexApi from './component/User/Context-ContexApi/ContextApi';
import UseEffectDemo from './component/User/React_useEffect/UseEffectDemo';
import AxiosApi from './component/User/React_Axios_Api/AxiosApi';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Reducefunction from './component/User/React_Reduce/Reducefunction';
import FetchApi from './component/User/React_FetchApi/FetchApi';
import Dashboard from './component/User/Dashboard';
import Login from './component/User/Login'
import Registration from './component/User/Ragistration'
import Userdisplay from './component/User/Userdisplay';
import CurrentLocation from './component/User/CurrentLocation/UseLocation-Hooks/UseLocation';
import User_reduxfile from './component/User_reduxfile';
import React_AddArray from './component/User/React_AddArray';
import DynamicRouting from './component/User/DynamicRouting/Dynamic_routing'
import User from './component/User/DynamicRouting/User';
import PageNotFound from './PageNotFound';
// use to useMemo in react.js
import Usememo_component from './component/Usememo_component'
//use to multiple api call React.js
import MultipleApi from './component/User/Multiple_Api_Call/MultipleApi';
// use to activ and deactiv button
import ActivDeactiv from './component/User/Activ_Deactiv_Btn/ActivDeactiv'

// fetch api data
import FetchApi_Data from './component/User/React_FetchApi/Fetch_Api'

// axios api data
import Axios_Api from './component/User/React_FetchApi/Axios_Api'
//child to parent page

import Parent from './component/User/Child-To-Parent/ParentPage';
const errorMsg ={
  color:'red',
  background:'yellow',
  textAline:'center'
}
const Fwebseries = "youtub";
const Fvs =()=>{
  if(Fwebseries === "Netflex"){
    return(
      <>
       <Netflex/>
      </>
    );
  }else if(Fwebseries === "Netflex")
  {
    return(
      <>
        <Amazon/>
      </>
    );
  }else{
    return(
      <>
       <h4 style={errorMsg}>Data Not Found</h4>
      </>
    )
      
  }
}


function App(props) {
   
   function ncard(val,key){
     return(
       <div>
          {/* <Cards
          imgsrc={Ndata[0].imgsrc}
          title={Ndata[0].title}
          sname={Ndata[0].sname}
          link={Ndata[0].link}
       /> */}
       {/* <Cards
          key    ={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
       /> */}
       </div>
     )
   }

  return (
    <>
      
  
      <ol>
       {/* <li>{showDetails.Mytestpage}</li>
       <li>{showDetails.testcoding}</li>
       <li>{showDetails.Mycoding()}</li> */}
       {/* <li>{showDetails.default}</li>
       <li>{showDetails.testcoding}</li>
       <li>{showDetails.Mycoding()}</li> */}
       {/* <li><span>Addition:-</span>{Add(20,2)}</li>
       <li><span>Subtraction:-</span>{Sub(45,6)}</li>
       <li><span>Multipli:-</span>{Mul(6,6)}</li>
       <li><spna>Devision:-</spna>{Div(64,7)}</li> */}
      </ol>
     <div className="divclassName"> 
     {/* <h1> List of top 5 Netflix Web Series in 2021 </h1>
    <ul> 
      <li>
      {Ndata.map(ncard)}   
       <Fvs/>
       {
       (Fwebseries === "Netflex")? <Netflex/> : <Amazon/>
       }
       </li>
    
     
     </ul>  */}

      {/* <Cards
       imgsrc={Ndata[0].imgsrc}
       title={Ndata[0].title}
       sname={Ndata[0].sname}
       link={Ndata[0].link}
       /> */}
      </div>

      {/* <Showimages/> */}

      <Router>
         <Switch>

          <Route
              exact
              strict
              path="/"
              component={Dashboard}
              history={props.history}
            /> 

            <Route
              exact
              strict
              path="/Login"
              component={Login}
              history={props.history}
            />   

            <Route
              exact
              strict
              path="/Registration"
              component={Registration}
              history={props.history}
            /> 

            <Route
              exact
              strict
              path="/Userdisplay"
              component={Userdisplay}
              history={props.history}
            />  

            <Route
              exact
              strict
              path="/Showimages"
              component={Showimages}
              history={props.history}
            /> 

            <Route
              exact
              strict
              path="/Reactexpression"
              component={Reactexpression}
              history={props.history}
            />

            <Route
              exact
              strict
              path="/Messagefor_gm_an_gn"
              component={Messagefor_gm_an_gn}
              history={props.history}
            />

            <Route
              exact
              strict
              path="/Currentdate_time"
              component={Currentdate_time}
              history={props.history}
            />    

            <Route
              exact
              strict
              path="/UseEffectDemo"
              component={UseEffectDemo}
              history={props.history}
            />  

            <Route
              exact
              strict
              path="/React_SpreadOperator"
              component={React_SpreadOperator}
              history={props.history}
            />  

            <Route
              exact
              strict
              path="/Count"
              component={Count}
              history={props.history}
            />
            
            <Route
              exact
              strict
              path="/Reactevent_Form2"
              component={Reactevent_Form2}
              history={props.history}
            />   

            <Route
              exact
              strict
              path="/Reactevent_Form1"
              component={Reactevent_Form1}
              history={props.history}
            />   

            <Route
              exact
              strict
              path="/ReactEvent"
              component={ReactEvent}
              history={props.history}
            />

            <Route
              exact
              strict
              path="/Reverse"
              component={Reverse}
              history={props.history}
              />

            <Route
              exact
              strict
              path="/Currentdigitalclock"
              component={Currentdigitalclock}
              history={props.history}
              />

            <Route
              exact
              strict
              path="/CurrentTime"
              component={CurrentTime}
              history={props.history}
              />

            <Route
              exact
              strict
              path="/Count_number"
              component={Count_number}
              history={props.history}
              />

              <Route
              exact
              strict
              path="/Machine_game"
              component={Machine_game}
              history={props.history}
              />

            <Route
              exact
              strict
              path="/MinisecondProject"
              component={MinisecondProject}
              history={props.history}
              />

            <Route
              exact
              strict
              path="/Showdata_API"
              component={Showdata_API}
              history={props.history}
              />

            <Route
              exact
              strict
              path="/Map_Fatarray_function"
              component={Map_Fatarray_function}
              history={props.history}
              />
        
            <Route
              exact
              strict
              path="/AxiosApi"
              component={AxiosApi}
              history={props.history}
              />

            <Route
              exact
              strict
              component={ContexApi}
              path="/ContexApi"
              history={props.history}
            />
            <Route  
                exact
                strict
                path="/TodoList_Project" 
                component={TodoList_Project}
                history={props.history}
                />  

            <Route
              exact
              strict
              path="/Reducefunction"
              component={Reducefunction}
              history={props.history}
            />

            <Route
              exact
              strict
              path="/FetchApi"
              component={FetchApi}
              history={props.history}
            />

            <Route
              exact
              strict
              path="/CurrentLocation"
              component={CurrentLocation}
              history={props.history}
            />

            <Route
              exact
              strict
              path="/User_reduxfile"
              component={User_reduxfile}
              history={props.history}
            /> 

            <Route
              exact
              strict
              path="/React_AddArray"
              component={React_AddArray}
              history={props.history}
            /> 

            <Route
              exact
              strict
              path="/DynamicRouting"
              component={DynamicRouting}
              history={props.history}
            /> 

          <Route
              exact
              strict
              path="/User"
              component={User}
              history={props.history}
            /> 

          <Route
              exact
              strict
              path="/Usememo_component"
              component={Usememo_component}
              history={props.history}
            /> 

          <Route
            exact
            strict
            path="/MultipleApi"
            component={MultipleApi}
            history={props.history}
          />  

          <Route
            exact
            strict
            path="/ActivDeactiv"
            component={ActivDeactiv}
            history={props.history}
          /> 

        <Route
            exact
            strict
            path="/FetchApi_Data"
            component={FetchApi_Data}
            history={props.history}
          /> 

          <Route
            exact
            strict
            path="/Axios_Api"
            component={Axios_Api}
            history={props.history}
          /> 

         <Route
            exact
            strict
            path="/Parent"
            component={Parent}
            history={props.history}
          />   
          
          <Route
            path="*"
            component={PageNotFound}
          />
          </Switch>
      </Router>
       {/* calculater program in react.js */}
      {/* <div>
        <ul>
          <li> 
            add of two number:- <h5>{Add (5, 5)}</h5>
           </li>
          <li>
            Sub of two number:- {Sub (5, 3)}
          </li>
          <li>
            Mul of two number:- {Mul (5, 6)}
          </li>
          <li>
            Div of two number:- {Div (6, 12)}
          </li>
        </ul>
      </div>
        */}
    </>
  );
}

export default App;
