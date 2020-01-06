export interface Album {
Id: number;
TitleName: string;
AlbumName: string;
ComposerName: string;
ReleasedDate: Date;
ArtistName: string;
ThumbnailImage: string;
}

export interface AlbumSummary {
    content: Array<Album>;
}