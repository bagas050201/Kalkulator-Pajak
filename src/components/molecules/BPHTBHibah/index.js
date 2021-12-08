/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {styles} from '../../../assets/css';
import {View, ScrollView,Image,Text,TouchableOpacity,Alert,TextInput} from 'react-native';
import tailwind from 'tailwind-rn';

export default function BPHTBHibah () {
  const [luasTanah, setluasTanah] = useState("");
  const [luasBangunanSSPD, setluasBangunanSSPD] = useState("");
  const [luasBangunanLapangan, setluasBangunanLapangan] = useState("");
  const [NJOPBumi,setNJOPBumi] = useState("");
  const [NJOPBangunan,setNJOPBangunan] = useState("");
  const [NJOPTotalSebelum,setNJOPTotalSebelum] = useState("");
  const [NJOPTotalSesudah,setNJOPTotalSesudah] = useState("");
  const [Transaksi,setTransaksi] = useState("");
  const [Tarif, setTarif] = useState(null);
  
  const [countTanah, setcountTanah] = useState(null);
  const [countBangunanSSPD, setcountBangunanSSPD] = useState(null)
  const [countBangunanLapangan, setcountBangunanLapangan] = useState(null);
  const [countnpopkpSebelum, setcountnpopkpSebelum] = useState(null);
  const [countnpopkpSesudah, setcountnpopkpSesudah] = useState(null);
  const [countBPHTBSebelum, setBPHTBSebelum] = useState(null);
  const [countBPHTBSesudah, setBPHTBSesudah] = useState(null);
  const [countTerhutangSebelum, setTerhutangSebelum] = useState(null);
  const [countTerhutangSesudah, setTerhutangSesudah] = useState(null);
  
  const [BPHTBResult, setBPHTBResult] = useState(null);


  const [ShowluasTanah, setShowluasTanah] = useState("");
  const [ShowluasBangunanSSPD, setShowluasBangunanSSPD] = useState("");
  const [ShowluasBangunanLapangan, setShowluasBangunanLapangan] = useState("");
  const [ShowNJOPBumi,setShowNJOPBumi] = useState("");
  const [ShowNJOPBangunan,setShowNJOPBangunan] = useState("");
  const [ShowTransaksi,setShowTransaksi] = useState("");

  const hitungBPHTB = () => {

    if(!(luasTanah && luasBangunanSSPD && luasBangunanLapangan && NJOPBumi && NJOPBangunan && Transaksi)) 
    {
      console.log("data belum ada")
      Alert.alert("Mohon Masukan Data BPHTB Hibah Secara Lengkap");
      return false;
    }
    else {
      let Sluastanah = luasTanah;
      let Sluasbangunan = luasBangunanSSPD;
      let sluasbangunanlapangan = luasBangunanLapangan;
      let snjopbumi = NJOPBumi;
      let snjopbangunan = NJOPBangunan;
      let stransaksi = Transaksi;

      let Tanah = Number(luasTanah * NJOPBumi);
      let bangunanSebelum = Number(luasBangunanSSPD * NJOPBangunan);
      let bangunanSesudah = Number(luasBangunanLapangan * NJOPBangunan);
      let NPOPSebelum = Tanah + bangunanSebelum;
      let NPOPSesudah = Tanah + bangunanSesudah;
      let npoptkp = 80000000;
      let npopkpSebelum;
      let npopkpSesudah;
      let bphtbAsli;

      if (Transaksi > NPOPSebelum){
        npopkpSebelum = Transaksi - npoptkp;
      }
      else if (Transaksi < NPOPSebelum){
        npopkpSebelum = NPOPSebelum - npoptkp;
        
      }
      else {
        console.log("eror sebelum")
      }

      if (Transaksi > NPOPSesudah){
        npopkpSesudah = Transaksi - npoptkp;
      }
      else if (Transaksi < NPOPSesudah){
        npopkpSesudah = NPOPSesudah - npoptkp;
        
      }
      else {
        console.log("eror sesudah")
      }

      let terhutangSebelum = Math.round(npopkpSebelum * 0.05);
      let terhutangSesudah = Math.round(npopkpSesudah * 0.05);
      let bphtbSebelum = Math.round(terhutangSebelum / 2);
      let bphtbSesudah = Math.round(terhutangSesudah / 2);

      if (bphtbSesudah > bphtbSebelum) {
        bphtbAsli = bphtbSesudah - bphtbSebelum;
        let fixbphtbAsli = bphtbAsli.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        setBPHTBResult(fixbphtbAsli);
        let nilaiTarif = "KURANG BAYAR"
        setTarif(nilaiTarif);
      }
      else if (bphtbSesudah < bphtbSebelum) {
        bphtbAsli = bphtbSebelum - bphtbSesudah;
        let fixbphtbAsli = bphtbAsli.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        setBPHTBResult(fixbphtbAsli);
        let nilaiTarif = "LEBIH BAYAR"
        setTarif(nilaiTarif);
      }
      else if (bphtbSesudah === bphtbSebelum) {
        bphtbAsli = bphtbSesudah - bphtbSebelum;
        let fixbphtbAsli = bphtbAsli.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        setBPHTBResult(fixbphtbAsli);
        let nilaiTarif = "NIHIL"
        setTarif(nilaiTarif);
      }
      else {
        console.log ("eror pada bagian pengurangan bphtb sebelum dan sesudah atau sebaliknya")
      }
  
      let TanahC = Tanah.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let bangunanSSPDC = bangunanSebelum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let bangunanLapanganC = bangunanSesudah.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let npopkpSebelumC = npopkpSebelum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let npopkpSesudahC = npopkpSesudah.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let bphtbSebelumC = bphtbSebelum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let bphtbSesudahC = bphtbSesudah.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let terhutangSebelumC = terhutangSebelum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let terhutangSesudahC = terhutangSesudah.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let NJOPTotalSebelumC = NPOPSebelum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let NJOPTotalSesudahC = NPOPSesudah.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");

      let njopbumiC = snjopbumi.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let njopbangunanC = snjopbangunan.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      let transaksiC = stransaksi.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");

      setcountTanah(TanahC);
      setcountBangunanSSPD(bangunanSSPDC);
      setcountBangunanLapangan(bangunanLapanganC);
      setNJOPTotalSebelum(NJOPTotalSebelumC);
      setNJOPTotalSesudah(NJOPTotalSesudahC);
      setcountnpopkpSebelum(npopkpSebelumC);
      setcountnpopkpSesudah(npopkpSesudahC);
      setBPHTBSebelum(bphtbSebelumC);
      setBPHTBSesudah(bphtbSesudahC);
      setTerhutangSebelum(terhutangSebelumC);
      setTerhutangSesudah(terhutangSesudahC);

      setShowNJOPBumi(njopbumiC);
      setShowNJOPBangunan(njopbangunanC);
      setShowluasTanah(Sluastanah);
      setShowluasBangunanSSPD(Sluasbangunan);
      setShowluasBangunanLapangan(sluasbangunanlapangan);
      setShowTransaksi(transaksiC);

      setluasTanah("");
      setluasBangunanSSPD("");
      setluasBangunanLapangan("");
      setNJOPBumi("");
      setNJOPBangunan("");
      setTransaksi("");
    }
    
  }

    return (
        <View style={styles.container}>
                {/*content*/}
                
                <View style={{width:360,alignSelf: 'flex-start',backgroundColor:'white',marginLeft:25,marginBottom:10,marginTop:15,borderRadius:5,borderColor:'#485c77'}}>
                        <View style={{backgroundColor:'#93C5FD',width:320,marginTop:15,borderColor:'#93C5FD',borderWidth:2,borderRadius:5,marginLeft:18}}>
                            <Text style={{fontSize:20,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>BPHTB HIBAH</Text>
                        </View>

                        <Text
                            style={tailwind('mt-5 ml-6 text-gray-700 text-sm font-bold mb-2')}
                            for="username"
                            >Luas Tanah Sertifikat
                        </Text>
                        <TextInput
                            style={{borderWidth:2, borderRadius:5,borderColor:'#E7E9EC',height:40,marginLeft:22,marginRight:25,marginTop:3,}}
                            id="Height"
                            type="text"
                            keyboardType="numeric"
                            placeholder="Luas Tanah pada Sertifikat"
                            value={luasTanah}
                            onChangeText={text => setluasTanah(text)}
                        />

                        <Text
                            style={tailwind('mt-5 ml-6 text-gray-700 text-sm font-bold mb-2')}
                            for="username"
                            >Luas Bangunan pada SSPD
                        </Text>
                        <TextInput
                            style={{borderWidth:2, borderRadius:5,borderColor:'#E7E9EC',height:40,marginLeft:22,marginRight:25,marginTop:3,}}
                            id="Height"
                            type="text"
                            keyboardType="numeric"
                            placeholder="Luas Bangunan yg tertera pada SSPD-BPHTB"
                            value={luasBangunanSSPD}
                            onChangeText={text => setluasBangunanSSPD(text)}
                        />

                        <Text
                            style={tailwind('mt-5 ml-6 text-gray-700 text-sm font-bold mb-2')}
                            for="username"
                            >Luas Bangunan Lapangan
                        </Text>
                        <TextInput
                            style={{borderWidth:2, borderRadius:5,borderColor:'#E7E9EC',height:40,marginLeft:22,marginRight:25,marginTop:3,}}
                            id="Height"
                            type="text"
                            keyboardType="numeric"
                            placeholder="Luas Bangunan pada Lapangan"
                            value={luasBangunanLapangan}
                            onChangeText={text => setluasBangunanLapangan(text)}
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

                        <Text
                            style={tailwind('mt-5 ml-6 text-gray-700 text-sm font-bold mb-2')}
                            for="username"
                            >Harga Transaksi
                        </Text>
                        <TextInput
                            style={{borderWidth:2, borderRadius:5,borderColor:'#E7E9EC',height:40,marginLeft:22,marginRight:25,marginTop:3,}}
                            id="Height"
                            type="text"
                            keyboardType="numeric"
                            placeholder="Jumlah Transaksi NOP"
                            value={Transaksi}
                            onChangeText={text => setTransaksi(text)}
                        />


                        <View style={{backgroundColor:'#3B82F6',width:170,marginTop:15,marginBottom:10,borderColor:'#3B82F6',borderWidth:2,borderRadius:5,marginLeft:86}}>
                            <TouchableOpacity style={{}} onPress={hitungBPHTB}>
                                <Text style={{fontSize:18,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>
                                    Hitung Pajak
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                        {BPHTBResult && (
                        <>
                        <View style={{marginLeft:19,marginTop:13,marginRight:21,borderRadius:5,borderColor:'#93C5FD',borderWidth:2}}>
                            <View style={{height:35,backgroundColor:'#93C5FD'}}>
                                <Text style={{fontSize:18,fontWeight:'bold',marginTop:2,marginLeft:50,marginBottom:5,color:'#FFFFFF'}}>DATA YANG ANDA INPUT</Text>
                            </View>
                            <View style={{height:205,backgroundColor:'#DBEAFE'}}>
                                
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Luas Tanah : <Text style={tailwind("bg-blue-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>{ShowluasTanah}</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Luas Bangunan SSPD : <Text style={tailwind("bg-blue-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>{ShowluasBangunanSSPD}</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Luas Bangunan Lapangan : <Text style={tailwind("bg-blue-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>{ShowluasBangunanLapangan}</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>NJOP Bumi: <Text style={tailwind("bg-blue-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{ShowNJOPBumi},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>NJOP Bangunan : <Text style={tailwind("bg-blue-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{ShowNJOPBangunan},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Harga Transaksi : <Text style={tailwind("bg-blue-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{ShowTransaksi},00</Text></Text>
                            </View>
                        </View>

                        <View style={{marginLeft:19,marginTop:13,marginRight:21,marginBottom:15,borderRadius:5,borderColor:'#F87171',borderWidth:2}}>
                            <View style={{height:35,backgroundColor:'#F87171'}}>
                                <Text style={{fontSize:18,fontWeight:'bold',marginTop:2,marginLeft:128,marginBottom:5,color:'#FFFFFF'}}>HASIL</Text>
                            </View>
                            <View style={{height:655,backgroundColor:'#FEE2E2'}}>
                                <View style={{backgroundColor:'#F87171',width:280,marginTop:15,borderColor:'#F87171',borderWidth:2,borderRadius:5,marginLeft:18}}>
                                    <Text style={{fontSize:17,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>DATA SSPD-BPHTB</Text>
                                </View>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>NJOP Bumi : <Text style={tailwind("bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{countTanah},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>NJOP Bangunan SSPD : <Text style={tailwind("bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{countBangunanSSPD},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Nilai NJOP Total SSPD : <Text style={tailwind("bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{NJOPTotalSebelum},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Nilai NPOPKP SSPD : <Text style={tailwind("bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{countnpopkpSebelum},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>BPHTB Terhutang 5% : <Text style={tailwind("bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{countTerhutangSebelum},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>BPHTB SSPD : <Text style={tailwind("bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{countBPHTBSebelum},00</Text></Text>
                                
                                <View style={{backgroundColor:'#F87171',width:280,marginTop:15,borderColor:'#F87171',borderWidth:2,borderRadius:5,marginLeft:18}}>
                                    <Text style={{fontSize:17,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>SESUDAH PENGECEKAN</Text>
                                </View>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>NJOP Bumi : <Text style={tailwind("bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{countTanah},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>NJOP Bangunan Lapangan : <Text style={tailwind("bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{countBangunanLapangan},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Nilai NJOP Total Lapangan : <Text style={tailwind("bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{NJOPTotalSesudah},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>Nilai NPOPKP Lapangan : <Text style={tailwind("bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{countnpopkpSesudah},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>BPHTB Terhutang 5% : <Text style={tailwind("bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{countTerhutangSesudah},00</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>BPHTB Lapangan : <Text style={tailwind("bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{countBPHTBSesudah},00</Text></Text>
                                
                                <View style={{backgroundColor:'#60A5FA',width:280,marginTop:15,borderColor:'#60A5FA',borderWidth:2,borderRadius:5,marginLeft:18}}>
                                    <Text style={{fontSize:17,textAlign:'center',marginTop:5,marginBottom:8,color:'white',fontWeight:'bold'}}>HASIL PERHITUNGAN KURANG/LEBIH BAYAR BPHTB</Text>
                                </View>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:105,marginTop:12,}}><Text style={tailwind("bg-purple-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>{Tarif}</Text></Text>
                                <Text style={{fontWeight:'bold',fontSize:14,marginLeft:12,marginTop:12,}}>BPHTB yang harus dibayar : <Text style={tailwind("bg-red-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 ")}>Rp{BPHTBResult},00</Text></Text>
                                
                            </View>
                        </View>
                        </>
                        )}
                        
                </View>
                
        </View>
    );
}
