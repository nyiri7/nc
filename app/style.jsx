import { StyleSheet } from "react-native"
export const customStyle = StyleSheet.create({
  screen:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  header:{
    backgroundColor:"blue",
    paddingTop: 20,
    width: '100%',
    paddingBottom:20,
    position: "fixed",
    top: 0,
  },
  headerText:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listItem:{
    backgroundColor: 'lightgray',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  }
})