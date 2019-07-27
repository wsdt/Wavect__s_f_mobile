import { LoadingStatus } from "../../components/system/HOCs/LoadingHoc";
export interface IBaseScreenState {
    loadingStatus: LoadingStatus;
    isRefreshing: boolean;
    refreshCallback: (cb: () => void) => void;
}
