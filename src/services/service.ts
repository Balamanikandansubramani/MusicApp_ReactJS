import axios from 'axios';
// import * as _ from "lodash";
import {AlbumSummary} from "../models/album";

const apiGatewayURL = "http://localhost:3002/";
const headers = {"content-type" : "application/json"};

export const getAllAlbums = () : Promise<AlbumSummary> => {
return axios.post(apiGatewayURL,"album_Details",{headers}).then(res => {
    return res.data as AlbumSummary;
})
}