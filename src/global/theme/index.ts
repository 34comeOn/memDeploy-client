export const defaultTheme = {
    colorBlackForText: "#333333",
    colorWhite: "#ffffff",
    colorGray: "#f6f6f6",
    colorForLightBackground: "#fff6d9",
    colorForDarkBackground: "#ffeead",
    colorForButton: "#ff732B",
    colorForButtonHover: "#F35714",
    pagePadding: "90px",
    indent: "20px",
    fontFamily: '"Roboto", "Arial", sans-serif',
    fontSizeDefault: "18px",
    footerHeight: "80px",
    pageWidth: "1280px"
  };

const size = {
  mobile: '600px',
  laptop: '1024px',

  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptopM: '1200px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  isLaptop: `(min-width: ${size.laptop})`,

  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
  
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktopL: `(max-width: ${size.desktop})`
};