/* eslint-disable prettier/prettier */
import React from 'react';
import {styles} from '../../assets/css';
import {View, ScrollView,Image,Text,TouchableOpacity } from 'react-native';
import imageHome from '../../assets/icon/home.png';
import imageOrder from '../../assets/icon/order.png';
import imageAccount from '../../assets/icon/account.png';
import imageInbox from '../../assets/icon/inbox.png';
import InformasiPajak from '../../components/molecules/InformasiPajak';
import TipsPajak from '../../components/molecules/TipsPajak';
import tips from '../../assets/images/tips.png';
import icon3 from '../../assets/images/icon2.png';
import diskon from '../../assets/images/diskon.png';
import InformasiBerkas from '../../components/molecules/InformasiBerkas';
import InformasiKoneksi from '../../components/molecules/InformasiKoneksi';
import bannerpajak2 from '../../assets/images/bannerpajak2.png'

const Home = (props) => {
    return (
        <View style={styles.container}>
                {/*content*/}
                <ScrollView style={styles.main}>
                    <Text style={{fontSize:22,textAlign:'center',marginTop:14,marginBottom:3,color:'#000000',fontWeight:'bold'}}>Kalkulator Pajak</Text>
                    <View style={{backgroundColor:'#ADB9F7',width:380,marginTop:15,marginBottom:10,borderColor:'#ADB9F7',borderWidth:2,borderRadius:5,marginLeft:15}}>
                        <Text style={{fontSize:18,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>Adalah Aplikasi Kalkulator yang dapat Menghitung PBB, BPHTB, Pajak Hotel, dan Pajak Restoran serta memberikan informasi tambahan mengenai pajak tersebut</Text>
                    </View>
                    <InformasiPajak/>
                    <TipsPajak img={tips} title="Tips !" title2="Buatlah Perencanaan Pembayaran Pajak Tiap Tahunnya" content="Karena jika pajak tidak dibayarkan maka akan ada denda tiap bulannya sebesar 2% dan maksimal 48%. Nanti anda sendiri loh yang akan merasakan kesulitannya dikemudian hari." />
                    <InformasiKoneksi img={bannerpajak2} title="Nyalakan Koneksi Internet" content="Untuk mengaktifkan fitur informasi" />
                    <TipsPajak img={diskon} title="Tips !" title2="Diskon Pajak itu Ternyata ada Loh !" content="Berdasarkan Peraturan Gubernur DKI Jakarta Nomor 60 Tahun 2021, Daerah DKI Jakarta pernah memberikan keringanan pokok pajak dan penghapusan sanksi administratif bagi para WP yang ingin membayar pajak pada tahun 2021. Cek informasi pajak di daerahmu, bisa saja akan ada di daerahmu juga" />
                    <InformasiBerkas/>
                    <TipsPajak img={icon3} title="Tips !" title2="Pahami Manfaat Pajak Bagi dirimu dan sekitarmu" content="Suatu daerah terlihat bagus dan sejahtera bukan karena masyarakatnya yang memiliki pendapatan diatas rata-rata. Namun ada andil pajak yang dibayarkan oleh masyarakatnya. Pajak langsung didistribusikan ke daerahnya tersebut. Contoh pada bidang fasilitas umum, pajak dapat membantu pembangunan sekolah, rumah sakit, maupun jalan raya" />
                    <Text style={{fontSize:18,textAlign:'center',marginTop:14,marginBottom:3,color:'#000000',fontWeight:'bold'}}>Terimakasih</Text>
                    <Text style={{fontSize:15,textAlign:'center',marginTop:2,marginBottom:1,color:'#000000'}}>Semoga Aplikasi Ini Bermanfaat untuk Kalian</Text>
                    <Text style={{fontSize:13,textAlign:'center',marginTop:2,marginBottom:8,color:'#A9A9A9'}}>Jika Aplikasi ini error, silahkan restart kembali aplikasinya</Text>
                    
                    <View style={{backgroundColor:'#ADB9F7',width:380,marginTop:15,marginBottom:15,borderColor:'#ADB9F7',borderWidth:2,borderRadius:5,marginLeft:15}}>
                        <Text style={{fontSize:18,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>Contact Developers : bagaspradana0201@gmail.com</Text>
                    </View>
                    
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
                                <View style={{marginRight:2,width: 26,height: 26,}}>
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

export default Home;
