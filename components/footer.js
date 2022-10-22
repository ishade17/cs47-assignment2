import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from '../assets/Themes';
import { Icons } from "../assets/Themes";


const Footer = () => {
  // let [fontsLoaded] = useFonts({
  //   Sydney: require('../assets/Fonts/Sydney-Serial-Regular.ttf'),
  //   SydneyBold: require('../assets/Fonts/Sydney-Serial-Bold.ttf'),
  // });

  // if (!fontsLoaded) return <AppLoading />;
  // StatusBar.setBarStyle(Themes.light.statusBar);

  return (

    <View style={styles.container}>
      <View style={styles.iconLabelContainer}>
        <Image source={Icons.discover.light} style={styles.icon}/>
        <Text style={styles.iconText}>Discover</Text>
      </View> 

      <View style={styles.iconLabelContainer}>
        <Image source={Icons.heart.light} style={styles.icon}/>
        <Text style={styles.iconText}>Matches</Text>
      </View> 

      <View style={styles.iconLabelContainer}>
        <Image source={Icons.messages.light} style={styles.icon}/>
        <Text style={styles.iconText}>DMs</Text>
      </View>       
      
    </View>

  );
}

export default Footer;

const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    backgroundColor: 'black',
  },
  iconLabelContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '25%',
    height: '70%'
  },
  icon: {
    width: 50, 
    height: 50
  },
  iconText: {
    marginTop: 5,
    fontFamily: 'Sydney',
    fontSize: 20,
    color: 'white'
  }
});
