import {  Text, View ,SafeAreaView,Pressable} from 'react-native'
import React ,{useLayoutEffect} from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const BookingScreen = () => {
  const bookings = useSelector((state) => state.booking.booking);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Bookings",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  return (
    <SafeAreaView>
          {bookings.length > 0 && bookings.map((item) => (
        <Pressable className=' bg-white my-2 mx-5 border-gray-400'>
          
          <View>
            <Text className=" text-2xl font-bold" >
              {item.name}
            </Text>
            <View className=' flex-row items-center mt-2'>
          
              <MaterialIcons name="stars" size={24} color="green" />
              <Text className=' ml-1 font-normal text-base'>
                {item.rating}
              </Text>
              <Text className='ml-1'>•</Text>
              <View className='p-2 rounded w-24 bg-[#0039a6]'>
              
                <Text className=' items-center text-white text-xs font-normal'>
                 
                  Genius Level
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
    </SafeAreaView>
  )
}

export default BookingScreen

