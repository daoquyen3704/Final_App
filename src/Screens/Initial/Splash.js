import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import styles from "../../styles/Initial/Splash";

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("OnBoarding");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require("../../../assets/images/Logo.png")}
                style={styles.logo}
            />
        </View>
    );
};

export default SplashScreen;
