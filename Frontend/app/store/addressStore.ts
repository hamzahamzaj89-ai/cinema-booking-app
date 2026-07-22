import { create } from "zustand";

import { IAddress } from "@/app/interface/IAddress";

interface AddressState {
    addresses: IAddress[];
    selectedAddress: IAddress | null;

    setAddresses: (addresses: IAddress[]) => void;
    addAddress: (address: IAddress) => void;
    updateAddress: (address: IAddress) => void;
    removeAddress: (id: string) => void;

    setSelectedAddress: (address: IAddress | null) => void;

    clearAddresses: () => void;
}

const useAddressStore = create<AddressState>((set) => ({
    addresses: [],
    selectedAddress: null,

    setAddresses: (addresses) =>
        set({ addresses }),

    addAddress: (address) =>
        set((state) => ({
            addresses: [address, ...state.addresses],
        })),

    updateAddress: (address) =>
        set((state) => ({
            addresses: state.addresses.map((item) =>
                item._id === address._id ? address : item
            ),
            selectedAddress:
                state.selectedAddress?._id === address._id
                    ? address
                    : state.selectedAddress,
        })),

    removeAddress: (id) =>
        set((state) => ({
            addresses: state.addresses.filter(
                (item) => item._id !== id
            ),
            selectedAddress:
                state.selectedAddress?._id === id
                    ? null
                    : state.selectedAddress,
        })),

    setSelectedAddress: (address) =>
        set({ selectedAddress: address }),

    clearAddresses: () =>
        set({
            addresses: [],
            selectedAddress: null,
        }),
}));

export default useAddressStore;