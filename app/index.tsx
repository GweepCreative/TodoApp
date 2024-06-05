import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Home() {
  return (
    <SafeAreaView>
      <Link href={`/auth/SingUp`} asChild>
        <TouchableOpacity className="bg-black p-4">
          <Text className="text-white">Sing up</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
}
