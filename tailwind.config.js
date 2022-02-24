module.exports = {  
  mode: 'jit',  
  purge: [
    './public/**/*.html',
  ],
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      fontSize: {
        '22': '1.375rem',
        '100': '6.25rem',
        '80': '5rem',
        '80': '5rem',
        '17': '1.063rem',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'brown': '#76221B',
        'darkbrown': '#742219',
        'customegray': '#7c7c7c',
        'customeblue':'#2B374B',
        'customeOrange':'#9C3825',
        'customelightgray':'#ECEDED',
        'customelightblue':'#414142',
      },
      maxWidth: {
        '1/10': '70%',
        '2/10': '70%',
        '3/10': '70%',
        '4/10': '70%',
        '5/10': '70%',
        '6/10': '70%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      },
      minHeight: {
        '23': '23.5rem',
      },
      height: {
        '256': '48rem',
      },
      screens: {
        'xs': '475px',
      },
    }
  },
}