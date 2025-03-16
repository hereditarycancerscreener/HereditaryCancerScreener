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

    // const handleMultiSelect = (answer) => {
    //     const isSelected = selectedAnswers.value?.includes(answer);
    //     setSelectedAnswers(isSelected
    //         ? selectedAnswers.filter((selectedOption) => selectedOption !== answer)
    //         : [...selectedAnswers, answer]
    //     );
    // };

    const handleMultiSelect = (answer) => {
        // const isSelected = selectedAnswers.value?.includes(answer);
        // setSelectedAnswers(isSelected
        //     ? selectedAnswers.filter((selectedOption) => selectedOption !== answer)
        //     : [...selectedAnswers, answer]
        // );
        setSelectedAnswers((prevSelectedAnswers) => {
            if (prevSelectedAnswers.includes(answer)) {
                return prevSelectedAnswers.filter((item) => item !== answer); // remove if already selected
            } else {
                return [...prevSelectedAnswers, answer]; // add if not selected
            }
        });
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
                                 <TouchableOpacity
                                    onPress={() => handleMultiSelect(answer)}
                                    style={styles.checkboxContainer}
                                 >
                                    <CheckBox
                                        disabled={false}
                                        value={selectedAnswers.includes(answer)}
                                        boxType='square'
                                        tintColors={{ true: '#858585', false: '#858585'}}
                                        onTintColor='#858585'
                                        onCheckColor='#858585'
                                        animationDuration={0.3}
                                        onAnimationType='fade'
                                        offAnimationType='fade'
                                        style={{ transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }] }}
                                    />
                                    <Text style={styles.checkboxLabel} onPress={() => handleMultiSelect(answer)}>
                                        {answer.value}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                )
            }
        </View>
    )
}

export default AnswerChoices;
