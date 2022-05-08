import React from 'react';
import { Input } from '../../styles/commonStyle';

const TextInput = ({ type = 'text', onChange, value }) => {
  return <Input type={type} onChange={onChange} value={value} />;
};

export default TextInput;
