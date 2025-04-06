import { useEffect, useRef, useState } from "react";
import { Button, Text, View } from "react-native";
import GameEndModal from "./components/GameEndModal";
import formatTime from "./utility/formatTime";

export default function Index() {
    const [number, setNumber] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const final = useRef({ number: 0, seconds: 0 });
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    });

    const onPress = (button: "left" | "right") => {
        if (
            (number % 2 === 0 && button === "left") ||
            (number % 2 === 1 && button === "right")
        ) {
            final.current = { number, seconds };
            setSeconds(0);
            setNumber(0);
            setIsGameOver(true);
        } else {
            setNumber(number + 1);
        }
    };

    const startOver = () => {
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
            <GameEndModal
                isVisible={isGameOver}
                finalStats={final.current}
                startOver={startOver}
            />
            <Text style={{ fontSize: 24 }}>{formatTime(seconds)}</Text>
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
