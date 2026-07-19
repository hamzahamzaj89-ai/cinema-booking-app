import { create } from "zustand";
import { IBranch } from "../interface/IBranch";


interface BranchStore {

    branch: IBranch | null;

    setBranch: (branch: IBranch) => void;

}

export const useBranchStore = create<BranchStore>((set) => ({

    branch:null,

    setBranch: (branch) =>
        set({
            branch,
        }),

}));