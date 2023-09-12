import {  Text, View } from "react-native";
import React from "react";

const Amenities = () => {
  const services = [
    {
      id: "0",
      name: "room service",
    },
    {
      id: "2",
      name: "free wifi",
    },
    {
      id: "3",
      name: "Family rooms",
    },
    {
      id: "4",
      name: "Free Parking",
    },
    {
      id: "5",
      name: "swimming pool",
    },
    {
      id: "6",
      name: "Restaurant",
    },
    {
      id: "7",
      name: "Fitness center",
    },
  ];
  return (
    <View classname="p-2">
      <Text classname=" text-base font-semibold">
        Most Popular Facilities
      </Text>
      <View classname=" flex-row items-center flex-wrap"
      
      >
        {services.map((item, index) => (
          <View classname=" m-2 bg-[#007FFF] px-3 py-1 rounded-3xl"
         
            key={index}
          >
            <Text classname=" items-center text-white">{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Amenities;
