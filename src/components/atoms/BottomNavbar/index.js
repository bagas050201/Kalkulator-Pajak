/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react'
import {View, Image, Text, TouchableOpacity } from 'react-native';
import {styles} from '../../../assets/css';

const BottomNavbar = (props) => {
    return (
        <View style={styles.order}>
            <TouchableOpacity onPress={props.onPress}>
                <View style={props.orderIcon}>
                    <Image source={props.img} />
                </View>
                <Text style={styles.orderText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BottomNavbar;
