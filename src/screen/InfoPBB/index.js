/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {styles} from '../../assets/css';
import {View, ScrollView,Image,Text,TouchableOpacity,Alert,TextInput} from 'react-native';
import imageHome from '../../assets/icon/home.png';
import imageOrder from '../../assets/icon/order.png';
import imageInbox from '../../assets/icon/inbox.png';
import imageAccount from '../../assets/icon/account.png';
import { WebView } from 'react-native-webview';

export default function InfoPBB ({ navigation }) {
    
    return (
        <View style={styles.container}>
                {/*content*/}
                <ScrollView style={{}}>
                    <View style={{backgroundColor:'#D8FCD6',width:250,marginTop:20,borderColor:'#34CC67',borderWidth:2,borderRadius:8,marginLeft:77}}>
                        <Text style={{fontSize:22,textAlign:'center',marginTop:14,marginBottom:14,marginLeft:1,color:'#34CC67',fontWeight:'bold'}}>Apa itu PBB-P2 ?</Text>
                    </View>
                    <WebView
                        source={{
                        uri: 'https://bprd.jakarta.go.id/halaman/pajak-bumi-dan-bangunan-perdes',
                        }}
                        style={{margin:25,height:525,}}
                    />

                    
                </ScrollView>
                    {/*bottom navigation*/}
                    
                    <View style={styles.bottomNav}>

                        <View style={styles.order}>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <View style={{marginLeft:4,width: 26,height: 26,}}>
                                    <Image source={imageHome} />
                                </View>
                                <Text style={styles.orderText}>Home</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.order}>
                            <TouchableOpacity onPress={() => navigation.navigate('PBB')}>
                                <View style={{marginRight:2,width: 26,height: 26,}}>
                                    <Image source={imageInbox} />
                                </View>
                                <Text style={styles.orderText}>PBB</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.order}>
                            <TouchableOpacity onPress={() => navigation.navigate('BPHTB')}>
                                <View style={{marginLeft:8,width: 26,height: 26,alignItems:'center',justifyContent:'center',}}>
                                    <Image source={imageInbox} />
                                </View>
                                <Text style={{marginLeft:1,fontSize:12,marginTop:4,}}>BPHTB</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.order}>
                            <TouchableOpacity onPress={() => navigation.navigate('Restoran')}>
                                <View style={{marginLeft:12,width: 26,height: 25,alignItems:'center',justifyContent:'center',}}>
                                    <Image source={imageOrder} />
                                </View>
                                <Text style={{fontSize:12,marginTop:4,marginLeft:1,}}>Restoran</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.order}>
                            <TouchableOpacity onPress={() => navigation.navigate('Hotel')}>
                                <View style={{marginLeft:1,width: 26,height: 25,alignItems:'center',justifyContent:'center',}}>
                                    <Image source={imageAccount} />
                                </View>
                                <Text style={{fontSize:12,marginTop:4,}}>Hotel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
        </View>
    );
}
