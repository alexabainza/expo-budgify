import { Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
export default function MonthYearView() {
  return (
    <View className="w-full py-5 flex-row justify-between px-5 bg-slate-900">
      <Entypo name="chevron-left" size={24} color="white" />
      <Text className="self-center text-2xl text-slate-200 font-bold">
        April 2024
      </Text>
      <Entypo name="chevron-right" size={24} color="white" />
    </View>
  );
}
