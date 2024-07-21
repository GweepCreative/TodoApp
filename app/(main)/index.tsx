import {
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  Easing,
  FadeInDown,
  FadeInLeft,
  FadeOutDown,
  FadeOutLeft,
} from "react-native-reanimated";
import CategoriesBar from "~/components/TabBars/CategoriesBar";
import DateCard, { getWeekDates } from "~/components/DateCard";

import { cn } from "~/lib/utils";
export default function Main() {
  const weekDates = getWeekDates();
  const [selectedDate, setSelectedDate] = useState(weekDates[1].day);

  return (
    <SafeAreaView className="flex-1">
      <Animated.View className="bg-neonPink/60 flex justify-center items-center gap-4 p-4">
        <Text className="text-xl font-bold">
          {
            selectedDate == weekDates[1].day ? "Today" : selectedDate
          }
        </Text>
        <Animated.View className="h-24 w-full">
          <Animated.FlatList
            horizontal
            keyExtractor={(item) => item.day}
            className="w-full flex flex-row "
            data={weekDates}
            renderItem={({ item, index }) => (
              <Animated.View
                entering={FadeInDown.duration(500 + index * 25).easing(
                  Easing.ease
                )}
                exiting={FadeOutDown}
              >
                <DateCard
                  day={item.day}
                  date={item.date}
                  isToday={item.isToday}
                  onPress={() => setSelectedDate(item.day)}
                  selected={selectedDate == item.day}
                />
              </Animated.View>
            )}
            contentContainerStyle={{
              justifyContent: "space-between",
              flex: 1,
              alignItems: "center",
            }}
            showsHorizontalScrollIndicator={false}
          />
        </Animated.View>
      </Animated.View>
      <CategoriesBar />

      
    </SafeAreaView>
  );
}
