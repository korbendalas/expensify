import React from 'react';
import {BrowserRouter, Route, Switch,Link, NavLink} from 'react-router-dom';
import Home from '../components/Home';
import Edit from '../components/Edit';
import Create from '../components/Create';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Header from '../components/Header';





 const AppRouter =()=>{
   return (
   <BrowserRouter>
     <div>

       <Header/>
       <Switch>{/* koristi se da ako nema pogodjenog url izbaci notFound */}
         <Route path="/" component={Home} exact={true}/> {/* exact da kaze tacno koju putanju treba */}
         <Route path="/create" component={Create}/>
         <Route path="/edit/:id" component={Edit}/>
         <Route path="/help" component={Help}/>
         <Route component={NotFound}/> {/* iskace kad god nema pogodjenog url
   i uvek na dnu treba bude. */
         }
       </Switch>

     </div>

   </BrowserRouter>
 );};
export default AppRouter;
