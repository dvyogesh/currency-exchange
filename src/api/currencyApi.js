export function currencyApi(http) {
  return {
    currencyApi: () => {
      return http.get('https://api.exchangeratesapi.io/latest?base=USD');
    }
  };
}
