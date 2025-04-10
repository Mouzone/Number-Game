import { Button, Modal, Text, View } from "react-native";
import formatTime from "../../utility/formatTime";

type GameEndModalProps = {
    finalStats: { number: number; milliseconds: number };
    isVisible: boolean;
    startOver: () => void;
};
export default function GameEndModal({
    finalStats,
    isVisible,
    startOver,
}: GameEndModalProps) {
    return (
        <Modal visible={isVisible} transparent={false}>
            <View
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text> Game Over! </Text>
                {/* todo: make it stop rendering and shifting all over the place */}
                <Text>
                    {formatTime(finalStats.milliseconds)} {finalStats.number}
                </Text>
                <Button onPress={startOver} title="Retry?" />
            </View>
        </Modal>
    );
}
