import {
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
//import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const login = () => {
    signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
       console.log("user credential", userCredential);
       const user = userCredential.user;
       console.log("user details", user);
    })
 }
//   console.log(userCredentials.user.stsTokenManager.accessToken);
//   AsyncStorage.setItem(
//     "tokenUser",
//     userCredentials.user.stsTokenManager.accessToken
//   );

//   useEffect(() => {
//     const getMyObject = async () => {
//       try {
//         const jsonValue = await AsyncStorage.getItem("tokenUser");
//         console.log("jsonValue");
//         if (jsonValue) {
//           navigation.replace("Main");
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     getMyObject();
//   }, [token]);

 useEffect(() => {
   try {
     const unsubscribe = auth.onAuthStateChanged((authUser) => {
       if (authUser) {
         navigation.replace("Main");
       }
     });

     return unsubscribe;
   } catch (e) {
     console.log(e);
   }
 }, []);

 return (
   <SafeAreaView className=' flex-1 bg-white p-3 items-center'>
   
     <KeyboardAvoidingView>
       <View className=' justify-center items-center mt-24'>
       
         <Text className='text-base font-bold text-[#003580]'>
           Sign In
         </Text>

         <Text className=' mt-4 font-bold text-lg'>
           Sign In to Your Account
         </Text>
       </View>

       <View className='mt-12'>
         <View>
           <Text className='text-gray-300 font-semibold text-lg'>
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
             className={`${password ? 'text-lg' : 'text-lg'} border-b my-3 w-72 `}
             />
         </View>
       </View>

       <Pressable
       onPress={login}
       className=' w-52 bg-[#003580] p-4 rounded-lg mt-12 ml-auto mr-auto'
       >
         <Text className='items-center justify-center text-white text-base font-bold ml-auto mr-auto'> 
        
        
           Login
         </Text>
       </Pressable>

       <Pressable
         onPress={() => navigation.navigate("Register")}
       className=' mt-10 ml-10'
       >
         <Text className=' items-center text-gray-300 text-base'>
           Don't have an account? Sign Up
         
         </Text>
       </Pressable>
     </KeyboardAvoidingView>
   </SafeAreaView>
 );
};

