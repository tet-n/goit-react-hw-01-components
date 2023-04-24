export const theme = {
  colors: {
    darkBlue: '#000816',
    white: '#fff',
    darkGray: ' #656565',
    lightGray: '#b2b2b2',
  },
  spacing: (...values) => {
    let value = '';
    for (let i = 0; i < values.length; i += 1) {
      value += `${4 * values[i]}px `;
    }
    return value;
  },
};
