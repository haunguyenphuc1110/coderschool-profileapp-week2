import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../../assets';

const TabBarIcon = (props) => {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? COLORS.TAB_ICON_SELECTED : COLORS.TAB_ICON_DEFAULT}
    />
  );
}

export default TabBarIcon;
