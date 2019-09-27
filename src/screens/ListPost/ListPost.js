import React, { Component } from 'react';
import { Dimensions, FlatList } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const space = 10;
const postContainerWidth = (Dimensions.get('window').width - space * 3) / 2;

class ListPost extends Component {
  static propTypes = {
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.number,
        imageHeight: PropTypes.number,
        imageWidth: PropTypes.number,
      })
    ).isRequired,
  }

  static defaultProps = {
    containerStyle: {},
  }

  render() {
    return (
      <FlatList
        scrollEnabled={false}
        data={this.props.posts}
        keyExtractor={item => item.id.toString()}
        numColumns={1}
        renderItem={({item}) => {
          return (
            <Post
              key={`post-${item.id} `}
              containerStyle={styles.postContainer}
              postWidth={postContainerWidth}
              {...item}
            />
          )
        }}
      />
    )
  }
}

export default ListPost;