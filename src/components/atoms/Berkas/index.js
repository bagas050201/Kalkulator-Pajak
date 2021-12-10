/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react'
import {View, Image, Text} from 'react-native';
import {styles} from '../../../assets/css';

const Berkas = (props) => {
    return (
        <View style={styles.nearbyTokoContent}>
            <View style={styles.nearbyImageWrap}>
                <Image source={props.img} style={styles.tokoImage} />
            </View>
            <Text style={styles.nearbyTokoName}>{props.title}</Text>
        </View>
    )
}

export default Berkas;