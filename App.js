import React, {useState} from "react";
import { Text, View, Image, TextInput, TouchableOpacity} from "react-native";
import { loginstyle } from "./src/MainStyle";

const App = () => {
  const [username, setUsername] = useState('')
  const [Lastname, setLastname] = useState('')
  const handlePress = ()=> {
    console.log('ABNORMAL')
    setUsername('Ace')
    setLastname('Pogi')
  }

return (
  <View style={loginstyle.Container}>


<TouchableOpacity 
  onPress={handlePress}>
    <Image style ={loginstyle.ImageContainer}
    source= {require('./src/assets/diw.png'
    )}
    />
  </TouchableOpacity>

  <TextInput 
  value= {username}
  style= {loginstyle.TextInput}
  onChangeText={(text) => setUsername (text)}
  />
  

  <TextInput 
  value= {Lastname}
  style= {loginstyle.TextInput}
  onChangeText={(text) => setLastname (text)}
  />

  <Text style={loginstyle.wel}>
  WELCOME TO DIWATA PARES OVERLOAD
  </Text>

  <Text style={loginstyle.wel}>
  {username},{Lastname}
  </Text>

  <Image style ={loginstyle.ImageContainer2}
    source= {require('./src/assets/pares.webp'
    )}
    />

    
  </View>


);

}

export default App