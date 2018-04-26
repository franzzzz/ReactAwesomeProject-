import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    const PeopleName = 'Goudan';
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      //   <People name={PeopleName} />
      // </View>
      <AppNavigator initialRoute={{ ident: 'Search' }} />
    );
  }
}

// class People extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <View>
//         <Text> LALALA : {this.props.name}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
