import {StoreState} from "../store/store-state";
import {AlbumSummary} from "../models/album";

export const  InitialState: StoreState = {
    albums: {} as AlbumSummary
}

export default InitialState;