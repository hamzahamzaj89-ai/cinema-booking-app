import { useEffect } from "react";
import { useBranchStore } from "../store/branchStore";

import { getBranch } from "../services/handleBranch";

export function useInitializeBranch() {


    const DEFAULT_BRANCH = {
     _id: "6a5649c5444044742ea4d2e2",
            cinema: "6a529afa5c12c0b3f66705b0",
            name: "CineMax Emporium",
            location: "Johar Town",
            city: "Lahore",
            address: "Emporium Mall, Abdul Haque Road, Johar Town, Lahore"
};
    const setBranch = useBranchStore((state) => state.setBranch);

    useEffect(() => {

        async function init() {

            const savedBranch = await getBranch();

            if (savedBranch) {

                setBranch(savedBranch);

            } else {

                setBranch(DEFAULT_BRANCH);

            }

        }

        init();

    }, []);

}