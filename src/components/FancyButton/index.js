import React, {memo, useState} from 'react';
import {Button} from 'antd';

const FancyButton = (props) => {
    const {text = 'FancyButton'} = props || {}
    
    return (
        <Button type='primary'>
            {text}
        </Button>
    );
};

export default FancyButton;
