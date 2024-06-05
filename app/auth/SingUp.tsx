import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { Eye, EyeOff } from "lucide-react-native";
import * as React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOutDown,
  FadeOutUp,
  LayoutAnimationConfig,
} from "react-native-reanimated";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import AppleIcon from "~/lib/icons/AppleIcon";
import FacebookIcon from "~/lib/icons/FacebookIcon";
import GoogleIcon from "~/lib/icons/GoogleIcon";

export default function SingUpPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [securedText, setSecuredText] = React.useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Stack.Screen options={{headerShown:false}} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center items-center gap-5 p-8 bg-secondary/30">
          <View className="w-full flex-1 flex flex-col justify-between items-center top-2">
            <View className="flex-1 w-full justify-center items-center">
              {/* HERO */}
              <View className="items-center justify-center mb-6">
                <Image
                  source={require("assets/Icons/idCard.png")}
                  className="w-44 h-44"
                />
                <Text className="text-4xl font-bold">Become a member!</Text>
              </View>
              {/* INPUTS */}
              <View className="w-full gap-y-4">
                <View className="w-full gap-y-2 px-2">
                  <Label nativeID="name" className="text-zinc-400">
                    Your name
                  </Label>
                  <Input
                    placeholder="Enter your name"
                    className="rounded-2xl focus:border-blue-400 focus:border-2 placeholder:text-zinc-300"
                    style={{ height: 52 }}
                    textContentType="name"
                    keyboardType="default"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    aria-labelledbyledBy="inputLabel"
                    aria-errormessage="inputError"
                  />
                </View>
                <View className="w-full gap-y-2 px-2">
                  <Label nativeID="name" className="text-zinc-400">
                    E-mail address
                  </Label>
                  <Input
                    placeholder="Enter your mail"
                    className="rounded-2xl focus:border-blue-400 focus:border-2 placeholder:text-zinc-300"
                    style={{ height: 52 }}
                    value={email}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    onChangeText={(text) => setEmail(text)}
                    aria-labelledbyledBy="inputLabel"
                    aria-errormessage="inputError"
                  />
                </View>
                <View className="w-full gap-y-2 px-2">
                  <Label nativeID="name" className="text-zinc-400">
                    Password
                  </Label>
                  <View className="items-center flex flex-row w-full gap-x-3">
                    <Input
                      placeholder="Enter your password"
                      textContentType="password"
                      keyboardType="default"
                      secureTextEntry={securedText}
                      className="flex-1 rounded-2xl focus:border-blue-400 focus:border-2 w-full placeholder:text-zinc-300"
                      style={{ height: 52 }}
                      value={pass}
                      onChangeText={(text) => setPass(text)}
                      aria-labelledbyledBy="inputLabel"
                      aria-errormessage="inputError"
                    />
                    <View className="">
                      {securedText ? (
                        <Animated.View
                          entering={FadeInDown}
                          exiting={FadeOutDown}
                        >
                          <Eye
                            onPress={() => setSecuredText(false)}
                            key={"eye"}
                            color="#d4d4d8"
                            size={32}
                          />
                        </Animated.View>
                      ) : (
                        <Animated.View
                        key={"eye-off"}
                          entering={FadeInUp}
                          exiting={FadeOutUp}
                        >
                          <EyeOff
                            onPress={() => setSecuredText(true)}
                            color="#60a5fa"
                            size={32}
                          />
                        </Animated.View>
                      )}
                    </View>
                  </View>
                </View>
              </View>
              {/* LOGIN WITH SOCIAL */}
              <View className="mt-8 gap-y-4 flex flex-col items-center justify-center">
                <Label nativeID="singupor" className="text-zinc-400">
                  OR
                </Label>
                <View className="items-center justify-center flex flex-row gap-x-6">
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    className="flex w-14 h-14 rounded-full"
                  >
                    <GoogleIcon />
                  </Button>
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    className="flex w-14 h-14 rounded-full"
                  >
                    <AppleIcon />
                  </Button>
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    className="flex w-14 h-14 rounded-full"
                  >
                    <FacebookIcon />
                  </Button>
                </View>
              </View>
            </View>
            {/* BUTTONS */}
            <View className="w-full px-2">
              <Button
                size={"lg"}
                className="flex flex-row gap-x-2"
                onPress={() => {}}
              >
                <Text className="text-white">Sign up</Text>
              </Button>
              <Button onPress={() => {}} variant={"link"}>
                <Text className="text-blue-400">
                  Already have an account? Sign in
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
