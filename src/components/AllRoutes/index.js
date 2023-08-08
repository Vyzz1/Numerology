import { useRoutes } from "react-router-dom";
import { routers } from "../../routes";

function AllRoutes() {
  const elements = useRoutes(routers);
  return elements;
}
export default AllRoutes;
