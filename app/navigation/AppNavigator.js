import React, { Component } from 'react';
//import { Navigator } from 'react-native';
//import { StackNavigator } from 'react-navigation';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Search from '../components/Search';
import Results from '../components/Results';

class AppNavigator extends Component {
  renderScene(route, navigator) {
    var globalNavigatorProps = { navigator };

    switch (route.ident) {
      case 'Search':
        return <Search {...globalNavigatorProps} />;
        return;
      // <View>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      // </View>;
      case 'Results':
        return <Results {...globalNavigatorProps} data={route.data} />;
      // <View>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      // </View>;
    }
  }

  render() {
    return (
      <NavigationExperimental.Navigator
        initialRoute={this.props.initialRoute}
        renderScene={this.renderScene}
        configureScene={route =>
          NavigationExperimental.Navigator.SceneConfigs.FloatFromRight
        }
      />
    );
  }
}

module.exports = AppNavigator;
