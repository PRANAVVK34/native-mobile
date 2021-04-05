
import React, {Component} from 'react';
import { StyleSheet, Image, View, Text} from 'react-native';
import {Video} from 'expo-av';
import Time from "./components/time";
import io from 'socket.io-client';

export default class App extends Component{

  state={
    count:""
  }

  componentDidMount(){
    var socket = io("http://192.168.1.5:3000")

    socket.on("send", (data)=>{
      this.setState({count:data})
    })
  }

  render(){
    return(
      <>
      <Video
      style={styles.backgroundImage}
      resizeMode='contain'
      shouldPlay
      isLooping
      source={require("./public/vdo.mp4")}/>


      {/* volcano label */}
      <View style={styles.topLeft}>
        <Text style={{color:"white"}}>https://volcano.live/
        <Text style={{color:"orange"}}>*africa</Text>
        </Text>
        <Text style={{color:"white", fontSize:13}}>by: 
        <Text style={{color:"blue", marginTop:10}}> Pipeline Surfing</Text>
        </Text>
      </View>
       {/* place time */}
      <View style={styles.bottomLeft}>
        <Time/>
      </View>
      {/* logo */}
      <Image style={styles.logo} 
      source={require("./assets/logo.png")}/>

      {/* live */}
      <View style={styles.topRight}>
        <View style={{display:"flex", flexDirection:"row",}}>
        <Text style={styles.live}>LIVE</Text>
        <Text style={{color:"white"}}> {this.state.count}</Text>
        </View>
        <Image style={{width:70, height:25, marginTop:10, marginLeft:-1}}
        source={require("./assets/graph.png")}></Image>

        <Text style={{color:"orange", marginTop:5}}>8MB</Text>

        <Text style={{color:"white", fontSize:10}}>airBytes</Text>
       
      </View>

 </>
    )
  }
}



const styles = StyleSheet.create({
  backgroundImage:{
    position:"absolute",
    width:"100%",
    height:"100%",
    backgroundColor:"black",
  },
  topLeft:{
    position:"absolute",
    top:"10%",
    left:"3%",
    
  },
  bottomLeft:{
    position:"absolute",
    bottom:"10%",
    left:"3%",
  },
  logo:{
    position:"absolute",
    right:"3%",
    bottom:"10%",
    width:30,
    height:30
  },
  topRight:{
    position:"absolute",
    top:"10%",
    right:"3%",
  },
  live:{
    backgroundColor:"red",
    color:"white",
    paddingRight:10,
    paddingLeft:10,
  }
});
