import { types, flow } from "mobx-state-tree";

const User = types.model({
  id: "",
  name: "",
  username: "",
  role: "",
  isLoggedIn: false,
});

export const UserStore = types
  .model({
    status: "",
    users: types.array(User),
    currentUser: types.maybe(User),
  })
  .actions((self) => ({
    changeStatus(newStatus) {
      self.status = newStatus;
    },
    setCurrentUser(newUser) {
      self.currentUser = newUser;
      localStorage.setItem("user", JSON.stringify(newUser));
    },
  }));

let user = {
  isLoggedIn: false,
};
const storedUser = localStorage.getItem("user");
if (storedUser) {
  user = JSON.parse(storedUser);
  console.log("using stored user", user);
}

export const userStore = UserStore.create({
  status: "loading",
  currentUser: user,
});
