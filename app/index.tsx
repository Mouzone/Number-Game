import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
    const router = useRouter();
    // todo: group the categories into Random Distribution, Divisible by, Patterns
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
            }}
        >
            <Pressable onPress={() => router.navigate("/game", { id: "even" })}>
                <Text> Even </Text>
            </Pressable>
            <Pressable onPress={() => router.navigate("/game", { id: "odd" })}>
                <Text> Odd </Text>
            </Pressable>
            <Pressable
                onPress={() => router.navigate("/game", { id: "fibonacci" })}
            >
                <Text> Fibonacci </Text>
            </Pressable>
            <Pressable
                onPress={() => router.navigate("/game", { id: "prime" })}
            >
                <Text> Prime </Text>
            </Pressable>
            <Pressable
                onPress={() =>
                    router.navigate("/game", { id: "normal distribution" })
                }
            >
                <Text> Normal Distribution </Text>
            </Pressable>
        </View>
    );
}
