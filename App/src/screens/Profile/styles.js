import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },
    texto2: {
        color: "#434343",
        fontSize: 20,
        marginBottom: 36,
    },
    texto1: {
        color: "#434343",
        fontSize: 16,
    },
    topBar: {
        backgroundColor: "#88C9BF",
        minHeight: 24,
    },
    menuBar: {
        backgroundColor: "#CFE9E5",
        minHeight: 56,
        paddingTop: 16,
        paddingLeft: 16,
    },
    menuBarText: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 30,
    },
    content: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    textContent: {
        color: "#757575",
        fontSize: 14,
    },
    title: {
        color: "#589b9b",
        fontSize: 12,
        fontWeight: "500",
    },
    campo: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: "#88C9BF",
        minWidth: 232,
        minHeight: 40,
    },
    btnText: {
        color: "#434343",
        textAlign: "center",
        paddingTop: 13,
        fontSize: 12,
    },
    profilePhoto: {
        marginTop: 16,
        marginBottom: 16,
        width: 250,
        height: 250,
        borderRadius: 125,
    },
});

export default styles;
