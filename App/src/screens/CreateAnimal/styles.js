import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 12,
    },
    button: {
        width: "50%",
        height: 40,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#434343",
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 12,
    },
    btnImage: {
        width: 128,
        height: 128,
        backgroundColor: "#e6e7e7",
        borderRadius: 4,
        marginBottom: 32,
        alignSelf: "center",
        justifyContent: "center",
    },
    btnImageText: {
        color: "#757575",
        fontSize: 14,
        textAlign: "center",
    },
});

export default styles;
