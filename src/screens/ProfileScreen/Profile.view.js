import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import styles from './Profile.styles';
import ListPost from '../../components/ListPost/ListPost';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.tabs = [
      { key: '1', title: 'Photos', count: 687 },
      { key: '3', title: 'Followers', count: '1.3M' },
      { key: '2', title: 'Following', count: 90 }
    ];
  }

  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Image 
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
          }}
          style={styles.imageHeader}
          resizeMode="contain"/>
        <AntDesign name="appstore1" size={24} onPress={() => alert('Filtered!')} />
      </View>
    );
  };

  renderProfileHeader = () => {
    const { avatar, name, bio } = this.props;
    return (
      <View style={styles.profileContainer}>
        <View>
          <Image
            source={avatar}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.bio}>{bio}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.follow} onPress={() => alert('Followed!')}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sent} onPress={() => alert('Sent!')}>
              <MaterialIcons name="send" size={14} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  renderInfoProfile = () => {
    return this.tabs.map((tab) =>
      (
        <View key={tab.key} style={styles.content}>
          <Text style={styles.count}>{tab.count}</Text>
          <Text style={styles.title}>{tab.title}</Text>
        </View>
      )
    );
  };

  renderListPost = () => {
    const { posts, navigation } = this.props;
    const centerImgData = Math.floor(posts.length / 2);
    return (
      <View style={styles.mansonryContainer}>
        <View>
          <ListPost
            navigation={navigation}
            containerStyle={styles.sceneContainer}
            posts={posts.slice(0, centerImgData)}
          />
        </View>
        <View>
          <ListPost
            navigation={navigation}
            containerStyle={styles.sceneContainer}
            posts={posts.slice(centerImgData)}
          />
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.main}>
        {this.renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.container, this.props.containerStyle]}>
            {this.renderProfileHeader()}
            <View style={styles.infoProfile}>
              {this.renderInfoProfile()}
            </View>
            {this.renderListPost()}
          </View>
        </ScrollView>
      </View>
    )
  }
};

Profile.propTypes = {
  avatar: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.number,
      imageHeight: PropTypes.number,
      imageWidth: PropTypes.number
    })
  ).isRequired,
};

Profile.defaultProps = {
  containerStyle: {},
  tabContainerStyle: {},
};

export default Profile;