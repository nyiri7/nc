import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'

import Logo from '../assets/images/logo.png'


const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom:30}}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={{marginBottom:30}}>
        <Text style={styles.title}>No Cheats</Text>
      </View>
      <View style={styles.card}>
        <Text style={{color:'gray'}}>Még neked se</Text>
        <Text style={styles.bold}>Jancsi!</Text>
      </View>
      <Button style={{marginTop:15}} title='Party' onPress={()=>{}} />
    </View>

  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  bold:{
    fontWeight:'bold'
  },title:{
    fontWeight:'bold',
    fontSize: 36,
  },
  card:{
    backgroundColor:'#eee',
    padding:20,
    borderRadius: 5,
    boxShadow:'4px 4px rgba(0,0,0,0.1)',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:15
  },
  logo:{
    height:200,
    width:200
  }
})