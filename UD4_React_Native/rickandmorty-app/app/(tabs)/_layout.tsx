import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 25,
          color: "#78350F"
        },
        headerStyle: {
          backgroundColor: "#FEF3C7",
        },
        tabBarStyle: {
          backgroundColor: "#FEF3C7",

        },
        tabBarActiveTintColor: "#78350F",
        tabBarInactiveTintColor: "#9a9ea5",

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600"
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Characters",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="episodes"
        options={{
          title: "Episodes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}