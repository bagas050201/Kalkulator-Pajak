/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {styles} from '../../assets/css';
import {View, ScrollView,Image,Text,TouchableOpacity,Alert,TextInput} from 'react-native';
import imageHome from '../../assets/icon/home.png';
import imageOrder from '../../assets/icon/order.png';
import imageInbox from '../../assets/icon/inbox.png';
import imageAccount from '../../assets/icon/account.png';
import tailwind from 'tailwind-rn';

export default function Hotel ({ navigation }) {
  const [biayaHotel, setbiayaHotel] = useState("");
  const [lamaWaktu, setlamaWaktu] = useState("");
  const [jumlahKamar, setjumlahKamar] = useState("");
  const [serviceCharge, setserviceCharge] = useState("");
  const [HotelResult, setHotelResult] = useState(null);
  const [countHargaKamar, setcountHargaKamar] = useState(null)
  const [countTotalBayar, setcountTotalBayar] = useState(null)
  const [countKamarWaktu, setcountKamarWaktu] = useState(null);
  const [countsewaHotel, setcountsewaHotel] = useState(null);

  const [ShowbiayaHotel, setShowbiayaHotel] = useState("");
  const [ShowlamaWaktu, setShowlamaWaktu] = useState("");
  const [ShowjumlahKamar,setShowjumlahKamar] = useState("");
  const [ShowserviceCharge, setsShowerviceCharge] = useState("");
  
  const hitungPajakHotel = () => {
    
    if(!(biayaHotel && lamaWaktu && jumlahKamar)) {
        console.log("data belum ada")
        Alert.alert("Mohon Masukan Data Pajak Hotel Secara Lengkap");
        
    }
    else {
        
        console.log("data Ada")

        let Sbiayahotel = biayaHotel;
        let Slamawaktu = lamaWaktu;
        let sjumlahkamar = jumlahKamar;
        let sservicecharge = serviceCharge;
        let hargaKamar = Number(biayaHotel * jumlahKamar * lamaWaktu);
        let KamarWaktu = Number(lamaWaktu);
        let pajakService = Number((serviceCharge * biayaHotel * jumlahKamar)/100);
        let sewaHotel = hargaKamar + pajakService;
        let pajakHotel = (10 * hargaKamar) / 100;
        let TotalBayar1hari = Math.round((sewaHotel + pajakHotel)/lamaWaktu);
        let TotalBayar = hargaKamar + pajakService + pajakHotel;

        let hargaKamarC = hargaKamar.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        let pajakServiceC = pajakService.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        let TotalBayar1hariC = TotalBayar1hari.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        let TotalBayarC = TotalBayar.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        let biayahotelC = Sbiayahotel.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");

        
        setcountKamarWaktu(KamarWaktu)
        setcountHargaKamar(hargaKamarC)
        setHotelResult(pajakServiceC)
        setcountsewaHotel(TotalBayar1hariC)
        setcountTotalBayar(TotalBayarC)
        setShowbiayaHotel(biayahotelC);
        setShowjumlahKamar(sjumlahkamar)
        setShowlamaWaktu(Slamawaktu)
        setsShowerviceCharge(sservicecharge)

        setbiayaHotel('');
        setlamaWaktu('');
        setjumlahKamar('');
        setserviceCharge('');
    }
   
  }

  const [OmsetPerbulan2, setOmsetPerbulan2] = useState("");
  const [HotelResult2, setHotelResult2] = useState(null);
  
  const hitungPajakHotel2 = () => {
    
    if(!(OmsetPerbulan2)) {
        console.log("data belum ada")
        alert("Mohon Masukan Data Pajak Hotel Secara Lengkap");
        return false;
    }
    else {
        console.log("data Ada")
        let Omset = Number((OmsetPerbulan2 * 10)/100);
        let OmsetC = Omset.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        setHotelResult2(OmsetC)
        setOmsetPerbulan2("");
    }
   
  }

    return (
        <View style={styles.container}>
                {/*content*/}
                
                <ScrollView style={{}}>
                    
                    <View style={{backgroundColor:'#FCFAD6',width:250,marginTop:20,borderColor:'#ADCC32',borderWidth:2,borderRadius:8,marginLeft:77}}>
                        <Text style={{fontSize:22,textAlign:'center',marginTop:14,marginBottom:14,marginLeft:1,color:'#C9CC32',fontWeight:'bold'}}>Pajak Hotel</Text>
                    </View>
                    <View style={{backgroundColor:'#F59E0B',width:170,marginTop:15,borderColor:'#F59E0B',borderWidth:2,borderRadius:5,marginLeft:114}}>
                            <TouchableOpacity style={{}} onPress={() => navigation.navigate('InfoHotel')}>
                                <Text style={{fontSize:16,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>
                                    Informasi Pajak Hotel
                                </Text>
                            </TouchableOpacity>
                        </View>
                    
                    <View style={{width:360,alignSelf: 'flex-start',backgroundColor:'white',marginLeft:25,marginBottom:10,marginTop:15,borderRadius:5,borderColor:'#485c77'}}>
                        <View style={{backgroundColor:'#FBBF24',width:320,marginTop:15,borderColor:'#FBBF24',borderWidth:2,borderRadius:5,marginLeft:18}}>
                            <Text style={{fontSize:20,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>PAJAK HOTEL DENGAN PELAYANAN</Text>
                        </View>

                        

                        <Text
                            style={tailwind('mt-5 ml-6 text-gray-700 text-sm font-bold mb-2')}
                            for="username"
                            >Biaya Permalam
                        </Text>
                        <TextInput
                            style={{borderWidth:2, borderRadius:5,borderColor:'#E7E9EC',height:40,marginLeft:22,marginRight:25,marginTop:3,}}
                            id="Height"
                            type="text"
                            keyboardType="numeric"
                            placeholder="Biaya yang ditetapkan hotel untuk 1 malam"
                            value={biayaHotel}
                            onChangeText={text => setbiayaHotel(text)}
                        />

                        <Text
                            style={tailwind('mt-5 ml-6 text-gray-700 text-sm font-bold mb-2')}
                            for="username"
                            >Berapa Hari
                        </Text>
                        <TextInput
                            style={{borderWidth:2, borderRadius:5,borderColor:'#E7E9EC',height:40,marginLeft:22,marginRight:25,marginTop:3,}}
                            id="Height"
                            type="text"
                            keyboardType="numeric"
                            placeholder="Berapa Hari / Malam client akan memesan"
                            value={lamaWaktu}
                            onChangeText={text => setlamaWaktu(text)}
                        />

                        <Text
                            style={tailwind('mt-5 ml-6 text-gray-700 text-sm font-bold mb-2')}
                            for="username"
                            >Berapa Kamar
                        </Text>
                        <TextInput
                            style={{borderWidth:2, borderRadius:5,borderColor:'#E7E9EC',height:40,marginLeft:22,marginRight:25,marginTop:3,}}
                            id="Height"
                            type="text"
                            keyboardType="numeric"
                            placeholder="Berapa kamar yang dipesan oleh client"
                            value={jumlahKamar}
                            onChangeText={text => setjumlahKamar(text)}
                        />

                        <Text
                            style={tailwind('mt-5 ml-6 text-gray-700 text-sm font-bold mb-2')}
                            for="username"
                            >Service Charge %
                        </Text>
                        <TextInput
                            style={{borderWidth:2, borderRadius:5,borderColor:'#E7E9EC',height:40,marginLeft:22,marginRight:25,marginTop:3,}}
                            id="Height"
                            type="text"
                            keyboardType="numeric"
                            placeholder="Pajak terhadap pelayanan tambahan"
                            value={serviceCharge}
                            onChangeText={text => setserviceCharge(text)}
                        />


                        <View style={{backgroundColor:'#F59E0B',width:170,marginTop:15,marginBottom:10,borderColor:'#F59E0B',borderWidth:2,borderRadius:5,marginLeft:86}}>
                            <TouchableOpacity style={{}} onPress={hitungPajakHotel}>
                                <Text style={{fontSize:18,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>
                                    Hitung Pajak
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                        {HotelResult && (
                        <>
                        <View style={{marginLeft:19,marginTop:13,marginRight:22,borderRadius:5,borderColor:'#FCD34D',borderWidth:2}}>
                            <View style={{height:40,backgroundColor:'#FCD34D'}}>
                                <Text style={{fontSize:18,fontWeight:'bold',marginTop:2,marginLeft:12,marginBottom:5,color:'#FFFFFF'}}>DATA YANG ANDA INPUT</Text>
                            </View>
                            <View style={{height:150,backgroundColor:'#FEF3C7'}}>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Biaya Permalam : <Text style={tailwind("bg-yellow-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>{ShowbiayaHotel}</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Berapa Hari : <Text style={tailwind("bg-yellow-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>{ShowlamaWaktu}</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Berapa Kamar : <Text style={tailwind("bg-yellow-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>{ShowjumlahKamar}</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Service Charge : <Text style={tailwind("bg-yellow-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>{ShowserviceCharge}</Text></Text>
                            </View>
                        </View>

                        <View style={{marginLeft:19,marginTop:13,marginRight:22,borderRadius:5,borderColor:'#34D399',borderWidth:2}}>
                            <View style={{height:35,backgroundColor:'#34D399'}}>
                                <Text style={{fontSize:18,fontWeight:'bold',marginTop:2,marginLeft:12,marginBottom:5,color:'#FFFFFF'}}>Hasil</Text>
                            </View>
                            <View style={{height:205,backgroundColor:'#D1FAE5'}}>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Total Harga Kamar Hotel : <Text style={tailwind("bg-green-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{countHargaKamar},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Pajak Service : <Text style={tailwind("bg-green-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{HotelResult},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Total dibayar jika menginap 1 hari : <Text style={tailwind("bg-green-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{countsewaHotel},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Menginap Selama : <Text style={tailwind("bg-green-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>{countKamarWaktu} Hari</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Total yang harus dibayar : <Text style={tailwind("bg-green-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{countTotalBayar},00</Text></Text>
                            </View>
                        </View>
                        </>
                        )}
                        
                </View>

                    <View style={{width:360,alignSelf: 'flex-start',backgroundColor:'white',marginLeft:25,marginTop:5,marginBottom:15,borderRadius:5,borderColor:'#485c77'}}>
                        <View style={{backgroundColor:'#60A5FA',width:320,marginTop:15,borderColor:'#60A5FA',borderWidth:2,borderRadius:5,marginLeft:18}}>
                            <Text style={{fontSize:18,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>PAJAK HOTEL PERUSAHAAN</Text>
                        </View>
                        {HotelResult2 && (
                        <>
                        <View style={{marginLeft:19,marginTop:13,marginRight:22,borderRadius:5,borderColor:'#60A5FA',borderWidth:2}}>
                            <View style={{height:35,backgroundColor:'#60A5FA'}}>
                                <Text style={{fontSize:18,fontWeight:'bold',marginTop:2,marginLeft:12,marginBottom:5,color:'#FFFFFF'}}>Hasil</Text>
                            </View>
                            <View style={{height:50,backgroundColor:'#DBEAFE'}}>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Pajak yang harus dibayar : <Text style={tailwind("bg-blue-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{HotelResult2},00</Text></Text>
                            </View>
                        </View>
                        
                        
                        </>
                        )}
                        <Text
                            style={tailwind('mt-5 ml-6 text-gray-700 text-sm font-bold mb-2')}
                            for="username"
                            >Omset Hotel Perbulan
                        </Text>
                        <TextInput
                            style={{borderWidth:2, borderRadius:5,borderColor:'#E7E9EC',height:40,marginLeft:22,marginRight:25,marginTop:3,}}
                            id="Height"
                            type="text"
                            keyboardType="numeric"
                            placeholder="contoh 15000000"
                            value={OmsetPerbulan2}
                            onChangeText={text => setOmsetPerbulan2(text)}
                        />
                        <View style={{backgroundColor:'#60A5FA',width:170,marginTop:15,marginBottom:10,borderColor:'#60A5FA',borderWidth:2,borderRadius:5,marginLeft:86}}>
                            <TouchableOpacity style={{}} onPress={hitungPajakHotel2}>
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
