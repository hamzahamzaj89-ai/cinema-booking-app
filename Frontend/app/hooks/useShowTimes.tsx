import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { IShowTime } from "../interface/IShowTime";
import { Alert } from "react-native";
import Toast from "react-native-toast-message";
import { errorMessage, successMessage } from "../utils/ToastMessages";
import { useBranchStore } from "../store/branchStore";


export const useShowtimes = () => {
  const [showTimesMovies, setShowTimesMovies] = useState<IShowTime[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
   const branch = useBranchStore((state) => state.branch)
  const fetchShowtimes = async () => {

    const url = "http://192.168.100.20:5000/api"
    if (!branch) return;
    try {
      setLoading(true);
      setError("");


         console.log(branch)

      const res:any = await fetch(`${process.env.EXPO_PUBLIC_BASE_URL}/showTime/get/branch/${branch._id}?page=0`);

          
        const response = await res.json();
        console.log(response)

           if (!response.success) {
                  errorMessage(res.message)
                  setLoading(false)
                  return
           } 


      setShowTimesMovies(response.movies);
      successMessage(response.message)

    } catch (err: any) {
        console.log(err.message)
      setError(err.response?.data?.message || "Failed to fetch showtimes");

    } finally {

      setLoading(false);
    }



}

  useEffect(() => {
    fetchShowtimes();
  }, [branch]);

  return {
    showTimesMovies,
    loading,
    error,
    refetch: fetchShowtimes,
  };
};