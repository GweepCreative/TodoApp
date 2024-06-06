import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { cn } from "~/lib/utils";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getWeekDates = () => {
  const today = new Date();
  today.setDate(today.getDate() - 1); // Bugünden bir gün çıkararak dün yap

  const weekDates = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const day = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    weekDates.push({ day, date: dayOfMonth, isToday: i === 1 });
  }

  return weekDates;
};

export default function Main() {
  const weekDates = getWeekDates();

  return (
    <SafeAreaView className="flex-1">
      <View className="bg-neonPink/60 flex justify-center items-center gap-4 p-4">
        <Text className="text-xl font-bold">Today</Text>
        <View className="h-24 w-full">
          <FlatList
            horizontal
            keyExtractor={(item) => item.day}
            className="w-full flex flex-row "
            data={weekDates}
            renderItem={({ item }) => (
              <DateCard
                day={item.day}
                date={item.date}
                isToday={item.isToday}
              />
            )}
            contentContainerStyle={{
              justifyContent: "space-between",
              flex: 1,
              alignItems: "center",
            }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

function DateCard({ day, date, isToday , onPress=()=>{} }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${
        isToday ? "bg-darkpink" : "bg-pink/60"
      } justify-center items-center p-2 gap-2 rounded-xl m-1`}
    >
      <Text
        className={cn(
          "text-black text-sm text-[10px]",
          isToday && "font-bold"
        )}
      >
        {day}
      </Text>
      <View
        className={`flex rounded-full bg-white p-2 h-8 w-8 justify-center items-center ${
          isToday ? "bg-white" : ""
        }`}
      >
        <Text
          className={cn("text-black text-[10px]", isToday && "font-bold")}
        >
          {date}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
