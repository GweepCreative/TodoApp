import {
  View,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { NotebookPen } from "lucide-react-native";
import { Checkbox } from "~/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";
import Animated, {
  Easing,
  FadeInDown,
  FadeInLeft,
  FadeOutDown,
  FadeInUp,
  FadeOutUp,
  FadeOutLeft,
} from "react-native-reanimated";

const TodoTabs = () => {
  return ["All", "Daily", "Weekly", "Monthly"];
};
const allTasks = [
  {
    task: "Read",
    checked: false,
    category: "Daily",
  },
  {
    task: "Write",
    checked: false,
    category: "Daily",
  },
  {
    task: "Code",
    checked: false,
    category: "Weekly",
  },
];
export default function CategoriesBar() {
  const [value, setValue] = React.useState("All");
  const [tasks, setTasks] = React.useState(allTasks);
  // Tasks

  React.useEffect(() => {
    if (value === "All") {
      setTasks(allTasks);
    } else {
      setTasks(allTasks.filter((task) => task.category === value));
    }
  }, [value]);

  return (
    <View className="w-full flex justify-center items-center p-4">
      <Tabs
        value={value}
        onValueChange={setValue}
        className="w-full flex flex-col justify-center items-center gap-x-4"
      >
        {/* <Animated.View className="w-full flex flex-col justify-center items-center gap-x-4"> */}
        <TabsList className="flex-row w-full">
          {TodoTabs().map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab}
              className="flex-1 items-center justify-center w-full"
            >
              <Animated.View
                entering={FadeInUp.duration(600)}
                exiting={FadeOutUp}
                className={cn(
                  "w-full border border-[#D9D9D9] py-1 px-6 rounded-xl items-center justify-center ",
                  value === tab && "bg-darkpink"
                )}
              >
                <Text
                  className={cn(
                    value === tab ? "text-black/80" : "text-black/30",
                    "w-full justify-center items-center h-full "
                  )}
                >
                  {tab}
                </Text>
              </Animated.View>
            </TabsTrigger>
          ))}
        </TabsList>
        <View className="w-full">
          <FlatList
            data={tasks}
            renderItem={({ item, index }) => (
              <Animated.View
                entering={FadeInLeft.delay(50 + index * 25)}
                exiting={FadeOutLeft.delay(50 + index * 25)}
              >
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
        </View>
      </Tabs>
    </View>
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
