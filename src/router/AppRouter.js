import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import AddComicBook from "../components/AddComicBook";
import ComicBookList from "../components/ComicBooksList";
import useLocalstorage from "../hooks/useLocalStorage";
import EditComicBook from "../components/EditComicBook";
import ComicBooksContext from "../context/ComicBooksContext";

const AppRouter = () => {
  const [comicbooks, setBooks] = useLocalstorage("comicbooks", []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <ComicBooksContext.Provider value={{ comicbooks, setBooks }}>
            <Switch>
              <Route component={ComicBookList} path="/" exact={true} />
              <Route component={AddComicBook} path="/add" />
              <Route component={EditComicBook} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </ComicBooksContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
