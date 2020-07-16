const ReusableFunction = {
  filters: {
    currencyFormat(value) {
      return new Intl.NumberFormat().format(value);
    }
  }
};

export default ReusableFunction;
