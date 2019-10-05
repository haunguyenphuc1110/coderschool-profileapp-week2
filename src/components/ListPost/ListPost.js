import React, { Component } from 'react';
import { Dimensions, FlatList } from 'react-native';
import ScreenIds from '../../navigation/screenIds';
import styles from './styles';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const space = 10;
const postContainerWidth = (Dimensions.get('window').width - space * 3) / 2;

const navigateToDetails = (item, navigation) => {
  navigation.navigate(ScreenIds.DETAILS, {
    item: item
  })
}

const renderEachPost = (item, navigation) => {
  return (
    <Post
      key={`post-${item.id} `}
      containerStyle={styles.postContainer}
      postWidth={postContainerWidth}
      onNavigateToDetails={() => navigateToDetails(item, navigation)}
      {...item}
    />
  )
}

const ListPost = props => {
  const { navigation, posts } = props;
  return (
    <FlatList
      scrollEnabled={false}
      data={posts}
      keyExtractor={item => item.id.toString()}
      numColumns={1}
      renderItem={({ item }) => renderEachPost(item, navigation)}
    />
  )
}

ListPost.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.number,
      imageHeight: PropTypes.number,
      imageWidth: PropTypes.number,
    })
  ).isRequired,
}

ListPost.defaultProps = {
  containerStyle: {},
}

export default ListPost;