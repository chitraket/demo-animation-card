import React, {memo} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../theme';
import {moderateScale, verticalScale} from '../../utils';
import {CTSafeAreaInsets} from '../../types';

type TStyleProps = {
  insets?: CTSafeAreaInsets;
};
type TProps = {
  viewContainer?: object;
  children: JSX.Element;
  translucent?: any;
  statusBarColor?: string;
  barStyle?: StatusBarStyle;
  statusBarHidden?: boolean;
  isLoading?: boolean;
};
const CTWrapperContainer = ({
  viewContainer,
  children,
  translucent = false,
  statusBarColor = colors.primary,
  barStyle,
  statusBarHidden = false,
  isLoading = false,
}: TProps) => {
  const insets = useSafeAreaInsets();
  return (
    <React.Fragment>
      <StatusBar
        translucent={translucent}
        backgroundColor={statusBarColor}
        barStyle={barStyle || "light-content"}
        hidden={statusBarHidden}
      />
      <View style={{...styles({insets}).paddingStyle, ...viewContainer}}>
        {children}
      </View>
      {isLoading ? <ActivityIndicator color={colors.primary} /> : null}
    </React.Fragment>
  );
};

export default memo(CTWrapperContainer);

const styles = (props: TStyleProps) =>
  StyleSheet.create({
    paddingStyle: {
      paddingLeft: moderateScale(
        Math.max(Number(props && props?.insets?.left), 15),
      ),
      paddingRight: moderateScale(
        Math.max(Number(props && props?.insets?.right), 15),
      ),
      paddingTop: verticalScale(
        Math.max(Number(props && props?.insets?.top), 15),
      ),
      paddingBottom: verticalScale(
        Math.max(Number(props && props?.insets?.bottom), 15),
      ),
      backgroundColor: colors.black,
      flex: 1,
    },
  });
