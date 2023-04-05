import { Routes, Route } from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import PageNotFound from "../PageNotFound/PageNotFound";
import Register from "../Register/Register";

const Routing = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<DashBoard />} exact/> */}
        <Route path="/catalog" element={<Catalog />} />

        <Route path="/auth/register" element={<Register />} />
        {/* <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/logout" element={<Logout />} /> */}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
