import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { pixelNormalize } from "../components/Normalise";
import { MaterialIcons } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
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
  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;
  
  return (
    <>
      <SafeAreaView className='flex-1'>
        <ScrollView>
          <Pressable className=" flex-row flex-wrap m-3 ">
            {route.params.photos.slice(0, 5).map((photo) => (
              <View className=" m-3">
                <Image // come back here 
                  style={{
                    width: 120,
                    height: pixelNormalize(80),
                    borderRadius: pixelNormalize(4),
                   
                  }}
                  source={{ uri: photo.image }}
                />
              </View>
            ))}
            <Pressable className="items-center justify-center">
              <Text className="items-center ml-5 ">
                Show More 
              </Text>
            </Pressable>
          </Pressable>

          <View className=" mx-3 mt-2 flex-row items-center justify-between"  >
            <View>
              <Text className=" text-2xl font-bold ">
                {route.params.name}
              </Text>
              <View className=" flex-row items-center gap-2 mt-2 " >
                <MaterialIcons name="stars" size={24} color="green" />
                <Text>{route.params.rating}</Text>
                <View className=" bg-[#003580] rounded-md py-1 w-24 " >
                  <Text className=" items-center text-white text-sm">
                 
                    Genius Level
                  </Text>
                </View>
              </View>
            </View>

            <View className=" bg-green-700 px-2 py-1 rounded-md">
             
              <Text className="text-white text-xs"> 
                Travel sustainable
              </Text>
            </View>
          </View>

          <Text className=" border-slate-400 rounded-sm h-1 mt-4"
          
          />
          <Text className=" mt-3 text-base mx-3 font-medium">
         Price for 1 Night and {route.params.adults} adults
          </Text>
          <View className=" flex-row items-center gap-2 mt-1 mx-3">
       
            <Text className=" text-red-500 text-xl line-through">
           
               ₦{route.params.oldPrice * route.params.adults}
            </Text>
            <Text className=" text-lg">
            ₦ {route.params.newPrice * route.params.adults}
            </Text>
          </View>
          <View className=" mx-3 mt-2 px-1 py-1 bg-green-600 w-20 rounded">
          
            <Text style={{ textAlign: "center", color: "white" }}>
              {offerPrice.toFixed(0)} % OFF
            </Text>
          </View>

          <Text className=" border-slate-400 rounded-sm h-1 mt-4"
          />
          <View className=" m-3 items-center flex-row gap-14">
          
            <View>
              <Text className=" text-base font-semibold mb-1">
            
                Check In
              </Text>
              <Text className=" text-base font-bold text-[#007fff]"
               
              >
                {route.params.selectedDates.startDate}
              </Text>
            </View>

            <View>
              <Text  className=" text-base font-semibold mb-1">
             
                Check Out
              </Text>
              <Text className=" text-base font-bold text-[#007fff]"
              
              >
                {route.params.selectedDates.endDate}
              </Text>
            </View>
          </View>
          <View  className=" m-3">
            <Text className=" text-base font-semibold mb-1"> 
              Rooms and Guests
            </Text>
            <Text className=" text-base font-bold text-[#007fff]">
            
              {route.params.rooms} rooms {route.params.adults} adults{" "}
              {route.params.children} children
            </Text>
          </View>

          <Text className=" border-slate-400 rounded-sm h-1 mt-4"
          
          />
          <Amenities />

          <Text className=" border-slate-400 rounded-sm h-1 mt-4"
           
          />
        </ScrollView>
      </SafeAreaView>

      <Pressable
        onPress={() => navigation.navigate("Rooms", {
          rooms: route.params.availableRooms,
          oldPrice: route.params.oldPrice,
          newPrice: route.params.newPrice,
          name: route.params.name,
          children: route.params.children,
          adults: route.params.adults,
          rating: route.params.rating,
          startDate: route.params.selectedDates.startDate,
          endDate: route.params.selectedDates.endDate
        })}
        className="bg-[#6CB4EE] absolute bottom-5 p-4 mx-3 w-11/12">
       
        <Text className=" items-center text-white text-base font-bold">
          Select Availabilty
        </Text>
      </Pressable>
    </>
  );
};
export default PropertyInfoScreen;