import { StyleSheet } from "react-native"
export const customStyle = StyleSheet.create({
  screen:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  header:{
    backgroundColor:"blue",
    padding: 10,
    width: '100%',
    height: '10%'
  },
  headerText:{
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listItem:{
    padding: 10,
    backgroundColor: 'lightgray',
    width: '100%',
  }
})