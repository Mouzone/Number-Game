import { Button, Modal, Text, View } from "react-native";

type GameEndModalProps = {
    isVisible: boolean;
    startOver: () => void;
};
export default function GameEndModal({
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
                <Button onPress={startOver} title="Retry?" />
            </View>
        </Modal>
    );
}
