

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet,Text,View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen_01 from "./screens/Screen_01"
import Screen_02 from "./screens/Screen_02"
import Screen_03 from "./screens/Screen_03"
function App(){
    return (
        <div style={{overflow:'scroll'}}>

            <Screen_01></Screen_01>
            <Screen_02></Screen_02>
            <Screen_03></Screen_03>

            
        </div>
    )
}
export default App