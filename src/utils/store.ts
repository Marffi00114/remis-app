import store from "store";
import * as _ from "lodash";

const remisKey = "remisStorage";

type storageKeys = "user";

const getStorage = () => store.get(remisKey) || {};

const getFromStorageByKey = (key: storageKeys) => _.get(getStorage(), key);
const setToStorageByKey = (key: storageKeys, value: any) => {
  return store.set(remisKey, _.set(getStorage(), key, value));
};
const removeFromStorageByKey = (key: storageKeys) =>
  _.remove(getStorage(), key);

export const storeActions = {
  user: {
    get: () => getFromStorageByKey("user"),
    set: (user: any) => setToStorageByKey("user", user),
    remove: () => removeFromStorageByKey("user"),
  },
};
