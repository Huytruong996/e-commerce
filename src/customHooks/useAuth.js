import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const useAuth = (props) => {
  const { currentUser } = useSelector((state) => state.user);
  const history = useHistory();
  console.log(props);
  useEffect(() => {
    if (!currentUser) {
      return history.push("/Account");
    }
  }, [currentUser]);

  return currentUser;
};

export default useAuth;
