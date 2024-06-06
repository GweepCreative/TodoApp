import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { ThemeToggle } from "~/components/ThemeToggle";

export default function Home() {
  return (
    <SafeAreaView >
      <View className="gap-y-2 flex flex-col p-4">
        <ThemeToggle />
        <Link href={`/auth/SingUp`} asChild>
          <TouchableOpacity className="bg-black p-4">
            <Text className="text-white">Sing up</Text>
          </TouchableOpacity>
        </Link>
        <Link href={`/auth/SingIn`} asChild>
          <TouchableOpacity className="bg-black p-4">
            <Text className="text-white">Sing in</Text>
          </TouchableOpacity>
        </Link>
        <Link href={`/(main)`} asChild>
          <TouchableOpacity className="bg-black p-4">
            <Text className="text-white">Main</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}
