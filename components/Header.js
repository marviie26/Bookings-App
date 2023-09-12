import { View, Text,} from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

export default function Header() {
  return (
    <>
  
  <View className="mt-4">
      <ScrollView
          // className="p-4"
          horizontal
          showsHorizontalScrollIndicator={false}
         className="overflow-visible"
          contentContainerStyle={{
            
          }}
      >
      <View className="flex-row items-center border-2 border-slate-300 rounded-3xl p-1 ">
        <Ionicons name="bed-outline" size={21} color="white" />

        <Text className=" ml-1 font-bold text-white text-sm " >Stays</Text>
      </View>

      <View className=" flex-row items-center ml-3">
        <Ionicons name="ios-airplane-outline" size={23} color="white" />
        <Text className="  font-bold text-white  text-sm "> Flights </Text>
      </View>
      <View className=" ml-3 flex-row items-center ">
        <Ionicons name="car-outline" size={23} color="white" />
        <Text className=" font-bold text-white text-sm "> Car Rental </Text>
      </View>
      <View className="  ml-4 flex-row items-center ">
        <FontAwesome5 name="uber" size={23} color="white" />
        <Text className=" font-bold text-white  text-sm ">Taxi </Text>
      </View>
      </ScrollView>
    </View>
  
    </>
  )
}