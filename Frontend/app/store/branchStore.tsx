import { create } from "zustand";

interface Branch {

    id: string;

    name: string;
    location: string
}

interface BranchStore {

    branch: Branch | null;

    setBranch: (branch: Branch) => void;

}

export const useBranchStore = create<BranchStore>((set) => ({

    branch: null,

    setBranch: (branch) =>
        set({
            branch,
        }),

}));