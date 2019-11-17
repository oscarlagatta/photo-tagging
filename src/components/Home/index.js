import React from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';

import Banner from './Banner';
import MainView from './MainView';

const mapStateToProps = state => ({
  appName: state.appName
});
/**
 * REUDX has a concept known as middleware
 * that let's us intercept and transform actions
 * so we can intercept when the payload property is
 * a promise.
 */

 /**
  * mapDispatchToProps
  * Maps a dispatch function to actions, this means that now
  * the component can call this.props.onLoad to fire off an 
  * event with type: HOME_PAGE_LOADED and a PAYLOAD which 
  * will contain the http promise.
  * @param {*} dispatch 
  */
 const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: 'HOME_PAGE_LOADED', payload }),
});

class Home extends React.Component {
  componentDidMount() {    
    this.props.onLoad(agent.Articles.all());
  }

  render() {
    return (
      <div className="home-page">

        <Banner appName={this.props.appName} />

        <div className="container">
          <div className="row">

            <MainView />

            <div className="col-md-3">
              <div className="sidebar">

                <p>Popular Tags</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
