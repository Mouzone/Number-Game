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

    const startOver = () => {
        setNumber(0);
        setIsGameOver(false);
    };
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                marginVertical: "auto",
                alignItems: "center",
            }}
        >
            <GameEndModal isVisible={isGameOver} startOver={startOver} />
            <Text style={{ fontSize: 70, color: number % 2 ? "blue" : "red" }}>
                {number}
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: 60,
                }}
            >
                <Button onPress={() => onPress("left")} title="Skip" />
                <Button onPress={() => onPress("right")} title="Take" />
            </View>
        </View>
    );
}
