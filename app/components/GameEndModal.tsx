import { Button, Modal, Text } from "react-native";

type GameEndModalProps = {
    startOver: () => void;
};
export default function GameEndModal({ startOver }: GameEndModalProps) {
    return (
        <Modal>
            <Text> Game Over! </Text>
            <Button onPress={startOver} title="Retry?" />
        </Modal>
    );
}
