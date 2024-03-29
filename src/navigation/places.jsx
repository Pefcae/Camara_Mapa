import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { THEME } from "../constants/theme";
import { MapsScreen, NewPlaceScreen, PlaceDetailScreen, PlaceListScreen } from "../screens/index";
import CartNavigator from "./cart";
import EcoPointsNavigator from "./ecoPoints";
import EventsNavigator from "./events";
import HomeNavigator from "./home";
import ShopNavigator from "./shop";

const BottomTab = createBottomTabNavigator();

const PlacesNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false, // para ocultar la cabecera
        tabBarLabelStyle: {
          fontFamily: "Bitter-Regular",
          fontSize: 12,
        },
        tabBarActiveTintColor: THEME.colors.primary,
        tabBarInactiveTintColor: THEME.colors.gray,
        //tabBarButton
      }}>
      <BottomTab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          //PEF inicial todo menos esto
          title: "Home",

          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          //PEF inicial todo menos esto
          title: "Productos",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: "Carrito",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={22}
              color={THEME.colors.primary}
            />
          ),
          tabBarBadge: 9,
          tabBarBadgeStyle: {
            backgroundColor: THEME.colors.secondary,
            color: THEME.colors.text,
            fontFamily: "Bitter-Bold",
            fontSize: 11,
          },
        }}
      />
      <BottomTab.Screen
        name="InformationTab"
        component={EventsNavigator}
        options={{
          title: "Información",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "information-circle" : "information-circle-outline"}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="EcoTab"
        component={EcoPointsNavigator}
        options={{
          title: "EcoPuntos",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "map" : "map-outline"}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default PlacesNavigator;
