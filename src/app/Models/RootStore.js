import { types, onSnapshot } from "mobx-state-tree";
import { userStore, UserStore } from "./UserModel";

const RootStore = types.model({
  userStore: types.maybe(UserStore),
});

export const rootStore = RootStore.create({
  userStore: userStore,
});

onSnapshot(rootStore, (snapshot) => {
  console.dir(snapshot);
});
