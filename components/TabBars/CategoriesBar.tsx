import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
export default function CategoriesBar() {
  return (
    <View className="w-full flex justify-center items-center p-4">
      <Animated.View className="w-full flex flex-row justify-center items-center gap-x-4">
        <TouchableOpacity>
          <Animated.View
            entering={FadeInUp.duration(300)}
            exiting={FadeOutUp}
            className="bg-darkpink border border-[#D9D9D9] py-1 px-6 rounded-xl"
          >
            <Text className=" text-[#1E1C1C]/80 font-bold">All</Text>
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Animated.View
            entering={FadeInUp.duration(600)}
            exiting={FadeOutUp}
            className="border border-[#D9D9D9] py-1 px-6 rounded-xl"
          >
            <Text className=" text-black/30">Daily</Text>
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Animated.View
            entering={FadeInUp.duration(900)}
            exiting={FadeOutUp}
            className="border border-[#D9D9D9] py-1 px-6 rounded-xl"
          >
            <Text className=" text-black/30">Study</Text>
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
