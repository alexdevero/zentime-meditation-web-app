import React, { Component } from 'react';
import { observer } from 'mobx-react';

const Input = ({ ...props }) => {
  return <input {...props} />;
};

export default Input;
