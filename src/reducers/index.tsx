import {combineReducers} from "redux";
import {ViewAlbumReducer as albums} from "../features/view-album.reducer";
import {StoreState} from "../store/store-state";

const RootReducer = combineReducers<StoreState>({
    albums
});

export default RootReducer;



