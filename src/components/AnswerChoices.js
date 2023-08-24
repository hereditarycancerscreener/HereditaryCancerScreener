import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

const AnswerChoices = ({ questionObj, updateQuestionOutcome }) => {
    return (
        <View style={styles.responseButtonContainer}>
            {
                questionObj.type === "single" ? (
                    questionObj.choices.map((answer, key) => {
                        return (
                            <TouchableOpacity style={styles.responseButton} key={key}>
                                <Text style={styles.responseButtonText} onPress={() => updateQuestionOutcome(answer.value)}>{answer.value}</Text>
                            </TouchableOpacity>
                        );
                    })
                ) : (
                    questionObj.choices.map((answer, key) => {
                        return (
                            <>
                                <CheckBox key={key} />
                                <Text style={styles.responseButtonText} onPress={() => updateQuestionOutcome(answer.value)}>{answer.value}</Text>
                            </>
                        );
                    })
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    responseButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 100,
    },
    responseButton: {
        margin: 40,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 0.75,
        borderRadius: 20,
        borderColor: "#400090",
    },
    responseButtonText: {
        fontSize: 25,
        color: '#400090',
        fontFamily: 'Sinhala Sangam MN',
    }
});

export default AnswerChoices;
