import { InjectionKey } from "vue";
import { Store } from "./index";

const StoreKey: InjectionKey<Store> = Symbol("store")
export default StoreKey;