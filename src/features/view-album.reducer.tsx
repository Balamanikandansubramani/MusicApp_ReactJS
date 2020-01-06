import * as types from "../actions/action.type";
import {AlbumSummary} from "../models/album";
import {ViewAlbumActions} from "./view-album.action";
import InitialState from "../reducers/initialState";

export const ViewAlbumReducer = (
    state: AlbumSummary = InitialState.albums,
    action: ViewAlbumActions
) => {
switch(action.type){
    case types.GET_ALBUM_SUCCESS:
        return action.albums;
    default:
        return state;
}
}