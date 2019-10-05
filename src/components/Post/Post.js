import React from 'react';
import { Image, View, Dimensions, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;

const Post = ({
  containerStyle,
  image,
  imageHeight,
  imageWidth,
  postWidth,
  onNavigateToDetails
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={onNavigateToDetails}>
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
      </TouchableOpacity>
    
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