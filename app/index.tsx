import { gameModes } from "@/utility/gameModes";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
    const router = useRouter();
    // todo: group the categories into Random Distribution, Divisible by, Patterns, that lead to other screens with the more in depth options
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
            }}
        >
            {Object.keys(gameModes).map((gameMode) => (
                <Pressable
                    key={gameMode}
                    onPress={() => router.navigate(`/game/${gameMode}`)}
                >
                    <Text> {gameMode} </Text>
                </Pressable>
            ))}
        </View>
    );
}
