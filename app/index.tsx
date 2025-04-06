import { useState } from "react";
import { Button, Text, View } from "react-native";
import GameEndModal from "./components/GameEndModal";

export default function Index() {
    const [number, setNumber] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const onPress = (button: "left" | "right") => {
        if (
            (number % 2 === 0 && button === "left") ||
            (number % 2 === 1 && button === "right")
        ) {
            setIsGameOver(true);
        } else {
            setNumber(number + 1);
        }
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {isGameOver && (
                <GameEndModal startOver={() => setIsGameOver(false)} />
            )}
            <Text> {number} </Text>
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Button onPress={() => onPress("left")} title="Skip" />
                <Button onPress={() => onPress("right")} title="Take" />
            </View>
        </View>
    );
}
