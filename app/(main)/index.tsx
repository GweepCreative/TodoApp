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
import { NotebookPen } from "lucide-react-native";
import { Checkbox } from "~/components/ui/checkbox";
import { cn } from "~/lib/utils";
export default function Main() {
  const weekDates = getWeekDates();

  return (
    <SafeAreaView className="flex-1">
      <Animated.View className="bg-neonPink/60 flex justify-center items-center gap-4 p-4">
        <Text className="text-xl font-bold">Today</Text>
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

      <FlatList
        data={[ 3, 4, 5]}
        renderItem={({item,index}) => (
          <Animated.View entering={FadeInLeft.delay(400+index*25)} exiting={FadeOutLeft.delay(400+index*25)}>
            <ToDoCard />
          </Animated.View>
        )}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={() => (
          <Animated.View className=" my-8 w-full h-full">
            <Animated.View
              entering={FadeInDown.duration(900)}
              className="w-full justify-center items-center"
            >
              <Image source={require("assets/Icons/person.png")} />
              <Text className="font-bold text-2xl m-8">
                Nothing here yet...
              </Text>
            </Animated.View>
          </Animated.View>
        )}
      />
    </SafeAreaView>
  );
}
function ToDoCard() {
  const [checked, setChecked] = React.useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => setChecked(!checked)}>
      <View
        className={cn(
          "flex flex-row rounded-xl p-4  m-2 justify-between items-center bg-yellow-500",
          checked && "opacity-50"
        )}
      >
        <View className="flex flex-row gap-x-3 items-center justify-start">
          <NotebookPen size={24} color={"black"} />
          <Text className={cn(checked && "line-through")}>Read</Text>
        </View>
        <View className="">
          <Checkbox
            style={{ borderRadius: 999, padding: 4 }}
            checked={checked}
            onCheckedChange={setChecked}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
