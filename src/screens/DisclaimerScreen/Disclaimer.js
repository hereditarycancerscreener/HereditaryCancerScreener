import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Screen } from '../../constants/Screens';
import { styles } from './Styles';

const Disclaimer = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.safeBackground}>
      <Text style={styles.disclaimerTitle}>Disclaimer</Text>
      <Text style={styles.disclaimerText}>
        This app is intended to help healthcare practitioners identify their otherwise unrecognized hereditary cancer gene mutation carriers by guiding practitioners through hereditary cancer eligibility guidelines as defined by various organizations, including National Comprehensive Cancer Network. It is recommended that risk assessment for hereditary cancer be done by age 25 and updated regularly.{'\n\n'}
        Most cancers are sporadic and not related to a hereditary cancer genetic mutation; however, individuals who carry these genetic mutations can have a markedly higher risk of various cancers that can begin at younger ages, and management should be based on the specific genetic mutation. Data shows that appropriate identification of hereditary cancer carriers allows for tailored management for supplemental cancer screening, chemoprevention, or procedures to decrease the risk of cancer. This management has shown to be lifesaving.{'\n\n'}
        In addition, guidelines that exist have been known to miss a number of individuals who carry hereditary cancers. If hereditary cancer testing is done and negative for a pathogenic mutation, cancer screening should always continue, based on age-related guidelines, as well as any increased screening based on personal or family history of cancer. In addition, as guidelines change, additional update testing may be necessary.{'\n\n'}
        This app is by no means exclusive and should not be a substitute for clinical judgment. There are other online calculators available to determine patient eligibility for hereditary cancer, as well as the PDF guidelines supplied by NCCN. If any questions or concerns arise regarding appropriate eligibility, discussion with a genetics specialist or genetic counselor is always advised.{'\n\n'}
      </Text>
      <TouchableOpacity style={styles.agreeButton} onPress={() => navigation.replace(Screen.SURVEY_SCREEN)}>
        <Text style={styles.agreeButtonText}>I agree</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Disclaimer;
