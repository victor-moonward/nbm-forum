import { Animated, StyleSheet, View } from "react-native";
import { useEffect, useRef } from "react";
import { Colors } from "@/styles/theme/colors";
import { Rocket } from "@/assets/icons/Rocket";

const ANIMATION_DURATION = 2000;

interface SplashScreenProps {
  colorSchema?: "primary" | "secondary";
}

export function SplashScreen({ colorSchema = "primary" }: SplashScreenProps) {
  const translateAnim = useRef(new Animated.Value(500)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const translate = () => {
    Animated.loop(
      Animated.timing(translateAnim, {
        toValue: -500,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      })
    ).start();
  };

  const fadeIn = () => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: true
      })
    ).start();
  };

  useEffect(() => {
    translate();
    fadeIn();
  }, []);

  return (
    <View style={[styles.screen, styles[colorSchema]]}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: translateAnim }]
        }}
      >
        <Rocket color={styles[colorSchema].color} />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary
  },
  primary: {
    backgroundColor: Colors.primary,
    color: Colors.clean
  },
  secondary: {
    backgroundColor: Colors.clean,
    color: Colors.primary
  }
});