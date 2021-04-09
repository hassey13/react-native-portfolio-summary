import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Navbar from "./components/Navbar";
import PortfolioSummary from "./components/PortfolioSummary";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

        <SafeAreaView style={styles.safeArea}>
          <Navbar />
          <View style={styles.screenContainer}>
            <PortfolioSummary />
          </View>
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fa',
  },
  screenContainer: {
    flex: 1,
    padding: 15,
  },
  safeArea: {
    flex: 1,
  },
});
