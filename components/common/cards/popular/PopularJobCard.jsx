import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ selectedJob, item, handleCarePress }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container(selectedJob, item)}
        onPress={() => handleCarePress(item)}
      >
      
        <TouchableOpacity styles={styles.logoContainer(selectedJob, item)}>
          <Image 
          source={{uri: item.employer_logo}}
          resizeMode="contain"
          style = {styles.logoImage}
          />
        </TouchableOpacity>
        <Text  style = {styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PopularJobCard;
