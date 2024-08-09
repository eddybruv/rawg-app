import { ThemedText } from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href={"/home"} />;
}
