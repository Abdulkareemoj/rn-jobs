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
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { useRouter } from "expo-router";

import { COLORS, SIZES } from "../../../constants";

import styles from "./popularjobs.style";
import useFetch from '../../../utils/useFetch'

const Popularjobs = () => {
  const router = useRouter;
 const {data, error, isLoading} = useFetch(
  'search', {query: 'dev', num_pages: 1}
 )
 const [selectedJob, setSelectedJob] = useState()
 const handleCardPress =(item)=> {

 }
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
          data = {data} 
          renderItem = {({item})=>{
            <PopularJobCard
            item = {item}
            selectedJob={selectedJob}
            handleCardPress={handleCardPress}
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
