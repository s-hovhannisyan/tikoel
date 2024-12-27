// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createUseStyles } from 'react-jss';

// Import your font files
import MontserratRegularTTF from 'assets/fonts/Montserrat/static/Montserrat-Regular.ttf';
import MontserratMediumTTF from 'assets/fonts/Montserrat/static/Montserrat-Medium.ttf';
import MontserratBoldTTF from 'assets/fonts/Montserrat/static/Montserrat-Bold.ttf';
import MontserratBlackTTF from 'assets/fonts/Montserrat/static/Montserrat-Black.ttf';

import PhuduRegularTTF from 'assets/fonts/Phudu/static/Phudu-Regular.ttf';
import PhuduMediumTTF from 'assets/fonts/Phudu/static/Phudu-Medium.ttf';
import PhuduBoldTTF from 'assets/fonts/Phudu/static/Phudu-Bold.ttf';
import PhuduBlackTTF from 'assets/fonts/Phudu/static/Phudu-Black.ttf';

import JostRegularTTF from 'assets/fonts/Jost/static/Jost-Regular.ttf';
import JostMediumTTF from 'assets/fonts/Jost/static/Jost-Medium.ttf';
import JostBoldTTF from 'assets/fonts/Jost/static/Jost-Bold.ttf';
import JostBlackTTF from 'assets/fonts/Jost/static/Jost-Black.ttf';

import LatoBlackTTF from 'assets/fonts/Lato/Lato-Black.ttf';
import LatoBoldTTF from 'assets/fonts/Lato/Lato-Bold.ttf';
import LatoItalicTTF from 'assets/fonts/Lato/Lato-Italic.ttf';
import LatoRegularTTF from 'assets/fonts/Lato/Lato-Regular.ttf';
import LatoLightTTF from 'assets/fonts/Lato/Lato-Light.ttf';
import LatoThinTTF from 'assets/fonts/Lato/Lato-Thin.ttf';

export const useGlobalFonts = createUseStyles({
  '@global': {
    '@font-face': [
      {
        fontFamily: 'Montserrat',
        src: `url(${MontserratRegularTTF}) format('ttf')`,
        fontWeight: 400,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Montserrat',
        src: `url(${MontserratMediumTTF}) format('ttf')`,
        fontWeight: 500,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Montserrat',
        src: `url(${MontserratBoldTTF}) format('ttf')`,
        fontWeight: 700,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Montserrat',
        src: `url(${MontserratBlackTTF}) format('ttf')`,
        fontWeight: 900,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },

      // Lato font faces
      {
        fontFamily: 'Lato',
        src: `url(${LatoThinTTF}) format('truetype')`,
        fontWeight: 100,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Lato',
        src: `url(${LatoLightTTF}) format('truetype')`,
        fontWeight: 300,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Lato',
        src: `url(${LatoRegularTTF}) format('truetype')`,
        fontWeight: 400,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Lato',
        src: `url(${LatoItalicTTF}) format('truetype')`,
        fontWeight: 400,
        fontStyle: 'italic',
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Lato',
        src: `url(${LatoBoldTTF}) format('truetype')`,
        fontWeight: 700,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Lato',
        src: `url(${LatoBlackTTF}) format('truetype')`,
        fontWeight: 900,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },

      // Phudu font faces
      {
        fontFamily: 'Phudu',
        src: `url(${PhuduRegularTTF}) format('truetype')`,
        fontWeight: 400,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Phudu',
        src: `url(${PhuduMediumTTF}) format('truetype')`,
        fontWeight: 500,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Phudu',
        src: `url(${PhuduBoldTTF}) format('truetype')`,
        fontWeight: 700,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Phudu',
        src: `url(${PhuduBlackTTF}) format('truetype')`,
        fontWeight: 900,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },

      // Jost font faces
      {
        fontFamily: 'Jost',
        src: `url(${JostRegularTTF}) format('truetype')`,
        fontWeight: 400,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Jost',
        src: `url(${JostMediumTTF}) format('truetype')`,
        fontWeight: 500,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Jost',
        src: `url(${JostBoldTTF}) format('truetype')`,
        fontWeight: 700,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Jost',
        src: `url(${JostBlackTTF}) format('truetype')`,
        fontWeight: 900,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
    ],
  },
}); 
