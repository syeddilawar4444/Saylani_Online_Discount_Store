/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import local files
import Navigator from './src/Config/Navigation';





function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const back = {
    backgroundColor: isDarkMode ? "blue" : "red"
  }
const textColor  ={
  color:isDarkMode ? Colors.white : Colors.black
}
  return (
 <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={back.backgroundColor}
        />
        <View style={{flex:1}}>

          <Navigator />
        </View>
        </>
  
      // {/* <ScrollView
      //   contentInsetAdjustmentBehavior="automatic"
      //   style={backgroundStyle}>
      //   <Header />
      //   <Navigator />
      
      // </ScrollView>
      // */}


  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   container:{
//     flex:1,
//     backgroundColor:"red"
//   ,
//   height:200
//     }
// });

export default App;
