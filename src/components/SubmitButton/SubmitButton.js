import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './Styles';

const SubmitButton = ({ onSubmit }) => {
    return (
        <TouchableOpacity style={styles.submitButton} onPress={() => onSubmit()}>
            <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
    );
}

  export default SubmitButton;
