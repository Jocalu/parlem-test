import type { Ref } from "vue";
import { storeToRefs } from "pinia";

import { userDataStore } from "./userData.store";

import type { UserDataState } from "~~/@types/userData";

export interface UseUserData {
  getUserData(userId: string): Promise<void>;
  userDataState: Ref<UserDataState>;
}

export const useUserData = (): UseUserData => {
  const store = userDataStore();
  const { userDataState } = storeToRefs(store);

  return {
    getUserData: store.getUserData,
    userDataState: userDataState,
  };
};
