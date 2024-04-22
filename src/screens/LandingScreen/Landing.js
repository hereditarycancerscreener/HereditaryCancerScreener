import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons/faCircleUser'
import { Screen } from '../../constants/Screens';
import { styles } from './Styles';

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeBackground}>
      <TouchableOpacity style={styles.accountButton}>
        <FontAwesomeIcon icon={faCircleUser} color={"#A9A9A9"} size={35}/>
      </TouchableOpacity>
      <Text style={styles.landingTitle}>Welcome to the HCApp!</Text>
      <Image
        style={styles.logo}
        source={require('../../images/logo.png')}
      />
      <Text style={styles.landingText}>
        This app is intended to help healthcare practitioners identify their otherwise unrecognized hereditary cancer gene mutation carriers by guiding practitioners through hereditary cancer eligibility guidelines as defined by various organizations, including National Comprehensive Cancer Network. It is recommended that risk assessment for hereditary cancer be done by age 25 and updated regularly.{'\n\n'}
      </Text>
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.replace(Screen.DISCLAIMER_SCREEN)}>
        <Text style={styles.startButtonText}>Start Evaluation</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Landing;
