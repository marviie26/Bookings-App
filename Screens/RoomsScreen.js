import {  Text, View, ScrollView, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Amenities from "../components/Amenities";
const RoomsScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Available Rooms",
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
  const [selected, setSelected] = useState([]);
  return (
    <>
      <ScrollView>
        {route.params.rooms.map((item, index) => (
          <Pressable className=" m-2 bg-white p-2"
            key={index}
          >
            <View className=" flex-row items-center justify-center"
      
            >
              <Text className=" text-[ #007FFF] text-base font-medium"
               
              >
                {item.name}
              </Text>
              <AntDesign name="infocirlceo" size={24} color="#007FFF" />
            </View>
            <Text  className=" mt-1 text-base">
              pay at the property
            </Text>
            <Text className=" mt-1 text-green-600 text-base">
              Free cancellation Available
            </Text>
            <View className=" mt-1 flex-row items-center gap-2"
            
            >
              <Text className=" text-red-500 text-lg line-through"
            
              >
                {route.params.oldPrice}
              </Text>
              <Text className="text-lg"> ₦{route.params.newPrice}</Text>
            </View>
            <Amenities />

            {selected.includes(item.name) ? (
              <Pressable className=" border-[#318CE7] bg-[#F0F8FF] border-r-2 w-full p-2 rounded-md items-center flex-row"
             
              >
                <Text className=" items-center ml-auto mr-auto text-[#318CE7] font-bold text-base"
                 
                >
                  SELECTED
                </Text>
                <Entypo
                  onPress={() => setSelected([])}
                  name="circle-with-cross"
                  size={24}
                  color="red"
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelected(item.name)}
                className=" rounded-md border-r-2 p-2 border-[#007FFF]"
              >
                <Text className=" items-center font-bold text-base text-[#007FFF]"
                 
                >
                  SELECT
                </Text>
              </Pressable>
            )}
          </Pressable>
        ))}
      </ScrollView>

      {selected.length > 0 ? (
        <Pressable
          onPress={() =>
            navigation.navigate("User", {
              oldPrice: route.params.oldPrice,
              newPrice: route.params.newPrice,
              name: route.params.name,
              children: route.params.children,
              adults: route.params.adults,
              rating: route.params.rating,
              startDate: route.params.startDate,
              endDate: route.params.endDate,
            })
          }
          className="p-2 mb-8 rounded mx-4 bg-[#007FFF]"
       
        >
          <Text className=" items-center text-white font-bold"
            >
            Reserve
          </Text>
        </Pressable>
      ) : null}
    </>
  );
};

export default RoomsScreen;