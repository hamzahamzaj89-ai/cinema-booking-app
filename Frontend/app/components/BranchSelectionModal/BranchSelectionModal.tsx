import React, { useCallback, useEffect, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import Modal from "react-native-modal";

import BranchHeader from "./BranchHeader";
 import BranchCard from "./BranchCard";
  
import BranchFooter from "./BranchFooter";
import { IShowTimeByDate } from "@/app/interface/IShowTimeDetail";
import { useFetch } from "@/app/hooks/useFetch";
import { getBranches } from "@/app/services/branches.services";
import { IBranch } from "@/app/interface/IBranch";
import { useBranchStore } from "@/app/store/branchStore";
import ModalCardLoader from "../Skeletons/ModalCardLoader";
import { errorMessage } from "@/app/utils/ToastMessages";
import { getBranch, saveBranch } from "@/app/services/handleBranch";





interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function BranchSelectionModal({
  visible,
  onClose,
}: Props) {


  const branch = useBranchStore((state) => state.branch)

  const setBranch = useBranchStore((state) => state.setBranch)


  const  [dummyBranch , setDummyBranch] = useState<IBranch | null>(branch)

  
       //callbacks
             const fetchBranches = useCallback(() => {
               console.log("fethcing")
             return getBranches();
         }, []);
         
         
         
          
         
          //hooks
             const {data:branches , loading , error } = useFetch<IBranch>({fetchFunction:fetchBranches})

          




      const handleBranch = async() => {


              if (!branch) {
                errorMessage("Please select a branch")
              }

              const savedBranch = await getBranch()

  
              if (savedBranch?._id === branch?._id) {
                       console.log("same")
              }

              saveBranch(dummyBranch as IBranch)
              setBranch(dummyBranch as IBranch)
              onClose()

      }

     





  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.45}
      backdropColor="#000"
      animationIn="zoomIn"
      animationOut="zoomOut"
      useNativeDriver
      hideModalContentWhileAnimating
      statusBarTranslucent
    >
      <View
        
        style={{
          height: 550,
          shadowOpacity: 0.35,
          shadowRadius: 30,
          borderRadius:  20,
          shadowOffset: {
            width: 0,
            height: 15,
          },
          elevation: 20,
        }}


        className="rounded-[32px] h-[450px] bg-[#04041b] p-5 "
      >
        <BranchHeader  onClose={onClose}/>


           {loading ? (< >
              <View className=" mt-6"></View>
             <ModalCardLoader/>
             <ModalCardLoader/>
             <ModalCardLoader/>
             <ModalCardLoader/>

           </>) : (<>

            <FlatList
          data={branches}
          keyExtractor={(item) => item._id}
          className="mt-7"
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="h-4" />}
          renderItem={({ item }) => (
            <BranchCard
              branch={item}
              selected={dummyBranch?._id === item?._id}
               onPress={(branch: IBranch) =>  setDummyBranch(branch)}
            />
          )}
        />
        
        
        </>)}

    

        <BranchFooter
          onConfirm={() => handleBranch()}
         
          
        />
      </View>
    </Modal>
  );
}