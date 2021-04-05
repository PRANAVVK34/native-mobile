
import React, {useEffect, useState} from 'react';
import { View, Text} from 'react-native';


const time = ()=>{

    var [date,setDate] = useState(new Date());
    useEffect(()=>{
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
       
    })
    return(
        <View>
        <Text style={{color:"white"}}>AFRICA</Text>
        <Text style={{color:"white"}}>Local Time 
        <Text style={{color:"orange"}}> {date.toLocaleTimeString([],{hour:'2-digit', minute: '2-digit'})}</Text>
        </Text>
    </View>
    )
    
}

export default time