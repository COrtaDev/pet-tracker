import React from 'react';
import OwnersList from './OwnersList';

const OwnerLink = (props) =>
    <>
        <a href={props.href}>{props.firstName} {props.lastName}</a>
    </>
    ;

export default OwnerLink;
