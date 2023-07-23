import React from 'react'
import {useState}from 'react'
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Flatlist } from 'react-native'
import PopularJobCard from "../../common/cards"
import { useRouter } from 'expo-router'

import {COLORS, SIZES} from "../../../constants"

import styles from './popularjobs.style'

const Popularjobs = () => {
  return (
    <View>
      <Text>Popularjobs</Text>
    </View>
  )
}

export default Popularjobs