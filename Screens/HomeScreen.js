import { View, Text, ScrollView, Pressable, Button, TextInput, Alert, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import DatePicker from 'react-native-date-ranges';
import { BottomModal, ModalButton, ModalContent, ModalFooter, SlideAnimation, ModalTitle } from 'react-native-modals';
export default function HomeScreen() {
  const [selectedDates, setSelectedDates] = useState();
  const navigation = useNavigation();
  const route = useRoute();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        display:'flex',
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "auto",
        justifyContent: "space-between",
        
       
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 100,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
    
        
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" , padding:'8'},
          text: { fontSize: 20 },
        }}
        primary
        title="Submit "
      />
    );
  };
  console.log(route.params);

  const searchPlaces = (place) => {
    if (!route.params || !selectedDates) {
      Alert.alert(
        "Invalid Details",
        "Please enter all the details",
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

    if (route.params && selectedDates) {
      navigation.navigate("Places", {
        rooms: rooms,
        adults: adults,
        children: children,
        selectedDates: selectedDates,
        place: place
      })
    }
  };
  return (
    <>
      <View>
        <View className=" bg-[#003580] flex-row items-center justify-between p-1  ">
        <Header />
        </View>
        <ScrollView className='flex'>
          <View className=" m-5 border-amber-400 border-2 rounded-md ">
            <Pressable onPress={() => navigation.navigate("Search")}
              className=" flex-row items-center  px-2 py-3 border-2 border-amber-400  ">
              <Feather name="search" size={24} color="black" />
              <TextInput
                placeholderTextColor="black"
                placeholder={
                  route?.params ? route.params.input : "Enter Your Destination"
                }
              />
            </Pressable>
            <Pressable className=" flex-row items-center  px-2 py-3 border-2 border-amber-400  ">
              <Feather name="calendar" size={24} color="black" />
              <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    
                  },
                }}
                selectedBgColor="#0047AB"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                allowFontScaling={false}
                placeholder={"Select Your Dates"}
                mode={"range"}
              />
            </Pressable>

            <Pressable className=" flex-row items-center px-2 py-3 border-2 border-amber-400  " onPress={() => setModalVisibile(!modalVisibile)}>
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput
                placeholderTextColor="red"
                placeholder={` ${rooms} room • ${adults} adults • ${children} Children`}
              />
            </Pressable>
            <Pressable className=" flex-row items-center  px-2 py-3 border-2 border-amber-400 bg-[#2a52be]"    onPress={() => searchPlaces(route?.params.input)}>
              <Text className=" items-center font-medium text-white text-sm "> Search </Text>
            </Pressable>
          </View>
          <Text className=" my-3 text-lg font-medium"> Travel More spend less </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable className=" w-52 h-36 mt-2 bg-[#003580] rounded-xl p-5 mx-5 ">
              <Text className=" text-white text-lg font-medium my-2  " >  Genius</Text>
              <Text className=" text-white text-sm font-medium mb-5">  You are ate genius level one in our loyalty program</Text>
            </Pressable>
            <Pressable className=" w-52 h-36 mt-2 border-2 border-slate-400 rounded-xl border-r-2 mx-2 ">
              <Text className=" text-sm font-black my-2">  15% Discounts</Text>
              <Text className=" text-sm font-normal">  Complete 5 stays to unlock level 2</Text>
            </Pressable>
            
            <Pressable className=" w-52 h-36 mt-2 border-2 border-slate-400 rounded-xl border-r-2 mx-5 ">
              <Text className=" text-sm font-black my-2"> 10% Discounts</Text>
              <Text className=" text-sm font-normal" >Enjoy Discounts at participating at properties worldwide</Text>
            </Pressable>
          </ScrollView>
          <Pressable className=" mt-10 justify-center items-center"> 
          <Image
              style={{ width: 200, height: 50, resizeMode: "cover" }}
              source={{
                uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
                headers: {
                  Accept: '*/*',}
              }}
            />
          </Pressable>
        </ScrollView>
      </View>


      <BottomModal swipeThreshold={200}
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        footer=
        {<ModalFooter>
          <ModalButton text="Apply" className=" mb-5 text-white bg-[#003580]" onPress={() => setModalVisibile(!modalVisibile)} />
        </ModalFooter>}
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={new SlideAnimation({
          slideFrom: "bottom",
        })}
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent className=" w-full h-80 ">
          <View className=" flex-row items-center justify-between  my-3">
            <Text className=" text-base font-medium ">Rooms</Text>
            <Pressable className=" flex-row items-center gap-2">
              <Pressable onPress={() => setRooms(Math.max(1, rooms - 1))}
                className=" w-7 h-7 rounded-xl border-slate-600 bg-slate-400 ">
                <Text className="items-center text-xl font-semibold px-2"> - </Text>
              </Pressable>
              <Pressable>
                <Text className="items-center text-lg font-medium px-2">{rooms}</Text>
              </Pressable>
              <Pressable onPress={() => setRooms((c) => c + 1)}
                className=" w-7 h-7 rounded-xl border-slate-600 bg-slate-400 ">
                <Text className="items-center text-xl font-semibold px-1"> + </Text>
              </Pressable>
            </Pressable>
          </View>

          <View className=" flex-row items-center justify-between  my-5">
            <Text className=" text-base font-medium ">Adults</Text>
            <Pressable className=" flex-row items-center gap-2">
              <Pressable     onPress={() => setAdults(Math.max(1, adults - 1))}
                className=" w-7 h-7 rounded-xl border-slate-600 bg-slate-400 ">
                <Text className="items-center text-xl font-semibold px-2"> - </Text>
              </Pressable>
              <Pressable>
                <Text className="items-center text-lg font-medium px-2">{adults}</Text>
              </Pressable>
              <Pressable       onPress={() => setAdults((c) => c + 1)}
                className=" w-7 h-7 rounded-xl border-slate-600 bg-slate-400 ">
                <Text className="items-center text-xl font-semibold px-1"> + </Text>
              </Pressable>
            </Pressable>
          </View>
          <View className=" flex-row items-center justify-between  my-5">
            <Text className=" text-base font-medium ">Children</Text>
            <Pressable className=" flex-row items-center gap-2">
              <Pressable      onPress={() => setChildren(Math.max(0, children - 1))}
                className=" w-7 h-7 rounded-xl border-slate-600 bg-slate-400 ">
                <Text className="items-center text-xl font-semibold px-2"> - </Text>
              </Pressable>
              <Pressable>
                <Text className="items-center text-lg font-medium px-2">{children}</Text>
              </Pressable>
              <Pressable      onPress={() => setChildren((c) => c + 1)}
                className=" w-7 h-7 rounded-xl border-slate-600 bg-slate-400 ">
                <Text className="items-center text-xl font-semibold px-1"> + </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>



      </BottomModal>





    </>
  )
}