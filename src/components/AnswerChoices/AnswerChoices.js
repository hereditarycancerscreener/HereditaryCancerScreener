import React, { useState } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import { styles } from './Styles';

const AnswerChoices = ({ questionObj, selectedAnswers, setSelectedAnswers, handleAnswerSelection }) => {
    // used to control css on single select
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handlePressIn = (answer) => {
        handleAnswerSelection(answer)
        setSelectedAnswer(answer)
    }

    const handleMultiSelect = (value, answer) => {
        if (value) {
            setSelectedAnswers([...selectedAnswers, answer]);
        } else {
            setSelectedAnswers(selectedAnswers.filter((selectedOption) => selectedOption !== answer));
        }
    };
    

    return (
        <View style={styles.responseButtonContainer}>
            {
                questionObj.isMultiSelect === false ? (
                    questionObj.choices.map((answer, key) => (
                        <TouchableOpacity 
                            style={selectedAnswer === answer ? styles.responseButtonActive : styles.responseButton} 
                            key={key}
                            onPressIn={() => handlePressIn(answer)}
                            activeOpacity={1}
                        >
                            <Text style={selectedAnswer === answer ? styles.responseButtonTextActive : styles.responseButtonText}>{answer.value}</Text>
                        </TouchableOpacity>
                    ))
                ) : (
                    <View>
                        {questionObj.choices.map((answer, key) => (
                            <View key={key} style={styles.checkboxContainer}>
                                <CheckBox
                                    value={answer.selected}
                                    onValueChange={(value) => handleMultiSelect(value, answer)}
                                    boxType='square'
                                    onTintColor='#858585'
                                    onCheckColor='#858585'
                                    animationDuration={0.3}
                                    onAnimationType='fade'
                                    offAnimationType='fade'
                                />
                                <Text style={styles.checkboxLabel} onPress={() => setSelectedAnswers(answer)}>
                                    {answer.value}
                                </Text>
                            </View>
                        ))}
                    </View>
                )
            }
        </View>
    )
}

export default AnswerChoices;
