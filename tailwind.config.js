module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        default: ['Montserrat']
      },
      animation: {
        fadeIn: 'fade .525s reverse',
        fadeOut: 'fade .525s forwards',
        attention: 'attention 2.1s infinite ',
        swivel: 'swivel 1.05s infinite ',
        foldOut: 'fold .4s forwards',
        foldIn: 'fold .4s reverse',
        clockwise: 'rotate 21s infinite linear',
        select: 'select .2s forwards',
        deselect: 'select .5s reverse',
        collect: 'collect 1s infinite'
      },
      keyframes: {
        fade: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        attention: {
          '0%': { transform: 'scale(.9)' },
          '10%': { transform: 'scale(1)'  },
          '20%': { transform: 'scale(.9)'  },
          '30%': { transform: 'scale(1)'  },
          '40%': { transform: 'scale(.9)'  },
          '100%': { transform: 'scale(.9)'  },
        },
        select: {
          '0%': { transform: 'scale(1)'},
          '50%': { transform: 'scale(1.1)'},
          '75%': { transform: 'scale(1)'},
          '100%': { transform: 'scale(1)'},
        },
        swivel: {
          '0%': {transform: 'rotate(7deg) scale(1.1)'},
          '50%': {transform: 'rotate(-7deg) scale(1.1)'},
          '100%': {transform: 'rotate(7deg) scale(1.1)'},
        },
        fold: {
          '0%': {transform: 'scaleX(1)'},
          '50%': {transform: 'scaleX(0)'},
          '100%': {transform: 'scaleX(0)'},
        },
        rotate: {
          from: {transform: 'rotate(0deg) scale(2)'},
          to:  {transform: 'rotate(359deg) scale(2)'}
        },
        collect: {
          '0%': { transform: 'scale(1)', opacity: 1},
          '50%': { transform: 'scale(1.5)', opacity: 0},
          '100%': { transform: 'scale(1.5)', opacity: 0},
        }


      },
    },
  },
  plugins: [],
}
