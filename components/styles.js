import { StyleSheet, Dimensions } from "react-native";
export const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    button: {
      alignItems: 'center',
      margin: 6,
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 15,
      elevation: 3,
      backgroundColor: 'white',
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
  
      elevation: 6,
    },
    setCenter: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    text1:{
      fontSize: 18,
    },
    icon:{
      height: 50,
      width: 50
    },
    back:{
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    },
    newBack:{
      height: Dimensions.get('window').height *0.27,
    },

    textColor:{
        color: 'white',
    },
    tinyLogo: {
        width: 70,
        height: 70,
        borderRadius: 150/2,
    },
    logo: {
        width: 55,
        height: 55,
        borderRadius: 150/2,
    },
    tinyLogo: {
        width: 80,
        height: 80,
        borderRadius: 150/2,
    },
    btn:{
        marginHorizontal: Dimensions.get('window').width * .10,
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    textColor:{
        color: 'white',
    },
    cLogo: {
      height: 40,
      width: 40,
      borderRadius: 150/2,
    },
    cLogo2: {
        height: 30,
        width: 30,
        borderRadius: 150/2,
    },
    cLogo3: {
      height: 45,
      width: 45,
      borderRadius: 150/2,
    },
    comment:{
        backgroundColor: '#EDEDED',
        elevation: 2,
        borderRadius: 8
    },
    cName: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    rName: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    backColor:{
      backgroundColor: '#36454F',
    },
    fontTheme:{
      fontFamily: 'sans-serif', 
      fontSize: 18
    },
    lable:{
      margin: 8,
      padding: 8,
      fontSize: 20,
      color: 'white',
      backgroundColor: '#694fad'//#E1DBF1
    },
    descText:{
      margin: 8,
      padding: 8,
      // justifyContent: 'flex-start',
      color: 'black',
      backgroundColor: '#E1DBF1',
      borderRadius: 15,
    },

    camera: {
      flex: 1,
      backgroundColor: 'black',
      aspectRatio: 9 / 16,
  },
  bottomBarContainer: {
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      marginBottom: 30,
  },
  recordButtonContainer: {
      flex: 1,
      marginHorizontal: 30,
  },
  recordButton: {
      borderWidth: 8,
      borderColor: '#ff404087',
      backgroundColor: '#ff4040',
      borderRadius: 100,
      height: 80,
      width: 80,
      alignSelf: 'center'
  },
  galleryButton: {
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 10,
      overflow: 'hidden',
      width: 50,
      height: 50,
  },
  galleryButtonImage: {
      width: 50,
      height: 50,
  },
  sideBarContainer: {
      top: 60,
      right: 0,
      marginHorizontal: 20,
      position: 'absolute'
  },
  iconText: {
      color: 'white',
      fontSize: 12,
      marginTop: 5
  },
  sideBarButton: {
      alignItems: 'center',
      marginBottom: 25
  }

  });