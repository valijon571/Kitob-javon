import { Route, Routes } from "react-router-dom";
import Books_list from "../books/Books_list";
import Sign_up from "../Registration/Sign_up";
import Sign_in from "../Registration/Sign_in";
import Undraw_page from "../Registration/Undraw_page ";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sign_up />} />
        <Route path="/Sign_in" element={<Sign_in />} />
        <Route path="/undraw_page_not_found_re_e9o6" element={<Undraw_page />} />
        <Route path="/search_refraction" element={<Books_list />} />
      </Routes>
    </>
  );
};
export default Router;
