import React, {memo, useState} from 'react';
import {Input} from 'antd';

const FancyInput = (props) => {
    const {placeholder = 'FancyInput'} = props || {}
    
    return (
        <Input
            placeholder={placeholder}
        />
    );
};

export default FancyInput;
