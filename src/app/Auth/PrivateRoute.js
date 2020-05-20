import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Route, Redirect } from "react-router-dom";
import { rootStore } from "../Models/RootStore";

export const PrivateRoute = observer(({ children, ...rest }) => {
  const { userStore } = rootStore;
  console.log(
    "private route, will not rerender if comment out this line",
    userStore.currentUser.isLoggedIn
  );

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userStore.currentUser.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
});
