import { View, Text ,FlatList, Pressable, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const SearchResults = ({data,input,setInput}) => {
  const navigation = useNavigation();
return (
  <View className=" p-3">
     <FlatList data={data} renderItem={({item}) => {
         if(item.place.toLowerCase().includes(input.toLowerCase())){
             if(input === ""){
                 return null;
             }
             return (
                 <Pressable onPress={() => {
                     setInput(item.place);
                     navigation.navigate("Home",{
                         input:item.place
                     })

                 }} className=" flex-row items-center my-2">
                     <View>
                         <Image className=" w-16 h-16 " source={{uri:item.placeImage}}/>
                     </View>
                     <View className=" ml-4">
                         <Text className=" font-medium text-sm">{item.place}</Text>
                         <Text className=" my-1 ">{item.shortDescription}</Text>
                         <Text className=" text-slate-300 text-sm">{item.properties.length} Properties</Text>
                     </View>
                 </Pressable>
             )
         }
     }}/>
  </View>
)
}

export default SearchResults
