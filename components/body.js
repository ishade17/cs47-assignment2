import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from '../assets/Themes';
import { Icons } from "../assets/Themes";
import { Profiles } from '../assets/Themes';


const Body = () => {

  return (

    <View style={styles.container}>

      <ImageBackground source={Profiles.mtl.image} style={styles.mtlImgStyle} imageStyle={{borderRadius: 20, width: '100%', height: '100%'}} >
        <Text style={styles.topText}>MTL</Text>
        <Text style={styles.bottomText}>2 miles away</Text>
      </ImageBackground>
      
      <View style={styles.hottestTakeContainer}>
        <View style={styles.hottestTakeTextContainer}>
          <Text style={styles.hottestTakeText}>My hottest take</Text>
        </View>

        <View style={styles.hottestTakeAudioContainer} theme>
          <Image source={Icons.player.light} style={styles.playerIconStyle}/>
          <Image source={Icons.audioWave.light} style={styles.audioIconStyle}/>
        </View>

      </View>

    </View>

  );
}

function getTextFontSize() {
  if (Dimensions.get('window').width < 500) {
    return 18
  } else {
    return 32
  }
}

function getPhotoWidth() {
  if (Dimensions.get('window').width < 500) {
    return '90%'
  } else {
    return '70%'
  }
}

export default Body;

const styles = StyleSheet.create({
  container : {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  mtlImgStyle : {
    width: getPhotoWidth(),
    aspectRatio: 1.1,
    position: 'relative',
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowOpacity:  Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius, 
  },
  topText : {
    position: 'absolute',
    top: 5,
    left: 20,
    color: 'white',
    fontFamily: 'Sydney',
    fontSize: 45
  },
  bottomText: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    color: 'white',
    fontFamily: 'Sydney',
    fontSize: 15
  },
  hottestTakeContainer: {
    width: getPhotoWidth(),
    height: '18%',
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'column',
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowOpacity:  Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,  
    marginTop: '5%'  
  },
  hottestTakeTextContainer: {
    height: '15%',
    width: '100%',
    // marginTop: '2%'
  },
  hottestTakeText: {
    color: 'black',
    fontFamily: 'Sydney',
    position: 'absolute',
    top: 10,
    left: 20,
    fontSize: getTextFontSize()
  },
  hottestTakeAudioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    marginTop: '2%',

  },
  playerIconStyle: {
    height: '50%',
    width: '10%',
    position: 'relative',
    left: 15,
    paddingRight: 10

  },
  audioIconStyle: {
    height: '50%',
    width: '70%',
    margin: '10%'
  }
});
