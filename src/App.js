import './App.css';
import React,{ Component } from 'react'
import Navbar from './Components/Navbar';
import NewsBody from './Components/NewsBody';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  // States
  state = {
    progress: 0
  }
  handleProgress = (value)=>{
    this.setState({progress: value})
  }
  render() {
    return (
      <>
        <Router>
          <Navbar/>

          <LoadingBar color='red' progress={this.state.progress} height='5px'/>

          <Switch>
            <Route exact path="/">
              <NewsBody topLoadingBarProgress={this.handleProgress} countryName="in" categoryName="General" key="general" />
            </Route>
            <Route exact path="/business">
              <NewsBody topLoadingBarProgress={this.handleProgress} countryName="in" categoryName="Business" key="business"/>
            </Route>
            <Route exact path="/entertainment">
              <NewsBody topLoadingBarProgress={this.handleProgress} countryName="in" categoryName="Entertainment" key="entertainment"/>
            </Route>
            <Route exact path="/health">
              <NewsBody topLoadingBarProgress={this.handleProgress} countryName="in" categoryName="Health" key="health"/>
            </Route>
            <Route exact path="/science">
              <NewsBody topLoadingBarProgress={this.handleProgress} countryName="in" categoryName="Science" key="science"/>
            </Route>
            <Route exact path="/sports">
              <NewsBody topLoadingBarProgress={this.handleProgress} countryName="in" categoryName="Sports" key="sports"/>
            </Route>
            <Route exact path="/technology">
              <NewsBody topLoadingBarProgress={this.handleProgress} countryName="in" categoryName="Technology" key="technology"/>
            </Route>
          </Switch>
        </Router>
      
      </>
    )
  }
}
