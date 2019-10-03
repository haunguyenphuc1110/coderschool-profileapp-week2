import React from 'react';
import { Image, View, Dimensions } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;

const Post = ({
  containerStyle,
  image,
  imageHeight,
  imageWidth,
  postWidth,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {image && (
        <Image
          style={[
            styles.postImage,
            {
              width: width/2 - 30,
              height: postWidth * (imageHeight / imageWidth),
            },
          ]}
          source={image}
        />
      )}
    </View>
  )
};

Post.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  image: PropTypes.number,
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
  postWidth: PropTypes.number,
}

Post.defaultProps = {
  containerStyle: {},
  image: null,
  imageHeight: null,
  imageWidth: null,
  postWidth: null,
}

export default Post;