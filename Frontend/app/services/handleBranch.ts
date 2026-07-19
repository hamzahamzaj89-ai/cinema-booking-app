import AsyncStorage from "@react-native-async-storage/async-storage";
import { IBranch } from "../interface/IBranch";
import { useBranchStore } from "../store/branchStore";

const KEY = "SELECTED_BRANCH";


export const saveBranch = async (branch: IBranch) => {
try {

    await AsyncStorage.setItem(
        KEY,
        JSON.stringify(branch)
    );

    console.log("Branch saved successfully");

} catch (error) {
    
    console.log("Failed to save branch");

}

};

export const getBranch = async () => {

    const value = await AsyncStorage.getItem(KEY);

    if (!value) return null;

    return JSON.parse(value) as IBranch;

};


export const clearBranch = async () => {

    await AsyncStorage.removeItem(KEY);

};