import {  Text, View ,SafeAreaView,KeyboardAvoidingView,Pressable,TextInput, Alert} from 'react-native'
import React ,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc,doc } from 'firebase/firestore';
//import AsyncStorage from '@react-native-async-storage/async-storage';



const RegisterScreen = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const navigation = useNavigation();
    const register = () => {
        if(email === "" || password === "" || phone === "" ){
            Alert.alert(
                "Invalid Detials",
                "Please enter all the credentials",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
        }
        createUserWithEmailAndPassword(auth,email,password).then((userCredentials) => {
           
            const user = userCredentials._tokenResponse.email;
            const uid = auth.currentUser.uid;

             setDoc(doc(db,"users",`${uid}`),{
                 email:user,
                 phone:phone
             })
        })
    }
  return (
    <SafeAreaView className='flex-1 bg-white p-2 items-center'>
    <KeyboardAvoidingView>
        <View className=" justify-center items-center mt-24" >
         
          <Text className='text-base font-bold text-[#003580]'>
            Register
          </Text>

          <Text className=' mt-4 font-medium text-lg'>
           Create an Account
          </Text>
        </View>

        <View className='mt-12'>
          <View>
            <Text  className='text-gray-300 font-semibold text-lg'>
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="enter your email id"
              placeholderTextColor={"black"}
              className={`${email ? 'text-lg' : 'text-lg'} border-b my-3 w-72 `}
            />
          </View>

          <View className='mt-4'>
            <Text className='text-gray-300 font-semibold text-lg'>
              Password
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={"black"}
              className={`${email ? 'text-lg' : 'text-lg'} border-b my-3 w-72 `}
              />
          </View>

          <View className='mt-4'>
            <Text className='text-gray-300 font-semibold text-lg'>
              Phone
            </Text>

            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="enter your Phone No"
              placeholderTextColor={"black"}
              className={`${email ? 'text-lg' : 'text-lg'} border-b my-3 w-72 `}
            />
          </View>
        </View>

        <Pressable
        onPress={register}
        className=' w-52 bg-[#003580] p-4 rounded-lg mt-12 ml-auto mr-auto'
        >
          <Text className='items-center text-white text-base font-bold '>Register</Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()} style={{marginTop:20}}>
            <Text className=' items-center text-gray-300 text-base'>Already have an account? Sign In</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen
