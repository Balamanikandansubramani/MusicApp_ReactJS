import * as React from "react";
import {AlbumSummary} from "../models/album";


export interface StateProps{
    albums: AlbumSummary;
}

export interface DispatchProps{
    getAlbums:() => Promise<void>;
}

export interface LocalProps {

}

interface props extends StateProps, DispatchProps, LocalProps {}

export class ViewAlbums extends React.Component<props>{
    render(){
        return(<div></div>);
    }
}