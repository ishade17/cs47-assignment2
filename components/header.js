import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from '../assets/Themes';
import { Icons } from "../assets/Themes";


const Header = () => {
  let [fontsLoaded] = useFonts({
    Sydney: require('../assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('../assets/Fonts/Sydney-Serial-Bold.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;
  StatusBar.setBarStyle(Themes.light.statusBar);

  return (

    <View style={styles.container}>
      <Image source={Icons.menu.light} style={styles.icon}/>
      <Text style={styles.titleText}>ensom</Text>
      <Image source={Icons.sun} style={styles.icon}/>
    </View>

  );
}

function getTextFontSize() {
  if (Dimensions.get('window').width < 500) {
    return 40
  } else {
    return 60
  }
}

export default Header;

const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: '10%',
    justifyContent: 'space-between',
    margin: '2%'
  },
  icon: {
    width: 50, 
    height: 50
  },
  titleText: {
    fontWeight: 'bold',
    fontFamily: 'Sydney',
    fontSize: getTextFontSize()
  }
});
