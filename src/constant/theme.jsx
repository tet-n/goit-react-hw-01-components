export const theme = {
  colors: {
    darkBlue: '#000816',
    white: '#fff',
    darkGrey: ' #656565',
    lightGrey: '#cacaca',
    online: '#316e19',
    offline: '#ce2724',
    blue: '#2498ce',
    lightBlue: '#e4f4fc',
  },
  spacing: (...values) => {
    let value = '';
    for (let i = 0; i < values.length; i += 1) {
      value += `${4 * values[i]}px `;
    }
    return value;
  },
};
