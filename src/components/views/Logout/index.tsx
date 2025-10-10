import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAccountStore } from "@/stores/useAccountState";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    useAccountStore.getState().reset();
    navigate("/home");
  }, [navigate]);
  return <div></div>;
};

export default Logout;
