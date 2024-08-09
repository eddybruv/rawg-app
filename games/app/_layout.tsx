import { Stack } from "expo-router";
import {
  PaperProvider,
  MD3DarkTheme as DefaultTheme,
} from "react-native-paper";

const theme = { ...DefaultTheme };

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
