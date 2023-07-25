import { View, Text, TouchableOpacity } from "react-native";

import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils/imageCheck";
const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={handleNavigate} 
      >
        <TouchableOpacity styles={styles.logoContainer}>
          <Image
            source={{ uri: checkImageURL( job.employer_logo) ? job.employer_logo : "https://via.placeholder.com/150" }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </TouchableOpacity>

              <View style={styles.textContainer}>
          <Text style={styles.jobName} numberOfLines={1}>
            {job.job_title}
          </Text>
          <Text style={styles.jobType}>{job.job_employment_type}</Text>
        </View>

      </TouchableOpacity>
    </View>
  );
};

export default NearbyJobCard;
