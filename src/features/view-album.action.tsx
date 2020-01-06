import * as types from "../actions/action.type";
import {Action, Dispatch, ActionCreator} from 'redux';
import {AlbumSummary} from "../models/album";
import * as albumServices from '../services/service';

interface GetAlbumAction extends Action {
    type: types.GET_ALBUM_SUCCESS;
    albums: AlbumSummary;
}

export type ViewAlbumActions = GetAlbumAction;

export const getViewAlbumActions: ActionCreator<GetAlbumAction> = (albums: AlbumSummary) => {
return {
    type: types.GET_ALBUM_SUCCESS,
    albums
    };
};

export const getAlbums = () => (dispatch: Dispatch<ViewAlbumActions>): Promise<void> => {
return albumServices.getAllAlbums().then(res => {
    dispatch(getViewAlbumActions(res))
})
}