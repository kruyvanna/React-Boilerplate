import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { rootStore } from "../Models/RootStore";

export const Login = observer(() => {
  let history = useHistory();
  let location = useLocation();

  const { userStore } = rootStore;

  let { from } = location.state || { from: { pathname: "/" } };

  let login = () => {
    const loggedInUser = {
      id: "1",
      name: "Vanna",
      isLoggedIn: true,
    };

    userStore.setCurrentUser(loggedInUser);
    history.replace(from);
  };

  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form action="" className="box">
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-left">
                    <input type="text" className="input" required />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control has-icons-left">
                    <input type="password" className="input" required />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <button
                    type="button"
                    className="button is-success"
                    onClick={login}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
