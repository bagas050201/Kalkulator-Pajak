## Instalasi ##
1. clone atau download repository ini
2. pastikan terminal ada di root project (ada package.json)
3. jalankan perintah ini untuk mendownload package yg dibutuhkan : **npm install**
4. pecah terminal menjadi 2. terminal pertama jalankan run server : **react-native start**
5. terminal kedua jalankan run Android : **react-native run-android**

## debug and release

https://medium.com/geekculture/react-native-generate-apk-debug-and-release-apk-4e9981a2ea51

### debug app

1. root folder
2. react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
3. cd android
4. ./gradlew assembleDebug

cara cepat

1. buat ini di package.json
```
"scripts": {
    ...,
    "generateAPK": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && cd android && ./gradlew assembleDebug && cd .."
  },
```
2. cd root app
3. npm generateAPK or yarn generateAPK

## wajib membuat folder assets pada android/app/src/main/assets

## pastikan nama package pada saat membuat project berbeda dari yang lain (unik), akan ditolak jika nama package sama seperti pada aplikasi yg telah ada di playstore

## publish ke playstore

https://reactnative.dev/docs/signed-apk-android

## publish ke ios

https://reactnative.dev/docs/publishing-to-app-store


### Error Handling ###
  Kami sudah menjamin bahwa code ini telah bersih dan bisa digunakan. Namun ada kalanya accident terjadi diluar perkiraan. Maka kami memperkirakan ada 3 eror yang sering terjadi yaitu :
  
  **1. Code terlihat banyak yang berwarna merah di teks editor**
  
  <p align="justify">
    ini disebabkan karena eslint bersifat sensitif terhadap code yang tidak sesuai dengan ketentuannya. Namun pada dasarnya hal ini tidak berpengaruh terhadap code itu sendiri, code tetap dapat dijalankan dengan normal. Cara mengatasinya adalah tambahkan kalimat ini dibagian paling atas dari code :
  </p>
  
  ```
  /* eslint-disable prettier/prettier */ 
  ```
  
  **2. Failed to install the app. Make sure you have the android development environment set up..**
  
  <p align="justify">
  Ini merupakan permasalahan yang paling sering terjadi dalam menjalankan aplikasi React Native. Error ini disebabkan oleh instalasi environment android di komputer kurang baik / tidak sesuai / tidak terdeteksi oleh komputer. Akibat dari eror ini ialah aplikasi gagal untuk di install di Emmulator atau di Handphone sungguhan. Cara mengatasinya adalah dengan membuat sebuah file baru bernama local.properties. Berikut adalah caranya :
  </p>
  
  ```
  ./android/ (buka folder android pada project ini)   
  ```
   ```
  Buat sebuah file bernama local.properties   
  ```
  ```
  isikan file local.properties dengan code ini :
   - Pengguna Windows
       sdk.dir=C:\\Users\\UserName\\AppData\\Local\\Android\\sdk
   - Pengguna MacOS
       sdk.dir = /Users/USERNAME/Library/Android/sdk
   - Pengguna Linux 
       sdk.dir = /home/USERNAME/Android/Sdk
  ```
  ```
  jalankan ulang program sesuai dengan penjelasan dibagian instalasi. Jika masih terdapat kendala bisa melihat 
  problem ketiga dibawah ini
  ```
  
   **3. Jenis error yang berkaitan dengan folder android, node_modules dan package-lock.json**
   
   <p align="justify">
   Untuk problem nomor 3 ini kami tidak yakin akan terjadi, dikarenakan kami sudah menbuat sedemikian rupa sehingga dapat dijalankan normal disegala device. Namun problem yang terjadi di nomor 3 ini disebabkan oleh ketidaksinkronan antara ketiga folder tersebut satu sama lainnya. Bisa disebabkan karena proses instalasi (npm install) yang mengalami problem atau menghapus package tanpa disengaja. Berikut adalah pemecahan masalahnya :
  </p>
  
  1. cara pertama adalah melakukan cleaning pada folder android. Cara ini biasanya dilakukan saat yang error adalah folder android. Caranya yaitu :
   ```
   1. cd android (masuk ke folder ini lewat terminal)    
   2. gradlew clean (ketikan perintah ini setelah berhasil masuk ke folder android project ini)    
   3. cd .. (kembali ke folder root project)    
   4. (jalankan aplikasi react native dari awal seperti yang sudah dijelaskan di instalasi diatas)    
  ``` 
  2. Cara yang kedua adalah dengan menghapus folder node_modules dan package-lock.json. Cara ini digunakan jika yang error berhubungan dengan modules package. caranya adalah :
  ```
   1. Hapus folder node_modules dan folder package-lock.json   
   2. jalankan perintah ini di root project : npm install
   3. tunggu beberapa saat hingga file node_modules dan package-lock.json berhasil didownload ulang. Kemudian jalankan 
   aplikasi dari awal.
  ``` 
