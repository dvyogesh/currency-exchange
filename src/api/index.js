import { httpClient } from './httpClient';
import { todosApi } from './todosApi';
import { currencyApi } from './currencyApi';

export function apiFactory(http) {
  return {
    todos: todosApi(http),
    featchCurrencyData: currencyApi(httpClient(''))
  };
}

const http = httpClient('http://localhost:3000');
export const api = apiFactory(http);
