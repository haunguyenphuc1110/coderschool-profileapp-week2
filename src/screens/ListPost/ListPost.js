import React, { Component } from 'react';
import { Dimensions, FlatList } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const space = 10;
const postContainerWidth = (Dimensions.get('window').width - space * 3) / 2;

const renderEachPost = (item) => {
  return (
    <Post
      key={`post-${item.id} `}
      containerStyle={styles.postContainer}
      postWidth={postContainerWidth}
      {...item}
    />
  )
}

const ListPost = props => {
  return (
    <FlatList
      scrollEnabled={false}
      data={props.posts}
      keyExtractor={item => item.id.toString()}
      numColumns={1}
      renderItem={({ item }) => renderEachPost(item)}
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