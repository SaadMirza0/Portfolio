module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      // This allows the animation to finish and stay at 100% opacity
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
    },
  },
}