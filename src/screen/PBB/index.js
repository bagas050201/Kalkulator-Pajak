/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {styles} from '../../assets/css';
import {View, ScrollView,Image,Text, TouchableOpacity} from 'react-native';
import imageHome from '../../assets/icon/home.png';
import imageOrder from '../../assets/icon/order.png';
import imageInbox from '../../assets/icon/inbox.png';
import imageAccount from '../../assets/icon/account.png';

const PBB = (props) => {
    return (
        <View style={styles.container}>
                {/*content*/}
                <ScrollView style={styles.main}>
                    <Text>PBB</Text>
                </ScrollView>
                    {/*bottom navigation*/}
                    
                    <View style={styles.bottomNav}>

                        <View style={styles.order}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                                <View style={{marginLeft:4,width: 26,height: 26,}}>
                                    <Image source={imageHome} />
                                </View>
                                <Text style={styles.orderText}>Home</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.order}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('PBB')}>
                                <View style={{marginRight:1,width: 26,height: 26,}}>
                                    <Image source={imageInbox} />
                                </View>
                                <Text style={styles.orderText}>PBB</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.order}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('BPHTB')}>
                                <View style={{marginLeft:8,width: 26,height: 26,alignItems:'center',justifyContent:'center',}}>
                                    <Image source={imageInbox} />
                                </View>
                                <Text style={{marginLeft:1,fontSize:12,marginTop:4,}}>BPHTB</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.order}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Restoran')}>
                                <View style={{marginLeft:12,width: 26,height: 25,alignItems:'center',justifyContent:'center',}}>
                                    <Image source={imageOrder} />
                                </View>
                                <Text style={{fontSize:12,marginTop:4,marginLeft:1,}}>Restoran</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.order}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Hotel')}>
                                <View style={{marginLeft:1,width: 26,height: 25,alignItems:'center',justifyContent:'center',}}>
                                    <Image source={imageAccount} />
                                </View>
                                <Text style={{fontSize:12,marginTop:4,}}>Hotel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>           
    );
};

export default PBB;
