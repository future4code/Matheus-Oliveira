import { HomePage } from "../pages/HomePage"
import { ListTripsPage } from "../pages/ListTripsPage"
import { ApplicationFormPage } from "../pages/ApplicationFormPage"
import { AdminHomePage } from "../pages/AdminHomePage"
import { LoginPage } from "../pages/LoginPage"
import { TripDetails } from "../pages/TripDetailsPage"
import { BrowserRouter, Switch, Route } from "react-router-dom"

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
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/admhome"}>
          <AdminHomePage />
        </Route>
        <Route exact path={"/details"}>
          <TripDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};