import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Screens/Initial/Splash";
import OnBoardingScreen from "../Screens/Initial/OnBoarding";
import AuthScreen from "../Screens/Initial/Auth";
import LoginScreen from "../Screens/Auth/Login";
import RegisterScreen from "../Screens/Auth/SignUp";
import ForgotPasswordScreen from "../Screens/Auth/ForgotPassword";
import VerificationCodeScreen from "../Screens/Auth/Verification";
import NewPasswordScreen from "../Screens/Auth/NewPassword";
import TabNavigator from "./TabNavigator";
import ProductDetailScreen from "../Screens/Item/ProductDetail";
import ListReview from "../Screens/Item/ListReview";
import AddReview from "../Screens/Item/AddReview";
import CartScreen from "../Screens/Cart/Cart";
import AddressScreen from "../Screens/Item/Address";
import PaymentScreen from "../Screens/Item/Payment";
import AddNewCard from "../Screens/Item/AddNewCard";
import CheckOutSuccess from "../Screens/Item/CheckOutSuccess";
import HomeScreen from "../Screens/Homepage";
import AllProduct from "../Screens/Item/AllProduct";
import Profile from "../Screens/User/Profile";
import DrawerNavigator from './DrawerNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer'; // ✅ Bắt buộc nếu đã gọi const Drawer = createDrawerNavigator();
import ProductCategory from "../Screens/Item/ProductCategory";
import WishListScreen from "../Screens/Cart/WishList";
import CardScreen from "../Screens/User/Card";


const RootNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ headerShown: false }}
        >
            {/* Initial Screens */}
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
            {/* Auth Screens */}
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="VerificationCode" component={VerificationCodeScreen} />
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
            <Stack.Screen name="Main" component={DrawerNavigator} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ListReview" component={ListReview} />
            <Stack.Screen name="AddReview" component={AddReview} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Address" component={AddressScreen} />
            <Stack.Screen name="Payment" component={PaymentScreen} />
            <Stack.Screen name="AddNewCard" component={AddNewCard} />
            <Stack.Screen name="AllProduct" component={AllProduct} />
            <Stack.Screen name="CheckOutSuccess" component={CheckOutSuccess} />
            <Stack.Screen name="Homepage" component={HomeScreen} />
            <Stack.Screen name="ProductCategory" component={ProductCategory} />
            <Stack.Screen name="WishList" component={WishListScreen} />
            <Stack.Screen name="Card" component={CardScreen} />



        </Stack.Navigator>
    );
};

export default RootNavigation;