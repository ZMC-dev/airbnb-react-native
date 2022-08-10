import { Button, Text, TextInput, View, StyleSheet, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";


export default function SignUpScreen({ setToken }) {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <KeyboardAwareScrollView 
    style={styles.container}
    contentContainerStyle={{ alignItems: 'center', backgroundColor:'white'}}>
    
    <Image 
    source={require("../assets/img/logo.webp")}
    style={{width: 60 , height: 60, margin: 20}}/>

    <Text style={{fontSize: 25, padding: 20}}>Sign Up</Text>

    <TextInput style={styles.inputInline}
    placeholder="email"
    value={email}>
    </TextInput>

    <TextInput style={styles.inputInline}
    placeholder="username"
    value={username}>
    </TextInput>

    <TextInput style={styles.inputBlock}
    placeholder="describe yourself in some words"
    multiline={true}
    value={description}>
    </TextInput>

    <TextInput style={styles.inputInline}
    placeholder="password"
    secureTextEntry={true}
    value={password}>

    </TextInput>

    <TextInput style={styles.inputInline}
    placeholder="confirm password"
    secureTextEntry={true}
    value={confirmPassword}>
    </TextInput>


{/* 
    <View>
      <View>
        <Text>Name: </Text>
        <TextInput placeholder="Username" />
        <Text>Password: </Text>
        <TextInput placeholder="Password" secureTextEntry={true} />
        <Button
          title="Sign up"
          onPress={async () => {
            const userToken = "secret-token";
            setToken(userToken);
          }}
        />
      </View>
    </View> */}







      
    </KeyboardAwareScrollView>



    
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },

  inputInline: {
    borderBottomWidth: 1, 
    borderBottomColor: 'pink',
    height: 20, 
    width: '80%'
  },

  inputBlock: {
    borderColor: 'pink',
    borderWidth: 1,
    height: 50, 
    width: '80%'
  }
})
