import { useEffect } from "react";
import { useBranchStore } from "../store/branchStore";

import { getBranch } from "../services/handleBranch";

export function useInitializeBranch() {


    const DEFAULT_BRANCH = {
    id: "6a5649c5444044742ea4d2e2",
    name: "Centoras Mall",
    location : "Blue Area, Islamabad"
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