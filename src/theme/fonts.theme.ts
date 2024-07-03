import {textScale} from '../utils';
import colors from './colors.theme';

const fontSize = {
  h1: textScale(48),
  h2: textScale(32),
  xl: textScale(30),
  large: textScale(22),
  h3: textScale(20),
  h4: textScale(18),
  h5: textScale(16),
  small: textScale(14),
  tiny: textScale(12),
  xsmall: textScale(10),
};

const lineHeight = {
  lh4: {lineHeight: textScale(4)},
  lh8: {lineHeight: textScale(8)},
  lh12: {lineHeight: textScale(12)},
  lh14: {lineHeight: textScale(14)},
  lh16: {lineHeight: textScale(16)},
  lh18: {lineHeight: textScale(18)},
  lh20: {lineHeight: textScale(20)},
  lh38: {lineHeight: textScale(38)},
  lh40: {lineHeight: textScale(40)},
};

const fontFamily = {
  poppinsSemibold: 'Poppins-SemiBold',
  poppinsMedium: 'Poppins-Medium',
  poppinsRegular: 'Poppins-Regular',
  poppinsBold: 'Poppins-Bold',
};

const fontStyle = {
  h1Text: {
    fontSize: fontSize.h1,
    color: colors.white,
  },
  h2Text: {
    fontSize: fontSize.h2,
    color: colors.white,
  },
  xlTextPSB: {
    fontSize: fontSize.xl,
    color: colors.white,
    fontFamily: fontFamily.poppinsSemibold,
  },
  largeTextPB: {
    fontSize: fontSize.large,
    color: colors.white,
    fontFamily: fontFamily.poppinsBold,
  },
  largeTextPM: {
    fontSize: fontSize.large,
    color: colors.white,
    fontFamily: fontFamily.poppinsMedium,
  },
  h3TextPSB: {
    fontSize: fontSize.h3,
    color: colors.white,
    fontFamily: fontFamily.poppinsSemibold,
  },
  h4Text: {
    fontSize: fontSize.h4,
    color: colors.white,
  },
  h4TextPB: {
    fontSize: fontSize.h4,
    color: colors.white,
    fontFamily: fontFamily.poppinsBold,
  },
  h4TextPSB: {
    fontSize: fontSize.h4,
    color: colors.white,
    fontFamily: fontFamily.poppinsSemibold,
  },
  h5Text: {
    fontSize: fontSize.h5,
    color: colors.white,
  },
  h5TextPB: {
    fontSize: fontSize.h5,
    color: colors.white,
    fontFamily: fontFamily.poppinsBold,
  },
  h5TextPSB: {
    fontSize: fontSize.h5,
    color: colors.white,
    fontFamily: fontFamily.poppinsSemibold,
  },
  h5TextPM: {
    fontSize: fontSize.h5,
    color: colors.white,
    fontFamily: fontFamily.poppinsMedium,
  },
  smallTextPM: {
    fontSize: fontSize.small,
    color: colors.white,
    fontFamily: fontFamily.poppinsMedium,
  },
  smallTextPSB: {
    fontSize: fontSize.small,
    color: colors.white,
    fontFamily: fontFamily.poppinsSemibold,
  },
  smallTextPB: {
    fontSize: fontSize.small,
    color: colors.white,
    fontFamily: fontFamily.poppinsBold,
  },
  tinyTextPB: {
    fontSize: fontSize.tiny,
    color: colors.white,
    fontFamily: fontFamily.poppinsBold,
  },
  tinyTextPM: {
    fontSize: fontSize.tiny,
    color: colors.white,
    fontFamily: fontFamily.poppinsMedium,
  },
  tinyTextPSB: {
    fontSize: fontSize.tiny,
    color: colors.white,
    fontFamily: fontFamily.poppinsSemibold,
  },
  tinyText: {
    fontSize: fontSize.tiny,
    color: colors.white,
  },
  xsmallTextPSB: {
    fontSize: fontSize.xsmall,
    color: colors.white,
    fontFamily: fontFamily.poppinsSemibold,
  },
  xsmallTextPB: {
    fontSize: fontSize.xsmall,
    color: colors.white,
    fontFamily: fontFamily.poppinsBold,
  },
  xsmallTextPM: {
    fontSize: fontSize.xsmall,
    color: colors.white,
    fontFamily: fontFamily.poppinsMedium,
  },
};

export default {
  fontSize,
  fontStyle,
  fontFamily,
  lineHeight,
};
