import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function RouteDetailLayout() {

    return (
    <Tabs
        screenOptions={{
            headerShown: false,
            headerTitleStyle: {
            fontWeight: "700",
            fontSize: 25,
            color: "#78350F"
            },
            headerStyle: {
            backgroundColor: "#FEF3C7",
            },
            tabBarActiveTintColor: "#064e3b",
            tabBarInactiveTintColor: "#a8a29e",

            tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600"
            },
        }}
    >
      <Tabs.Screen
        name="index"
        options={{
            title: "Información",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="information-circle-outline" color={color} size={size} />
            ),
        }}
      />
      <Tabs.Screen
        name="episodes"
        options={{
            headerShown: false,
            title: "Ciudad",
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="business-outline" color={color} size={size} />
            ),
        }}
      />
    </Tabs>
    );
}
