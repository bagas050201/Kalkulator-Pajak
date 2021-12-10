/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image,Text} from 'react-native';
import {styles} from '../../../assets/css';
import bannerPajak from '../../../assets/images/bannerPajak.jpg';

const InformasiPajak = () => {
    return (
        <View style={styles.timelineWrap}>
            <View style={styles.imageTimeline}>
              <Image source={bannerPajak} style={styles.bannerPajakIcon} />
              
            </View>
            <View style={styles.timelineTextWrap}>
              <Text style={styles.timelineJudul}>Pengertian Pajak</Text>
              <Text style={styles.timelineNarasi}>Pajak adalah pungutan yang wajib diberikan pada negara oleh orang pribadi maupun badan /perusahaan berdasarkan undang-undang yang akan digunakan untuk kepentingan negara dan kesejahteraan masyarakat umum.</Text>
              
            </View>
          </View>
          
    );
};

export default InformasiPajak;