import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {moderateScale, verticalScale} from '../../../../utils';
import {colors, fonts, metrics} from '../../../../theme';
import images from '../../assets';
import {CTIconImageText} from '../../../../components/common';

const HomeHeader = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingLeft: moderateScale(Math.max(Number(insets?.left), 15)),
        paddingRight: moderateScale(Math.max(Number(insets?.right), 15)),
        ...metrics.margins.mB20,
      }}>
      <View style={styles.homeHeaderUserView}>
        <Image style={styles.homeHeaderUserImage} source={images.userIcon} />
        <CTIconImageText
          iconTextStyle={styles.homeHeaderUserIcon}
          labelPlacement="right"
          iconType="Entypo"
          iconName="light-bulb"
          iconColor={colors.secondary}
          primaryTextStyle={{...fonts.fontStyle.smallTextPM}}
          primaryText={'Tips'}
        />
      </View>
      <Text style={{...fonts.fontStyle.largeTextPB, ...metrics.margins.mB8}}>
        All your credit cardss
      </Text>
      <Text style={{...fonts.fontStyle.tinyTextPM}}>
        Find all your credit cards here
      </Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  homeHeaderUserView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...metrics.margins.mB8,
  },
  homeHeaderUserImage: {
    height: verticalScale(51),
    width: moderateScale(51),
    resizeMode: 'contain',
  },
  homeHeaderUserIcon: {
    ...metrics.paddings.pH5,
    ...metrics.paddings.pV8,
    backgroundColor: colors.greyB,
    ...metrics.border.bR5,
  },
});
