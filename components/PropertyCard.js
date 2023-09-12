import { Dimensions,Image,Pressable,Text, View,} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const PropertyCard = ({
  rooms,
  children,
  property,
  adults,
  selectedDates,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get("window");
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View >
      <Pressable
      onPress={() => navigation.navigate("Info",{
        name: property.name,
        rating:property.rating,
        oldPrice:property.oldPrice,
        newPrice:property.newPrice,
        photos:property.photos,
        availableRooms:property.rooms,
        adults:adults,
        children:children,
        rooms:rooms,
        selectedDates:selectedDates,
      })}
        className=" m-4 flex-row bg-white "
      >
        <View>
          <Image
            style={{ height: height / 3, width: width-240 }}
            source={{ uri: property.image }}
          />
        </View>

        <View className="p-4">
          <View className=" flex-row items-center justify-center">
            <Text className=" w-72 ">{property.name}</Text>
            <AntDesign name="hearto" size={24} color="red" />
          </View>
          <View className=" flex-row items-center gap-2 mt-2">
            <MaterialIcons name="stars" size={24} color="green" />
            <Text className='p-1'>{property.rating}</Text>
            <View className=" bg-[#6CB4EE] py-1 rounded-md w-24  ">
              <Text className=" items-center text-white text-sm ml-2">
                Genius Level
              </Text>
            </View>
          </View>

          <Text className=" w-52 mt-1 text-slate-300 font-medium">
            
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>

          <Text className=" mt-1 font-medium text-sm">
            Price for 1 Night and {adults} adults
          </Text>
          <View className=" mt-1 flex-row items-center gap-2">
            <Text className=" text-red-500 text-lg line-through ">
            ₦ {property.oldPrice * adults}
            </Text>
            <Text className=" text-lg">
            ₦ {property.newPrice * adults}
            </Text>
          </View>

          <View className="mt-1">
            <Text className=" text-base text-slate-200">Deluxe Room</Text>
            <Text className=" text-base text-slate-200">
              Hotel Room : 1 bed
            </Text>
          </View>

          <View className=" bg-[#6082B6] py-1 mt-1 rounded-md w-40 px-1">
            <Text className=" items-center text-white">Limited Time deal</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;