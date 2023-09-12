import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { savedPlaces } from "../SavedReducer";
import { setDoc,doc } from "firebase/firestore";
import { auth, db } from "../firebase";

const ConfirmationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Confirmation",
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
  const dispatch = useDispatch();
  const uid = auth.currentUser.uid
  const confirmBooking = async () => {
    dispatch(savedPlaces(route.params));

    await setDoc(
      doc(db, "users", `${uid}`),
      {
        bookingDetails: { ...route.params },
      },
      {
        merge: true,
      }
    );

    navigation.navigate("Main");
  }
  return (
    <View>
      <Pressable className='bg-white m-2'>
        <View className=' mx-3 mt-2 flex-row items-center justify-between'
        >
          <View>
            <Text className='text-2xl font-bold'>
              {route.params.name}
            </Text>
            <View className=' flex-row items-center gap-2 mt-2'
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text>{route.params.rating}</Text>
              <View className='bg-[#003580] py-1 rounded w-full'
              >
                <Text className='items-center text-white text-sm'>
                 
                  Genius Level
                </Text>
              </View>
            </View>
          </View>

          <View className='bg-[#17B169] px-2 py-1 rounded-md'>
        
            <Text className='text-white text-sm'>
              Travel sustainable
            </Text>
          </View>
        </View>

        <View className='m-3 flex-row items-center gap-14'>
       
          <View>
            <Text className='text-base font-semibold mb-1'>
              Check In
            </Text>
            <Text className=' text-base font-bold text-[#007FFF]'>

              {route.params.startDate}
            </Text>
          </View>

          <View>
            <Text className='text-base font-semibold mb-1'>
              Check Out
            </Text>
            <Text
             className=' text-base font-bold text-[#007FFF]'
            >
              {route.params.endDate}
            </Text>
          </View>
        </View>
        <View className='m-3'>
          <Text className='text-base font-semibold mb-1'>
            Rooms and Guests
          </Text>
          <Text className=' text-base font-bold text-[#007FFF]'>
            {route.params.rooms} rooms {route.params.adults} adults{" "}
            {route.params.children} children
          </Text>
        </View>

        <Pressable
        onPress={confirmBooking}
         className=' bg-[#003580] w-32 p-1 mx-3 mb-5 rounded'
        >
          <Text className='items-center text-white text-sm font-bold'>Book Now</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default ConfirmationScreen;