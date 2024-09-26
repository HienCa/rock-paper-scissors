import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export const Actions = ({ canPlay, play }: { canPlay: boolean; play: (choice: 1 | 2 | 3) => void }) => {
  return (
    <View style={styles.actions}>
      <TouchableOpacity
        disabled={!canPlay}
        style={styles.actionButton}
        onPress={() => play(1)}
      >
        <FontAwesome5 name={"hand-rock"} size={32} color="#6a5300" />
      </TouchableOpacity>

      <TouchableOpacity
        disabled={!canPlay}
        style={styles.actionButton}
        onPress={() => play(2)}
      >
        <FontAwesome5 name="hand-paper" size={32} color="#6a5300" />
      </TouchableOpacity>

      <TouchableOpacity
        disabled={!canPlay}
        style={styles.actionButton}
        onPress={() => play(3)}
      >
        <FontAwesome5
          name="hand-scissors"
          size={32}
          color="#6a5300"
          style={{ transform: [{ rotate: "67deg" }] }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  actionButton: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9d835",
    borderRadius: 32,
  },
});