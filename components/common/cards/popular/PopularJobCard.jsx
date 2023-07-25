import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils/imageCheck";
const PopularJobCard = ({ selectedJob, item, handleCardPress }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container(selectedJob, item)}
        onPress={() => handleCardPress(item)}
      >
        <TouchableOpacity styles={styles.logoContainer(selectedJob, item)}>
          <Image
            source={{ uri: checkImageURL( item.employer_logo) ? item.employer_logo : "https://via.placeholder.com/150" }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </TouchableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>
          {item.employer_name}
        </Text>
        <View style={styles.infoContainer}>
          <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
            {item.job_title}
          </Text>
          <Text style={styles.location}>{item.job_location}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PopularJobCard;
