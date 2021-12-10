/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image,Text} from 'react-native';
import {styles} from '../../../assets/css';
import logo from '../../../assets/images/tax.png';

const InformasiKoneksi = (props) => {
    return (
        <View style={styles.timelinegofoodWrap}>
            <View style={styles.imageTimeline}>
              <Image source={props.img} style={styles.kfcIcon} />
              <View >
                <Image source= {logo} style={styles.logoWhiteIcon} />
              </View>
              <View style={styles.ImageDarken}></View>
              
              {/*text inline image */}
              <View style={styles.textInline}>
                <View>
                  <Text style={styles.gofoodTimelineJudul}>{props.title}</Text>
                  <Text style={styles.gofoodTimelineNarasi}>{props.content}</Text>
                </View>
                
              </View>
            </View>
            <View style={styles.imagegofoodTimelineUnderline2}></View>
          </View>
    );
};
export default InformasiKoneksi;