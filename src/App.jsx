import { Route, Routes } from "react-router";
import Accueil from "./pages/Accueil";
import AllBooks from "./pages/AllBooks";
import Favourites from "./pages/Favourites";
import Login from "./pages/Login";
import AddBook from "./pages/AddBook";
import Navbar from "./components/Navbar";
import BookDetails from "./components/BookDetails";
import { useContext } from "react";
import { LoginContext } from "./store/LoginContext";
import Books from "./components/admin/Books";
import Users from "./components/admin/Users";

function App() {
  let logCtx = useContext(LoginContext);

  if (logCtx.isLogged) {
    if (logCtx.role == "user")
      return (
        <>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Accueil></Accueil>}></Route>
            <Route path="/all" element={<AllBooks></AllBooks>}></Route>
            <Route
              path="/all/:id"
              element={<BookDetails></BookDetails>}
            ></Route>
            <Route
              path="/favourites"
              element={<Favourites></Favourites>}
            ></Route>
            {/* <Route path="/login" element={<Login></Login>}></Route> */}
          </Routes>
        </>
      );
    else
      return (
        <>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Accueil></Accueil>}></Route>
            <Route path="/books" element={<Books></Books>}></Route>
            <Route path="/books/add" element={<AddBook></AddBook>}></Route>

            <Route path="/users" element={<Users></Users>}></Route>
          </Routes>
        </>
      );
  } else
    return (
      <>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Accueil></Accueil>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </>
    );
}
export default App;
