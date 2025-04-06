export default function formatTime(milliseconds: number) {
    // Calculate time components
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const ms = Math.floor(milliseconds % 1000);

    // Format each component to 2 digits (3 for milliseconds)
    return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}:${ms.toString().padStart(3, "0")}`;
}
