import { removeToken } from "@/utils/cookies";
import { useNavigate } from "react-router-dom";
const Head = () => {
  const navigate = useNavigate();
  const out = () => {
    removeToken();
    navigate("/");
  };
  return (
    <div>
      <div onClick={out}>退出</div>
    </div>
  );
};
export default Head;
