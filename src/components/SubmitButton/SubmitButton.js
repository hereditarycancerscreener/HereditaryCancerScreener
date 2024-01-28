import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './Styles';

const SubmitButton = ({ questionObj }) => {
    return (
        <TouchableOpacity>
            <Text>
                Submit
            </Text>
        </TouchableOpacity>
    )
  }

  export default SubmitButton;
