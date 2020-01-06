import {connect} from "react-redux";
import {ViewAlbumActions,getAlbums} from "./view-album.action";
import {StoreState} from "../store/store-state";
import {ThunkDispatch} from "redux-thunk";
import { ViewAlbums, StateProps, DispatchProps, LocalProps } from "./view-album.component";

const mapStateToProps = (state:StoreState): StateProps =>({
    albums: state.albums
})

const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, void, ViewAlbumActions>): DispatchProps => ({
    getAlbums: () => dispatch(getAlbums())
});

export default connect<StateProps, DispatchProps, LocalProps>(mapStateToProps, mapDispatchToProps)(ViewAlbums);
