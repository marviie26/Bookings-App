import {
  Pressable,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const UserScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "User Details",
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const finalStep = () => {
    if (!firstName || !lastName || !email || !phoneNo) {
      Alert.alert(
        "Invalide Details",
        "Please ente all the fields",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
    if (firstName && lastName && email && phoneNo) {
      navigation.navigate("Confirmation", {
        oldPrice: route.params.oldPrice,
        newPrice: route.params.newPrice,
        name: route.params.name,
        children: route.params.children,
        adults: route.params.adults,
        rating: route.params.rating,
        startDate: route.params.startDate,
        endDate: route.params.endDate,
      });
    }
  };
  return (
    <>
      <View className="p-5">
        <View className=" flex-col gap-3">
          <Text>First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            className=" p-2 border-gray-300 border-r"
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Last Name</Text>
          <TextInput
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            className=" p-2 border-gray-300 border-r"
          />
        </View>

        <View className=" flex-col gap-3 mt-2">
          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            className=" p-2 border-gray-300 border-r"
          />
        </View>

        <View className=" flex-col gap-3 mt-2">
          <Text>Phone no</Text>
          <TextInput
            value={phoneNo}
            onChangeText={(text) => setPhoneNo(text)}
            className=" p-2 border-gray-300 border-r"
          />
        </View>
      </View>

      <Pressable className=" bg-white mt-auto flex-row justify-between items-center mb-10 p-2"
      >
        <View>
          <View
           className=" flex-row items-center mt-4 gap-2"
          >
            <Text
             className=" text-red-500 text-xl line-through"
            >
             ₦ {route.params.oldPrice * route.params.adults}
            </Text>
            <Text className="text-xl">
            ₦ {route.params.newPrice * route.params.adults}
            </Text>
          </View>
          <Text>
            You Saved {route.params.oldPrice - route.params.newPrice} Naira
          </Text>
        </View>
        <Pressable
          onPress={finalStep}
          className=' bg-[#007FFF] p-2 rounded'
        >
          <Text className='items-center text-white text-base'>
            Final Step
          </Text>
        </Pressable>
      </Pressable>
    </>
  );
};

export default UserScreen;
