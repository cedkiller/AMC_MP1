import { Text, View, StyleSheet, Image, Switch } from 'react-native';
import {useState} from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [Enable, setEnable] = useState("");

  return (
    <View style={{backgroundColor: Enable ? "yellow" : "black"}}>

      <Text style={{marginTop: 50, textAlign: 'center', color: Enable ? "black" : "white"}}>Created by Cedrick Jasper R. Sarabia</Text>

      <Text style={{marginTop: 200, textAlign: 'center', fontSize: 25, color: Enable ? "black" : "white"}}>AMC MP1</Text>

      <View style={styles.div}>
        <Image source={Enable ? require('./assets/Light.png') : require('./assets/Bulb.png')} style={styles.img}/>
      </View>

      <View style={styles.swi}>
        <Switch
        trackColor={{ false: "gray", true: "aqua" }} 
        thumbColor={Enable ? "blue" : "lightgray"} 
        onValueChange={setEnable} 
        value={Enable} 
        style={{marginTop: 15}}
        />
      </View>

      <Text style={{textAlign: 'center', fontSize: 17, marginBottom: 143, color: Enable ? "black" : "white"}}>{Enable ? "On" : "Off"}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  swi: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  div:{
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    marginTop: 50,
    height: 200,
    width: 200,
  },
});
