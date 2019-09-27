import React, { Component } from 'react';
import {
  Animated,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
  SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';
import { mansonry } from '../../utils';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import ListPost from '../ListPost/ListPost';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.tabs = [
      { key: '1', title: 'Photos', count: 687 },
      { key: '3', title: 'Followers', count: '1.3M' },
      { key: '2', title: 'Following', count: 90 },
    ]
    this.state = {
      postsMasonry: {}
    }
  }

  componentWillMount() {
    this.setState({
      postsMasonry: mansonry(this.props.posts, 'imageHeight'),
    })
  }

  renderHeader = () => {
    return (
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} onPress={() => alert('Backed!')} />
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
    return (
      <View style={styles.mansonryContainer}>
        <View>
          <ListPost
            containerStyle={styles.sceneContainer}
            posts={this.state.postsMasonry.leftCol}
          />
        </View>
        <View>
          <ListPost
            containerStyle={styles.sceneContainer}
            posts={this.state.postsMasonry.rightCol}
          />
        </View>
      </View>
    )
  }

  renderBottomTab = () => {
    return (
      <View style={styles.bottomTab}>
        <AntDesign name="inbox" size={28} />
        <AntDesign name="pluscircleo" size={28} />
        <MaterialIcons name="person-outline" size={28} />
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <StatusBar backgroundColor="blue" barStyle="dark-content" hidden />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.container, this.props.containerStyle]}>
            {this.renderHeader()}
            {this.renderProfileHeader()}
            <View style={styles.infoProfile}>
              {this.renderInfoProfile()}
            </View>
            {this.renderListPost()}
          </View>
        </ScrollView>
        {this.renderBottomTab()}
      </SafeAreaView>
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