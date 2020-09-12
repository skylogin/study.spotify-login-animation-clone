import { Easing } from "react-native";
import {
    TransitionSpecs, 
    HeaderStyleInterpolators,
} from "@react-navigation/stack";

const AnimationSpec = {
    animation: "timing",
    config: {
        duration: 2000,
        easing: Easing.ease,
    }
};

export const SpotifyTransition = {
    transitionSpec: {
        open: AnimationSpec,
        close: AnimationSpec,
    },
    cardStyleInterpolator: ({ current, next }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        rotateY: next
                            ? next.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "180deg"],
                            }) 
                            : current.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["180deg", "0deg"],
                            })
                    }
                ]
            }
        };
    }
};

