import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import MoreInformation from './MoreInformation'
import SignUp from './LoginForm'
import AddorDelete from './AddorDelete'
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'



function MainFram() {
  return (
    <>    
    <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/aboutUs' component={AboutUs}/>
        <Route path='/more' component={MoreInformation}/>
        <Route path= '/signup' component={SignUp}/>
        <Route path='/submition' component={AddorDelete}/>
        
        <Redirect to= '/home'/>
    </Switch>



    </>
  )
}

export default withRouter(MainFram)