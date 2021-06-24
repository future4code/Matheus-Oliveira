import { HomePage } from "../pages/HomePage";
import { ListTripsPage } from "../pages/ListTripsPage";
import { ApplicationFormPage } from "../pages/ApplicationFormPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/list"}>
          <ListTripsPage />
        </Route>

        <Route exact path={"/form"}>
          <ApplicationFormPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};