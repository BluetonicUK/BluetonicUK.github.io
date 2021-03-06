/* eslint-disable react/jsx-indent */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { loadableP5 as P5Wrapper } from './loadable';



export default function drawing ({p5Name}) {
    return(
        <P5Wrapper sketch={p5Name} />
    )
}



