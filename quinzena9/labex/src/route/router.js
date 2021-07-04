import { HomePage } from "../pages/homePage/HomePage"
import { ListTripsPage } from "../pages/listTripPage/ListTripsPage"
import { ApplicationFormPage } from "../pages/applicationFormPage/ApplicationFormPage"
import { AdminHomePage } from "../pages/adminHomePage/AdminHomePage"
import { LoginPage } from "../pages/loginPage/LoginPage"
import { CreateTripPage } from "../pages/createTripPage/CreateTripPage"
import { TripDetailsPage } from "../pages/tripDetailsPage/TripDetailsPage"
import { BrowserRouter, Switch, Route } from "react-router-dom"

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/trips/list"}>
          <ListTripsPage />
        </Route>
        <Route exact path={"/trips/application"}>
          <ApplicationFormPage />
        </Route>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/admin/trips/list"}>
          <AdminHomePage />
        </Route>
        <Route exact path={"/admin/trips/create"}>
          <CreateTripPage />
        </Route>
        <Route exact path={"/details/:id"}>
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};