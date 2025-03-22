import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
export const navigateTo = (link) => {
  navigate(link);
};
