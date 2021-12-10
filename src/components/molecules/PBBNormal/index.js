/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {styles} from '../../../assets/css';
import {View,Text,TouchableOpacity,Alert,TextInput} from 'react-native';
import tailwind from 'tailwind-rn';

export default function PBBNormal () {
  const [luasBumi, setluasBumi] = useState("");
  const [luasBangunan, setluasBangunan] = useState("");
  const [NJOPBumi,setNJOPBumi] = useState("");
  const [NJOPBangunan,setNJOPBangunan] = useState("");
  
  const [countBumiNJOPhitung, setcountBumiNJOPhitung] = useState(null)
  const [countBangunanNJOPhitung, setcountBangunanNJOPhitung] = useState(null)
  const [hasilcountNJOPhitung, setcountNJOPhitung] = useState(null);
  const [hasilNJOPhitung, setNJOPhitung] = useState(null);
  const [Tarif, setTarif] = useState(null);
  const [PBBResult, setPBBResult] = useState(null);
  const [teksInfo, setteksInfo] = useState(null);
  const [teksnjopkurang1m, setteksnjopkurang1m] = useState(null);
  const [nol, setnol] = useState("");

  const [ShowluasTanah, setShowluasTanah] = useState("");
  const [ShowluasBangunanSSPD, setShowluasBangunanSSPD] = useState("");
  const [ShowNJOPBumi,setShowNJOPBumi] = useState("");
  const [ShowNJOPBangunan,setShowNJOPBangunan] = useState("");
  

  const hitungPBB = () => {

    if(!(luasBumi && luasBangunan && NJOPBumi && NJOPBangunan)) 
    {
      console.log("data belum ada")
      Alert.alert("Mohon Masukan Data PBB Secara Lengkap");
      return false;
    }
    else {
      let Sluastanah = luasBumi;
      let Sluasbangunan = luasBangunan;
      let snjopbumi = NJOPBumi;
      let snjopbangunan = NJOPBangunan;

      let bumi = Number(luasBumi * NJOPBumi);
      let bangunan = Number(luasBangunan * NJOPBangunan);
      let NJOPhitung = bumi + bangunan;
      let countNJOPhitung = NJOPhitung - 15000000;
      let BayarPBB;
  
      if (countNJOPhitung < 200000000){
        BayarPBB = Math.round((0.01 * countNJOPhitung) / 100);
        let selesai = BayarPBB.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        setPBBResult(selesai);
        let nilaiTarif = "Tarif Pajak Sebesar 0.01% karena NJOP Kurang dari 200jt"
        setTarif(nilaiTarif);
        
        let teksInfo = "Dikarenakan Total NJOP Ternyata Dibawah 1 Milliar, Maka Diberikan Pembebasan PBB"
        setteksInfo(teksInfo);
        let teksnjopdibawah1m = "PBB yang harus dibayar :"
        let teksnol = "Rp0,00"
        setteksnjopkurang1m(teksnjopdibawah1m);
        setnol(teksnol);
        
      }
      else if (countNJOPhitung === 200000000 || countNJOPhitung < 2000000000){
        BayarPBB = Math.round((0.1 * countNJOPhitung) / 100);
        let selesai = BayarPBB.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        setPBBResult(selesai);
        let nilaiTarif = "Tarif Pajak Sebesar 0.1% karena NJOP berada dalam range 200jt sampai dibawah 2M"
        setTarif(nilaiTarif);

        let teksInfo = "Dikarenakan Total NJOP Ternyata Dibawah 1 Milliar, Maka Diberikan Pembebasan PBB"
        setteksInfo(teksInfo);
        let teksnjopdibawah1m = "PBB yang harus dibayar :"
        let teksnol = "Rp0,00"
        setteksnjopkurang1m(teksnjopdibawah1m);
        setnol(teksnol);
      }
      else if (countNJOPhitung === 2000000000 || countNJOPhitung < 10000000000){
        BayarPBB = Math.round((0.2 * countNJOPhitung) / 100);
        let selesai = BayarPBB.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        setPBBResult(selesai);
        let nilaiTarif = "Tarif Pajak Sebesar 0.2% karena NJOP berada dalam range 2M sampai dibawah 10M"
        setTarif(nilaiTarif);

        let teksInfo = "Dikarenakan Total NJOP Ternyata Diatas 1 Milliar, Maka Dikenakan PBB"
        setteksInfo(teksInfo);
      }
      else if (countNJOPhitung === 10000000000 || countNJOPhitung > 10000000000){
        BayarPBB = Math.round((0.3 * countNJOPhitung) / 100);
        let selesai = BayarPBB.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        setPBBResult(selesai);
        let nilaiTarif = "Tarif Pajak Sebesar 0.3% karena NJOP Bernilai 10M atau Lebih"
        setTarif(nilaiTarif);

        let teksInfo = "Dikarenakan Total NJOP Ternyata Diatas 1 Milliar, Maka Dikenakan PBB"
        setteksInfo(teksInfo);
      }
  

      let bumiC = bumi.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let bangunanC = bangunan.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let NJOPhitungC = NJOPhitung.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let countNJOPhitungC = countNJOPhitung.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let njopbumiC = snjopbumi.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let njopbangunanC = snjopbangunan.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");

      setcountBumiNJOPhitung(bumiC);
      setcountBangunanNJOPhitung(bangunanC);
      setNJOPhitung(NJOPhitungC);
      setcountNJOPhitung(countNJOPhitungC);

      setShowNJOPBumi(njopbumiC);
      setShowNJOPBangunan(njopbangunanC);
      setShowluasTanah(Sluastanah);
      setShowluasBangunanSSPD(Sluasbangunan);

      setluasBumi("");
      setluasBangunan("");
      setNJOPBumi("");
      setNJOPBangunan("");
    }
    
  }

    return (
        <View style={styles.container}>
                {/*content*/}
                
                <View style={{width:360,alignSelf: 'flex-start',backgroundColor:'white',marginLeft:25,marginBottom:10,marginTop:15,borderRadius:5,borderColor:'#485c77'}}>
                        <View style={{backgroundColor:'#6EE7B7',width:320,marginTop:15,borderColor:'#6EE7B7',borderWidth:2,borderRadius:5,marginLeft:18}}>
                            <Text style={{fontSize:18,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>PBB-P2</Text>
                        </View>

                        <Text
                            style={tailwind('mt-5 ml-6 text-gray-700 text-sm font-bold mb-2')}
                            for="username"
                            >Luas Bumi
                        </Text>
                        <TextInput
                            style={{borderWidth:2, borderRadius:5,borderColor:'#E7E9EC',height:40,marginLeft:22,marginRight:25,marginTop:3,}}
                            id="Height"
                            type="text"
                            keyboardType="numeric"
                            placeholder="Luas Bumi yang akan dihitung"
                            value={luasBumi}
                            onChangeText={text => setluasBumi(text)}
                        />

                        <Text
                            style={tailwind('mt-5 ml-6 text-gray-700 text-sm font-bold mb-2')}
                            for="username"
                            >Luas Bangunan
                        </Text>
                        <TextInput
                            style={{borderWidth:2, borderRadius:5,borderColor:'#E7E9EC',height:40,marginLeft:22,marginRight:25,marginTop:3,}}
                            id="Height"
                            type="text"
                            keyboardType="numeric"
                            placeholder="Luas Bangunan yang akan dihitung"
                            value={luasBangunan}
                            onChangeText={text => setluasBangunan(text)}
                        />

                        <Text
                            style={tailwind('mt-5 ml-6 text-gray-700 text-sm font-bold mb-2')}
                            for="username"
                            >NJOP Bumi
                        </Text>
                        <TextInput
                            style={{borderWidth:2, borderRadius:5,borderColor:'#E7E9EC',height:40,marginLeft:22,marginRight:25,marginTop:3,}}
                            id="Height"
                            type="text"
                            keyboardType="numeric"
                            placeholder="contoh : 1500000"
                            value={NJOPBumi}
                            onChangeText={text => setNJOPBumi(text)}
                        />

                        <Text
                            style={tailwind('mt-5 ml-6 text-gray-700 text-sm font-bold mb-2')}
                            for="username"
                            >NJOP Bangunan
                        </Text>
                        <TextInput
                            style={{borderWidth:2, borderRadius:5,borderColor:'#E7E9EC',height:40,marginLeft:22,marginRight:25,marginTop:3,}}
                            id="Height"
                            type="text"
                            keyboardType="numeric"
                            placeholder="Nilai Jual Objek Pajak dari luas Bangunan"
                            value={NJOPBangunan}
                            onChangeText={text => setNJOPBangunan(text)}
                        />


                        <View style={{backgroundColor:'#10B981',width:170,marginTop:15,marginBottom:10,borderColor:'#10B981',borderWidth:2,borderRadius:5,marginLeft:86}}>
                            <TouchableOpacity style={{}} onPress={hitungPBB}>
                                <Text style={{fontSize:18,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>
                                    Hitung Pajak
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                        {PBBResult && (
                        <>
                        <View style={{marginLeft:19,marginTop:13,marginRight:22,borderRadius:5,borderColor:'#6EE7B7',borderWidth:2}}>
                            <View style={{height:35,backgroundColor:'#6EE7B7'}}>
                                <Text style={{fontSize:18,fontWeight:'bold',marginTop:2,marginLeft:50,marginBottom:5,color:'#FFFFFF'}}>DATA YANG ANDA INPUT</Text>
                            </View>
                            <View style={{height:155,backgroundColor:'#D1FAE5'}}>
                                
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Luas Tanah : <Text style={tailwind("bg-green-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>{ShowluasTanah}</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Luas Bangunan : <Text style={tailwind("bg-green-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>{ShowluasBangunanSSPD}</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>NJOP Bumi: <Text style={tailwind("bg-green-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>{ShowNJOPBumi}</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>NJOP Bangunan : <Text style={tailwind("bg-green-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>{ShowNJOPBangunan}</Text></Text>
                            </View>
                        </View>

                        <View style={{marginLeft:19,marginTop:13,marginRight:22,marginBottom:15,borderRadius:5,borderColor:'#818CF8',borderWidth:2}}>
                            <View style={{height:35,backgroundColor:'#818CF8'}}>
                                <Text style={{fontSize:18,fontWeight:'bold',marginTop:2,marginLeft:128,marginBottom:5,color:'#FFFFFF'}}>HASIL</Text>
                            </View>
                            <View style={{height:450,backgroundColor:'#E0E7FF'}}>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Jumlah NJOP Bumi : <Text style={tailwind("bg-purple-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{countBumiNJOPhitung},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Jumlah NJOP Bangunan : <Text style={tailwind("bg-purple-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{countBangunanNJOPhitung},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Total NJOP : <Text style={tailwind("bg-purple-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{hasilNJOPhitung},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Nilai Jual Kena Pajak : <Text style={tailwind("bg-purple-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{hasilcountNJOPhitung},00</Text></Text>
                                <View style={{backgroundColor:'#818CF8',width:260,marginTop:15,marginBottom:10,borderColor:'#818CF8',borderWidth:2,borderRadius:5,marginLeft:25}}>
                                    <Text style={{fontSize:15,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>
                                        {Tarif}
                                    </Text>
                            
                                </View>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>PBB yang Harus Dibayar : <Text style={tailwind("bg-purple-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{PBBResult},00</Text></Text>
                                <View style={{backgroundColor:'#818CF8',width:260,marginTop:15,marginBottom:10,borderColor:'#818CF8',borderWidth:2,borderRadius:5,marginLeft:25}}>
                                    <Text style={{fontSize:15,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>
                                        {teksInfo}
                                    </Text>
                            
                                </View>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>{teksnjopkurang1m}<Text style={tailwind("bg-purple-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>{nol}</Text></Text>
                                
                            </View>
                        </View>
                        </>
                        )}
                        
                </View>
                
        </View>
    );
}
