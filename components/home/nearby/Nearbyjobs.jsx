import {
  View,
  Text,

  TouchableOpacity,
  ActivityIndicator,

} from "react-native";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { useRouter } from "expo-router";

import { COLORS } from "../../../constants";

import styles from "./nearbyjobs.style";
import useFetch from '../../../utils/useFetch'

const Nearbyjobs = () => {
  const router = useRouter;
 const {data, error, isLoading} = useFetch(
  'search', {query: 'dev', num_pages: 1}
 )
  return (
    <View styles={styles.container}>
      
        <View styles={styles.header}>
          <Text styles={styles.headerTitle}>Nearby Jobs</Text>
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
            data?.map((job=>(
              <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
              />
            )))
     )}
        </View>
      
    </View>
  );
};

export default Nearbyjobs;
