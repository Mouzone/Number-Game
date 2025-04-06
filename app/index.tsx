import { useState } from "react";
import { Button, Text, View } from "react-native";
import GameEndModal from "./components/GameEndModal";

export default function Index() {
    const [number, setNumber] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {isGameOver && <GameEndModal />}
            <Text> {number} </Text>
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Button
                    onPress={() => {
                        if (number % 2 === 0) {
                            setIsGameOver(true);
                        } else {
                            setNumber(number + 1);
                        }
                    }}
                    title="Skip"
                />
                <Button
                    onPress={() => {
                        if (number % 2 === 1) {
                            setIsGameOver(true);
                        } else {
                            setNumber(number + 1);
                        }
                    }}
                    title="Take"
                />
            </View>
        </View>
    );
}
