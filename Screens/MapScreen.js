import { Pressable, Text, View } from "react-native";
import React, { useRef,useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen() {
  const route = useRoute();
  const mapView = useRef(null);
  console.log(route.params);
  const coordinates = [];
  const details = route.params.searchResults.map((item) => item.properties?.map((prop) => {
      coordinates.push({
          latitude:Number(prop.latitude),
          longitude:Number(prop.longitude)
      })
  }));
  useEffect(() => {
    mapView.current.fitToCoordinates(coordinates,{
        edgePadding:{
            top:190,
            left:190,
            bottom:190,
            right:190,
        }
    });
  },[])
  return (
     <View>
    <MapView ref={mapView} className=' w-full h-full '>
      {route.params.searchResults.map((item) =>
        item.properties.map((property) => (
          <Marker
            title={property.name}
            coordinate={{
              latitude: Number(property.latitude),
              longitude: Number(property.longitude),
            }}
          >
            <Pressable className="bg-[#003580] py-1 px-2 rounded">
              <Text className=" text-sm text-white items-center font-bold">
                ₦ {property.newPrice}
              </Text>
            </Pressable>
          </Marker>
        ))
      )}
    </MapView>
  </View>
);
}