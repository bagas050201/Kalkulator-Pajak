/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {styles} from '../../assets/css';
import {View, ScrollView,Image,Text,TouchableOpacity,Alert,TextInput} from 'react-native';
import imageHome from '../../assets/icon/home.png';
import imageOrder from '../../assets/icon/order.png';
import imageInbox from '../../assets/icon/inbox.png';
import imageAccount from '../../assets/icon/account.png';
import { WebView } from 'react-native-webview';
import tailwind from 'tailwind-rn';

export default function Restoran ({ navigation }) {
    const [OmsetPerbulan, setOmsetPerbulan] = useState('');
    const [RestoranResult, setRestoranResult] = useState(null);

    const hitungPajakRestoran = () => {
        if (!(OmsetPerbulan)) {
            console.log('data belum ada');
            Alert.alert('Mohon Masukan Data Pajak Restoran Secara Lengkap');
        }
        else {
            console.log('data Ada');
            let Omset = Number((OmsetPerbulan * 10) / 100);
            let OmsetC = Omset.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            setRestoranResult(OmsetC);
            setOmsetPerbulan('');
        }
    };

    return (
        <View style={styles.container}>
                {/*content*/}
                <ScrollView style={{}}>
                    
                    <View style={{backgroundColor:'#D6DCFC',width:250,marginTop:20,borderColor:'#3244CC',borderWidth:2,borderRadius:8,marginLeft:77}}>
                        <Text style={{fontSize:22,textAlign:'center',marginTop:14,marginBottom:14,marginLeft:1,color:'#3244CC',fontWeight:'bold'}}>Pajak Restoran</Text>
                    </View>
                    <WebView
                        source={{
                        uri: 'https://bprd.jakarta.go.id/halaman/pajak-restoran#:~:text=Tarif%20Pajak%20Restoran%20ditetapkan%20sebesar%2010%20%25%20(sepuluh%20persen).',
                        }}
                        style={{margin:25,height:200,}}
                    />

                    <View style={{width:360,alignSelf: 'flex-start',backgroundColor:'white',marginLeft:25,marginTop:5,borderRadius:5,borderColor:'#485c77'}}>
                        <View style={{backgroundColor:'#60A5FA',width:320,marginTop:15,borderColor:'#60A5FA',borderWidth:2,borderRadius:5,marginLeft:18}}>
                            <Text style={{fontSize:22,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>RESTORAN</Text>
                        </View>
                        {RestoranResult && (
                        <>
                        <View style={{marginLeft:19,marginTop:13,marginRight:21,borderRadius:5,borderColor:'#60A5FA',borderWidth:2}}>
                            <View style={{height:35,backgroundColor:'#60A5FA'}}>
                                <Text style={{fontSize:18,fontWeight:'bold',marginTop:2,marginLeft:12,marginBottom:5,color:'#FFFFFF'}}>HASIL</Text>
                            </View>
                            <View style={{height:45,backgroundColor:'#DBEAFE'}}>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Pajak yang harus dibayar : <Text style={tailwind("bg-blue-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{RestoranResult},00</Text></Text>
                            </View>
                        </View>
                        
                        
                        </>
                        )}
                        <Text
                            style={tailwind('mt-5 ml-6 text-gray-700 text-sm font-bold mb-2')}
                            for="username"
                            >Omset Restoran Perbulan
                        </Text>
                        <TextInput
                            style={{borderWidth:2, borderRadius:5,borderColor:'#E7E9EC',height:40,marginLeft:22,marginRight:25,marginTop:3,}}
                            id="Height"
                            type="text"
                            keyboardType="numeric"
                            placeholder="contoh 15000000"
                            value={OmsetPerbulan}
                            onChangeText={text => setOmsetPerbulan(text)}
                        />
                        <View style={{backgroundColor:'#60A5FA',width:170,marginTop:15,marginBottom:10,borderColor:'#60A5FA',borderWidth:2,borderRadius:5,marginLeft:86}}>
                            <TouchableOpacity style={{}} onPress={hitungPajakRestoran}>
                                <Text style={{fontSize:18,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>
                                    Hitung Pajak
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                </View>

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
