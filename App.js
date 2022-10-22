import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';


export default function App() {

  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  StatusBar.setBarStyle(Themes.light.statusBar);


  return (
    <SafeAreaView style={styles.container}>

      <Header/>
      <Body/>
      <View style={styles.footerContainer}>
        <Footer/>
      </View>
      

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  footerContainer: {
    width: '100%',
    height: 120,
    position: 'absolute',
    bottom:0
  }
});
