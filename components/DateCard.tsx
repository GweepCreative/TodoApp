import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { cn } from "~/lib/utils";

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const getWeekDates = () => {
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

export default function DateCard({
  day,
  date,
  isToday,
  onPress = () => {},
  selected = false,
}: {
  day: string;
  date: number;
  isToday: boolean;
  onPress?: () => void;
  selected?: boolean;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${
        selected ? "bg-darkpink" : "bg-pink/60"
      } justify-center items-center p-2 gap-2 rounded-xl m-1`}
    >
      <Text
        className={cn("text-black text-sm text-[10px]", isToday && "font-bold")}
      >
        {day.slice(0, 3)}
      </Text>
      <View
        className={`flex rounded-full bg-white p-2 h-8 w-8 justify-center items-center ${
          isToday ? "bg-white" : ""
        }`}
      >
        <Text className={cn("text-black text-[10px]", isToday && "font-bold")}>
          {date}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
