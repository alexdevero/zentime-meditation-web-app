import React, { Component } from 'react';
import { observer } from 'mobx-react';

const Input = ({ ...props }) => {
	return <input value={props.value} className={props.className} onChange={props.onChange} name={props.name} type={props.type} placeholder={props.placeholder} />;
};

export default Input;
