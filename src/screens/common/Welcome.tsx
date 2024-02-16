import { Animated, StyleSheet, View } from "react-native";
import { Colors } from "@/styles/theme/colors";
import { Button, Text, Title } from "@/components/common";
import { ArrowRight, RocketRotated } from "@/assets/icons";
import { useEffect, useRef } from "react";
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from "@/types";

const ANIMATION_DURATION = 1000;

function DescriptionBlock() {
  return (
    <View style={descriptionStyles.container}>
      <Title style={descriptionStyles.title}>
        Welcome to the NBM Forum
      </Title>
      <Text>
        Time to get all the answers you need in a forum made for designers and developers!
      </Text>
    </View>
  )
}

function ActionsBlock() {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={actionsStyles.container}>
      <Button
        onPress={() => navigate("CreateAccount")}
        icon={<ArrowRight color={Colors.clean} />}
      >
        Create an Account
      </Button>
      <Button
        outlined
        onPress={() => navigate("Login")}
        icon={<ArrowRight color={Colors.primary} />}
      >
        Sign In
      </Button>
    </View>
  )
}

export function Welcome() {
  const translateAnim = useRef(new Animated.Value(500)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const translate = () => {
    Animated.timing(translateAnim, {
      toValue: 1,
      duration: ANIMATION_DURATION,
      useNativeDriver: true,
    }).start();
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      delay: 1000,
      duration: ANIMATION_DURATION,
      useNativeDriver: true
    }).start()
  }

  useEffect(() => {
    translate();
    fadeIn();
  }, []);

  return (
    <View style={pageStyles.screen}>
      <Animated.View style={[pageStyles.container, { transform: [{ translateY: translateAnim }] }]}>
        <Animated.View style={[pageStyles.imageWrapper, { opacity: fadeAnim }]}>
          <RocketRotated />
        </Animated.View>
        <View style={pageStyles.info}>
          <DescriptionBlock />
          <ActionsBlock />
        </View>
      </Animated.View>
    </View>
  )
}

const pageStyles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  info: {
    paddingVertical: 50,
    paddingHorizontal: 16,
    backgroundColor: Colors.clean,
    width: '100%',
    gap: 30
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const descriptionStyles = StyleSheet.create({
  container: {
    gap: 20
  },
  title: {
    maxWidth: 250
  }
});

const actionsStyles = StyleSheet.create({
  container: {
    gap: 8
  }
})