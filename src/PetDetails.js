import React from 'react';
import PetDetailList from './PetDetailList';

const PetDetails = (props) =>
    <PetDetailList pet={props.pet} />
    ;

PetDetailList.defaultProps = {
    pet: {},
};

export default PetDetails;
