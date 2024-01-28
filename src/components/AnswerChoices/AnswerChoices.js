import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import { styles } from './Styles';

const AnswerChoices = ({ questionObj, handleAnswerSelection }) => {
    return (
        <View style={styles.responseButtonContainer}>
            {
                questionObj.isMultiSelect === false ? (
                    questionObj.choices.map((answer, key) => {
                        return (
                            <TouchableOpacity style={styles.responseButton} key={key}>
                                <Text style={styles.responseButtonText} onPress={() => handleAnswerSelection(answer)}>{answer.value}</Text>
                            </TouchableOpacity>
                        );
                    })
                ) : (
                    questionObj.choices.map((answer, key) => {
                        return (
                            <>
                                <CheckBox key={key} />
                                <Text style={styles.responseButtonText} onPress={() => handleAnswerSelection(answer)}>{answer.value}</Text>
                            </>
                        );
                    })
                )
            }
        </View>
    )
}

export default AnswerChoices;
