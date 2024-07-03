import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Animated, {
  SharedValue,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {BlurView} from '@react-native-community/blur';
import {DataType} from '../../data';
import {colors, fonts, metrics} from '../../../../theme';
import {hp, isIOS, moderateScale, verticalScale} from '../../../../utils';
import {CTIconImageText} from '../../../../components/common';
import images from '../../assets';

type Props = {
  newData: DataType[];
  setNewData: React.Dispatch<React.SetStateAction<DataType[]>>;
  maxVisibleItems: number;
  item: DataType;
  index: number;
  dataLength: number;
  animatedValue: SharedValue<number>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

const HomeCard = ({
  newData,
  setNewData,
  maxVisibleItems,
  item,
  index,
  dataLength,
  animatedValue,
  currentIndex,
  setCurrentIndex,
}: Props) => {
  const {width} = useWindowDimensions();
  const translateX = useSharedValue(0);
  const direction = useSharedValue(0);

  const pan = Gesture.Pan()
    .onUpdate(e => {
      const isSwipeRight = e.translationX > 0;
      direction.value = isSwipeRight ? 1 : -1;
      if (currentIndex === index) {
        translateX.value = e.translationX;
        animatedValue.value = interpolate(
          Math.abs(e.translationX),
          [0, width],
          [index, index + 1],
        );
      }
    })
    .onEnd(e => {
      if (currentIndex === index) {
        if (Math.abs(e.translationX) > 150 || Math.abs(e.velocityX) > 1000) {
          translateX.value = withTiming(width * direction.value, {}, () => {
            runOnJS(setNewData)([...newData, newData[currentIndex]]);
            runOnJS(setCurrentIndex)(currentIndex + 1);
          });
          animatedValue.value = withTiming(currentIndex + 1);
        } else {
          translateX.value = withTiming(0, {duration: 500});
          animatedValue.value = withTiming(currentIndex, {duration: 500});
        }
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    const currentItem = index === currentIndex;

    const translateY = interpolate(
      animatedValue.value,
      [index - 1, index],
      [-45, 0],
    );

    const rotateZ = interpolate(
      Math.abs(translateX.value),
      [0, width],
      [0, 40],
    );

    const opacity = interpolate(
      animatedValue.value + maxVisibleItems,
      [index, index + 1],
      [0, 1],
    );

    return {
      transform: [
        {translateY: currentItem ? 0 : translateY},
        {translateX: translateX.value},
        {
          rotateZ: currentItem ? `${direction.value * rotateZ}deg` : '0deg',
        },
      ],
      opacity: index < currentIndex + maxVisibleItems ? 1 : opacity,
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[styles.container, {zIndex: dataLength - index}, animatedStyle]}>
        <ImageBackground
          style={styles.cardImageBg}
          resizeMode="cover"
          source={item.backgroundImage}>
          <View style={{...metrics.paddings.pH15, ...metrics.paddings.pB8}}>
            <Text style={{...fonts.fontStyle.h5TextPM}}>Bank of Designers</Text>
            <View style={styles.cardImageCard}>
              <Image source={images.chip} style={styles.cardImage} />
              <Image source={images.group} style={styles.cardImage} />
            </View>
            <Text style={{...fonts.fontStyle.largeTextPB}}>{item.number}</Text>
          </View>
          <View style={styles.cardBottomView}>
            <BlurView
              blurType="dark"
              blurAmount={100}
              blurRadius={10}
              overlayColor={isIOS ? undefined : 'transparent'}
              reducedTransparencyFallbackColor={colors.white}
              style={styles.cardBottomBlurView}
            />
            <CTIconImageText
              primaryText={'Card Holder name'}
              primaryTextStyle={{
                ...fonts.fontStyle.xsmallTextPM,
                ...metrics.paddings.pB3,
              }}
              secondaryTextStyle={{...fonts.fontStyle.smallTextPB}}
              secondaryText={item.name}
              labelPlacement={'right'}
            />
            <CTIconImageText
              primaryText={'Expiry date'}
              primaryTextStyle={{
                ...fonts.fontStyle.xsmallTextPM,
                ...metrics.paddings.pB3,
              }}
              secondaryTextStyle={{...fonts.fontStyle.smallTextPB}}
              secondaryText={item.exp}
              labelPlacement={'right'}
            />
            <Image source={item.brandImage} style={styles.cardBottomImage} />
          </View>
        </ImageBackground>
      </Animated.View>
    </GestureDetector>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 360,
    minHeight: hp(20),
    ...metrics.border.bR15,
  },
  cardImageBg: {
    ...metrics.border.bR15,
    ...metrics.paddings.pT15,
    overflow: 'hidden',
  },
  cardImageCard: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    ...metrics.paddings.pB3,
  },
  cardImage: {
    height: verticalScale(54),
    width: moderateScale(54),
    resizeMode: 'contain',
  },
  cardBottomView: {
    ...metrics.paddings.p15,
    flex: 1,
    ...metrics.border.bBSR15,
    ...metrics.border.bBER15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardBottomBlurView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: verticalScale(80),
    backgroundColor: colors.black005,
  },
  cardBottomImage: {
    height: verticalScale(54),
    width: moderateScale(54),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
