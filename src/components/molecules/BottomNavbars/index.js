/* eslint-disable prettier/prettier */
import React,{ Component } from 'react';
import {View} from 'react-native';
import {styles} from '../../../assets/css';
import imageHome from '../../../assets/icon/home.png';
import imageOrder from '../../../assets/icon/order.png';
import imageMore from '../../../assets/icon/go-more.png';
import imageInbox from '../../../assets/icon/inbox.png';
import BottomNavbar from '../../atoms/BottomNavbar';

class BottomNavbars extends Component {
    render() {
        return (
            <View style={styles.bottomNav}>
                <BottomNavbar onPress={() => this.props.navigation.navigate('Home')} img={imageHome} title="Home" />
                <BottomNavbar onPress={() => this.props.navigation.navigate('PBB')} img={imageInbox} title="PBB" />
                <BottomNavbar onPress={() => this.props.navigation.navigate('BPHTB')} img={imageInbox} title="BPHTB" />
                <BottomNavbar onPress={() => this.props.navigation.navigate('Restoran')} img={imageOrder} title="Restoran" />
                <BottomNavbar onPress={() => this.props.navigation.navigate('Hotel')} img={imageMore} title="Hotel" />
            </View>
        );
    }
}


export default BottomNavbars;
