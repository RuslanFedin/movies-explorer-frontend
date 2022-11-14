import React from "react";
import { Route, Redirect } from "react-router-dom";
import { PATHS } from "../../utils/constants";

const ProtectedRoute = ({ loggedIn, ...props }) => {
  return (
    <Route>
      {
        () => loggedIn ? props.children : <Redirect to={ PATHS.MAIN_PAGE } />
      }
    </Route>
  )
}

export default ProtectedRoute;
