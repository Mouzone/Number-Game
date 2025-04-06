import { useEffect, useRef, useState } from "react";
import { Button, Text, View } from "react-native";
import GameEndModal from "../components/GameEndModal";
import formatTime from "../../utility/formatTime";
import { useLocalSearchParams } from "expo-router";
import { gameModes } from "../../utility/gameModes";
import { GameMode } from "@/utility/types";

// todo: add 3 seconds count down screen
// refactor to read the {id: "..."} passed in for onPress function
export default function Game() {
    const [number, setNumber] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [milliseconds, setMilliseconds] = useState(0);
    const { gameMode } = useLocalSearchParams<{ gameMode: GameMode }>();
    const final = useRef({ number: 0, milliseconds: 0 });
    const isType = gameModes[gameMode];

    useEffect(() => {
        const startTime = Date.now();
        const interval = setInterval(() => {
            const elapsedMs = Date.now() - startTime;
            setMilliseconds(elapsedMs);
        }, 16);

        return () => clearInterval(interval);
    }, [isGameOver]);

    const onPress = (button: "left" | "right") => {
        if (
            (isType(number) && button === "left") ||
            (!isType(number) && button === "right")
        ) {
            final.current = { number, milliseconds };
            setMilliseconds(0);
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
            <Text style={{ fontSize: 24 }}>{formatTime(milliseconds)}</Text>
            <Text
                style={{ fontSize: 70, color: isType(number) ? "blue" : "red" }}
            >
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
