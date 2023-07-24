import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Flatlist,
} from "react-native";
import PopularJobCard from "../../common/cards";
import { useRouter } from "expo-router";

import { COLORS, SIZES } from "../../../constants";

import styles from "./popularjobs.style";

const Popularjobs = () => {
  const router = useRouter;
  const isLoading = false;
  const error = false;
  return (
    <View styles={styles.container}>
      
        <View styles={styles.header}>
          <Text styles={styles.headerTitle}>Popular Jobs</Text>
          <TouchableOpacity >
            <Text styles={styles.headerBtn}>Show All</Text>
          </TouchableOpacity>
        </View>
        <View styles={styles.container}>
          {isLoading ? (
            <ActivityIndicator size="large" colors = {COLORS.primary}/>
          ) : error  ? (
            <Text>Something went wrong</Text>
          ):(
          <Flatlist
          data = {[1,2,3,4,5]} 
          renderItem = {({item})=>{
            <PopularJobCard
            item = {item}
            />
          }}
          keyExtractor = {item => item?.job}
          contentContainerStyle = {{columnGap: SIZES.medium}}
          horizontal
          />)}
        </View>
      
    </View>
  );
};

export default Popularjobs;
