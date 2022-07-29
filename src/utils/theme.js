import { createGlobalStyle } from 'styled-components';

const mainBrandColor = '#f1d204';
const lightShades = '#ffffff;';
const darkAccent = '#8c9597;';
const darkShades = '#545454';
const lightCreamAccent = '#6a4d8a';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightCreamAccent: '#6a4d8a',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for invercoted designs.
  darkShades,
  borderColor: '#fff',
  // is-size-2export default
  // Background colors backgroundInputColor: darkShades,
  backgroundColor: lightCreamAccent,
  backgroundInputColor: lightShades,
  backgroundColorLite: mainBrandColor,
  backgroundColorLight: '#222f36',
  backgroundColorBlackLite: '#292825',
  // Font sizes
  fontSizeBase: '20px',
  fontSizeSmall: '23px',
  fontSizeMedium: '35px',
  fontSizeLarge: '65px',
  fontSizeXL: '80px',

  // Text colors
  textColor: mainBrandColor,
  textColorGreyLite: darkAccent,
  textColorWhite: lightShades,
  textColorLite: '#F18B6D',
  textColorPrimary: '#5e5e5e',
  textColorSecondary: darkShades,
  textColorWhiteLite: '#fff',
  textColorPurple: lightCreamAccent,

  // FONTS FAMILY
  primaryFontFamily: "'Lato', sans-serif",
  SecondaryFontFamily: "'Poppins', sans-serif",
};

const GlobalStyle = createGlobalStyle`
  body{
    font-family: ${theme.primaryFontFamily} !important;
    line-height: 26px;
      scroll-behavior: smooth;
  }
  .is-title{
    font-family: ${theme.SecondaryFontFamily}  !important;
  }
  .has-text-grey-lite {
    color: ${theme.textColorGreyLite};
  }
  .has-text-white{
    color:${theme.textColorWhite};
  }
  .has-text-white-lite{
    color:${theme.textColorWhiteLite};
  }
  .has-text-secondary{
    color:${theme.textColorSecondary};
  }
    .is-text-primary{
    color:${theme.textColorPrimary}!important;
  }
  .has-text-color{
    color:${theme.textColor}!important;
  }
  .has-text-lite {
    color: ${theme.textColorLite}!important;
  }
  .has-text-purple {
    color: ${theme.textColorPurple}!important;
  }
  .has-background-color{
    background-color:${theme.backgroundColorLight} !important;
    }
    .has-background-lite{
    background-color:${theme.backgroundColorLite} !important;
    }
    .has-background-purple{
    background-color:${theme.backgroundColor} !important;
    }
    .has-background-blackLite{
    background-color: ${theme.backgroundColorBlackLite} !important;
    }
  .text-base{
    font-size: ${theme.fontSizeBase} !important;
  }
  .text-small {
    font-size: ${theme.fontSizeSmall};
  }
  .text-medium{
    font-size: ${theme.fontSizeMedium};
  }
  .text-large {
    font-size: ${theme.fontSizeLarge};
  }
  .has-text-XL {
  font-size: ${theme.fontSizeXL};
  }

  .button-is-primary{
    background-color:${theme.mainBrandColor} !important;
    color:${theme.textColorwhite}!important;
    border-color:transparent;
  :hover{
      background-color:${theme.backgroundColor} !important;
      color:${theme.textColorWhite};

  }
  }
.button-is-secondary{
  color:${theme.textColorWhite}!important;
  background: transparent !important;
  border-radius: 3px;
  :hover{
  background-color: rgba( 0, 0, 0, .1 )important;
  color:${theme.textColorWhite}!important;
  }
}
  .button:active
  {
    color:${theme.textColorWhite}!important;
    }
  .button:focus{
    color:${theme.textColorWhite}!important;
  }

`;
export default GlobalStyle;
