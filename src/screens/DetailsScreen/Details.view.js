import React, { Component } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { IMAGES, COLORS } from '../../assets';
import styles from './Details.styles';

class Details extends Component {

  renderHeader = (item) => {
    return (
      <View style={styles.headerContainer}>
        <ImageBackground 
            source={item.image} 
            style={styles.imageBackground}>
          <View style={styles.header}>
            <AntDesign name="arrowleft" size={24} onPress={() => this.props.navigation.goBack()} />
            <AntDesign name="appstore1" size={24} onPress={() => alert('Filtered!')} />
          </View>
        </ImageBackground>
      </View>
    );
  }

  renderContent = (item) => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.placeContainer}>
          <View style={styles.placeInfo}>
            <Text style={styles.placeName}>Eiffel Tower</Text>
            <View style={styles.locationContainer}>
              <FontAwesome name="map-marker" size={14} color={COLORS.GRAY} style={styles.marker}/>
              <Text style={styles.location}>Paris, France</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Feather name="download-cloud" size={20} color={COLORS.WHITE}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.info}>Massive glaciers, staggering mountains, plains dotted with wild animals: We sure live in a big, beautiful world.</Text>
        <View style={styles.tagWrapper}>
          <Text style={styles.tag}>#photography</Text>
          <Text style={styles.tag}>#sea</Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.subIcon}>
            <AntDesign name="heart" size={20} color={COLORS.GRAY}/>
            <Ionicons name="ios-chatbubbles" size={20} color={COLORS.GRAY}/>
          </View>
          <AntDesign name="tag" size={20} color={COLORS.GRAY}/>
        </View>
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', {});
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {this.renderHeader(item)}
          {this.renderContent()}
        </ScrollView>
      </View> 
     
    );
  }
};

export default Details;
