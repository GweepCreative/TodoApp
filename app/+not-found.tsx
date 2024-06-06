import { Link, Stack } from "expo-router";
import { CircleSlash } from "lucide-react-native";
import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="justify-center items-center flex-1">
        <View className="p-4 bg-zinc-100 rounded-full justify-center items-center aspect-square w-24">
          <CircleSlash size={36} color={"#000"} />
        </View>
        <View className="flex flex-col">
          <View className="flex flex-col">
            <Text className="text-center text-2xl font-bold mt-4">
              Page not found
            </Text>
            <Text className="text-center text-md mt-4">
              The page you are looking for does not exist.
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
