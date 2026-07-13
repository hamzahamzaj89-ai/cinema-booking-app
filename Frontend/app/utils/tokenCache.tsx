import * as SecureStore from "expo-secure-store";

export const tokenCache = {
  async getToken(key: any) {
    return SecureStore.getItemAsync(key);
  },

  async saveToken(key: any, value: any) {
    return SecureStore.setItemAsync(key, value);
  },
};