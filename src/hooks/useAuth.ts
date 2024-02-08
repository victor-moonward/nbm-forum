import { useEffect } from "react";
import { useUser } from "@/stores";

export function useAuth() {
  const { getUserData, ...rest } = useUser((state) => state);

  useEffect(() => {
    getUserData();
  }, []);

  return { ...rest }
}