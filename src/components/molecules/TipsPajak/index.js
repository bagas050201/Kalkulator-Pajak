/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react'
import {View, Image,Text} from 'react-native';
import {styles} from '../../../assets/css';

const TipsPajak = (props) => {
    return (
        <View style={styles.timelinegofoodWrap}>
            
            <Text style={styles.accountFacebookText}>{props.title}</Text>
            <View style={styles.facebookWrap}>
              <View>
                <Image source={props.img} style={styles.TipsIcon} />
              </View>
              <View style={styles.facebookTextContentWrap}>
                <Text style={styles.facebookTextContentJudul}>{props.title2}</Text>
                <Text style={styles.facebookTextContentDeskripsi}>{props.content}</Text>
              </View>
            </View>
            <View style={styles.imagegofoodTimelineUnderline}></View>
          </View>
    )
}

export default TipsPajak;