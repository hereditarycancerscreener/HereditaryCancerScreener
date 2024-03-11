import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import { styles } from './Styles';
import SubmitButton from '../SubmitButton/SubmitButton';


const AnswerChoices = ({ questionObj, handleAnswerSelection, handleMultiAnswerSelection, handleMultiSubmit }) => {
    const [buttonPressed, setButtonPressed] = useState(false);

    return (
        <View style={styles.responseButtonContainer}>
            {
                questionObj.isMultiSelect === false ? (
                    questionObj.choices.map((answer, key) => (
                        <TouchableOpacity style={buttonPressed ? styles.responseButtonActive : styles.responseButton} key={key} onPress={() => handleAnswerSelection(answer)}>
                            <Text style={buttonPressed ? styles.responseButtonTextActive : styles.responseButtonText}>{answer.value}</Text>
                        </TouchableOpacity>
                    ))
                ) : (
                    <View>
                        {questionObj.choices.map((answer, key) => (
                            <View key={key} style={styles.checkboxContainer}>
                                <CheckBox
                                    value={answer.selected}
                                    onValueChange={() => handleMultiAnswerSelection(answer)}
                                />
                                <Text style={styles.checkboxLabel} onPress={() => handleMultiAnswerSelection(answer)}>
                                    {answer.value}
                                </Text>
                            </View>
                        ))}
                        <SubmitButton style={styles.submitButton} onSubmit={handleMultiSubmit} />
                    </View>
                )
            }
        </View>
    )
}

export default AnswerChoices;
