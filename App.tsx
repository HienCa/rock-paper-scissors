import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RockPaperScissors } from 'screens/rock-paper-scissors/RockPaperScissors';
export default function App() {
  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <StatusBar style="auto" />
      <RockPaperScissors />
      <Text className="text-2xl">Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

