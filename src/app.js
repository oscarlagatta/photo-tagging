import React from 'react';
import { connect } from 'react-redux';
import Home from './components/Home/index';

const mapStateToProps = state => ({
  appName: state.common.appName
});

import Header from './components/Header';

// import { hot } from 'react-hot-loader';

// const Warning = React.lazy(() => import('./warning'));
class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        <Home />     
        {/* {this.props.children} */}
      </div>
    );
  }
}

// App.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };
// const hotFunction = hot(module);
// export default hotFunction(App);
export default connect(mapStateToProps, () => ({}))(App);
