/* eslint-disable prettier/prettier */
import React,{ Component } from "react";
import { View ,ScrollView, Text, Image} from 'react-native';
import {styles} from '../../../assets/css';
import Berkas from '../../atoms/Berkas';
import aktajual from '../../../assets/images/aktajual.jpg';
import imb from '../../../assets/images/imb.jpg';
import ktp from '../../../assets/images/ktp.jpg';
import lurah from '../../../assets/images/lurah.jpg';
import sengketa from '../../../assets/images/sengketa.jpg';
import sertiftanah from '../../../assets/images/sertiftanah.jpg';
import spptpbb from '../../../assets/images/spptpbb.jpg';
import surat from '../../../assets/images/surat.jpg';

class InformasiBerkas extends Component {
    render() {
        return (
            <View>
                <View style={styles.nearbyJudulWrap}>
                    <Text style={styles.nearbyJudul}>Berkas yang Harus Dibawa saat Ingin Mengurus PBB dan BPHTB (Fotocopy)</Text>
                </View>
                <ScrollView horizontal style={styles.nearbyTokoWrap}>
                    <Berkas img={ktp} title="KTP/KK/Identitas Lain" />
                    <Berkas img={surat} title="Surat Permohonan WP" />
                    <Berkas img={sertiftanah} title="Sertifikat Tanah" />
                    <Berkas img={aktajual} title="AJB / Waris / Hibah" />
                    <Berkas img={imb} title="IMB" />
                    <Berkas img={sengketa} title="Surat Tidak Sengketa" />
                    <Berkas img={spptpbb} title="SPPT-PBB Tahun Ini" />
                    <Berkas img={lurah} title="Suket Lurah" />
                </ScrollView>
                <View style={styles.imagegofoodTimelineUnderlineNearby}></View>
                
            </View>
        );
    }
}

export default InformasiBerkas;