/* eslint-disable prettier/prettier */
import React from 'react';
import {styles} from '../../assets/css';
import {View, ScrollView,Image,Text,TouchableOpacity} from 'react-native';
import imageHome from '../../assets/icon/home.png';
import imageOrder from '../../assets/icon/order.png';
import imageInbox from '../../assets/icon/inbox.png';
import imageAccount from '../../assets/icon/account.png';
import BPHTBHibah from '../../components/molecules/BPHTBHibah';

export default function BPHTB ({ navigation }) {
    return (
        <View style={styles.container}>
                {/*content*/}
                <ScrollView style={{}}>
                    <View style={{backgroundColor:'#FCDBD6',width:250,marginTop:20,borderColor:'#CC4F34',borderWidth:2,borderRadius:8,marginLeft:77}}>
                        <Text style={{fontSize:19,textAlign:'center',marginTop:14,marginBottom:14,marginLeft:1,color:'#CC4F34',fontWeight:'bold'}}>Bea Perolehan Hak atas Tanah dan Bangunan</Text>
                    </View>
                    <View style={{backgroundColor:'#60A5FA',width:170,marginTop:15,borderColor:'#60A5FA',borderWidth:2,borderRadius:5,marginLeft:114}}>
                            <TouchableOpacity style={{}} onPress={() => navigation.navigate('InfoBPHTB')}>
                                <Text style={{fontSize:16,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>
                                    Informasi BPHTB
                                </Text>
                            </TouchableOpacity>
                    </View>
                    <BPHTBHibah/>
                    
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
