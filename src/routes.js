import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SelectProvider from "./pages/New/SelectProvider";
import SelectDate from "./pages/New/SelectDate";
import Confirm from "./pages/New/Confirm";

import Icon from "react-native-vector-icons/MaterialIcons";

export default (isSigned = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                    SignIn,
                    SignUp,
                }),
                App: createBottomTabNavigator(
                    {
                        Dashboard,
                        New: {
                            //navega de uma tela pra outra mantendo as páginas na memoria (sendo possível voltar a pagina anterior)
                            screen: createStackNavigator(
                                {
                                    SelectProvider,
                                    SelectDate,
                                    Confirm,
                                },
                                {
                                    defaultNavigationOptions: {
                                        headerTransparent: true,
                                        headerTintColor: "#fff",
                                        headerLeftContainerStyle: {
                                            marginLeft: 20,
                                        },
                                    },
                                }
                            ),
                            navigationOptions: {
                                tabBarVisible: false,
                                tabBarLabel: "Agendar",
                                tabBarIcon: (
                                    <Icon
                                        name='add-circle-outline'
                                        size={20}
                                        color='rgba(255,255,255, 0.6)'
                                    />
                                ),
                            },
                        },
                        Profile,
                    },
                    {
                        resetOnBlur: true, //toda vez q sai da rota ela reseta, reseta o stack;
                        tabBarOptions: {
                            keyboardHidesTabBar: true,
                            activeTintColor: "#fff",
                            inactiveTintColor: "rgba(255,255,255, 0.6)",
                            style: {
                                backgroundColor: "#027d23",
                            },
                        },
                    }
                ),
            },
            {
                initialRouteName: isSigned ? "App" : "Sign",
            }
        )
    );
