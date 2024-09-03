import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

// Custom theme properties
const customOrangeTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF', // Ljus bakgrund
    surface: '#FFFFFF', // Ljus yta
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE', // Ljusgrå för sekundära ytor
    'surface-variant': '#424242', // Mörkare yta för kontrast
    'on-surface-variant': '#EEEEEE',
    primary: '#C35B02',  // Basfärg: Stark orange
    'primary-lighten-1': '#F5995A',  // Ljusare nyans av den starka orange
    'primary-darken-1': '#8F4300',  // Mörkare nyans av orange
    secondary: '#0266C3',  // Komplementär färg: Dämpad blå
    'secondary-darken-1': '#004A92',  // Mörkare blå för kontrast
    tertiary: '#F3C8A0',  // Accentfärg: Mjuk aprikos
    error: '#B00020',  // Standard röd för fel
    info: '#2196F3',  // Standard blå för info
    success: '#4CAF50',  // Standard grön för framgång
    warning: '#FB8C00',  // Behåller den varma orange för varningar
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  }
};

export default createVuetify({
  theme: {
    defaultTheme: 'customOrangeTheme',
    themes: {
      customOrangeTheme,
    },
  },
});