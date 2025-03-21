import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Outcome as OutcomeConstant } from '../../constants/Outcomes';
import { Screen } from '../../constants/Screens';
import { styles } from './Styles';

const Outcome = ({ route, navigation }) => {
  const { outcome } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      {outcome === OutcomeConstant.DOES_NOT_MEET_CRITERIA &&
        <>
          <Text style={styles.outcomeTextTitle}>
            Ineligible
          </Text>
          <Text style={styles.outcomeText}>
            Your patient<Text style={styles.outcomeTextBolded}> does not meet </Text>NCCN criteria for genetic counseling and testing based on the information provided.
          </Text>
          <Image style={styles.image} source={require('../../images/doesNotMeetCriteria.png')}/>
        </>
      }
      {outcome === OutcomeConstant.MEETS_CRITERIA &&
        <>
          <Text style={styles.outcomeTextTitle}>
            Eligible
          </Text>
          <Text style={styles.outcomeText}>Your patient<Text style={styles.outcomeTextBolded}> meets </Text>NCCNTM criteria for hereditary cancer genetic counseling and testing based on the information provided.</Text>
          <Image style={styles.image} source={require('../../images/meetsCriteria.png')}/>
        </>
      }
      {outcome === OutcomeConstant.SPEAK_TO_GENETIC_COUNSELOR &&
        <>
          <Text style={styles.outcomeTextTitle}>
            Hmmm...
          </Text>
          <Text style={styles.outcomeText}>Please speak to a genetic counselor for more information.</Text>
          <Image style={styles.image} source={require('../../images/inconclusive.png')}/>
        </>
      }
      {outcome === OutcomeConstant.INCONCLUSIVE &&
        <>
          <Text style={styles.outcomeTextTitle}>
            Hmmm...
          </Text>
          <Text style={styles.outcomeText}>Your patient's eligibility for genetic counseling and testing based on NCCN criteria could not be determined from the information provided.</Text>
          <Image style={styles.image} source={require('../../images/inconclusive.png')}/>
        </>
      }
      <View style={styles.buttonContainer}>
        {/* change to be back button */}
        <TouchableOpacity style={styles.startOverButton}>
          <Text style={styles.startOverButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startOverButton} onPress={() => navigation.replace(Screen.LANDING_SCREEN)}>
          <Text style={styles.startOverButtonText}>Start Over</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Outcome;
