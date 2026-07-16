import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "SELECTED_BRANCH";

export const saveBranch = async (branch: any) => {

    await AsyncStorage.setItem(
        KEY,
        JSON.stringify(branch)
    );

};

export const getBranch = async () => {

    const value = await AsyncStorage.getItem(KEY);

    if (!value) return null;

    return JSON.parse(value);

};


export const clearBranch = async () => {

    await AsyncStorage.removeItem(KEY);

};