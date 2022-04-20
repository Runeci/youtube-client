export interface PodcastPage {
    kind: string,
    etag: string,
    nextPageToken: string,
    regionCode: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number,
    },
    items: PodcastItem[],
}

export interface PodcastItem {
    kind: string,
    etag: string,
    id: PodcastId,
    snippet: PodcastSnippet,
    // statistics: PodcastStatistics,
}

export interface PodcastId {
    kind: string,
    videoId: string,
}

interface PodcastSnippet {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
        [key in PodcastThumbnails]: PodcastThumbnail
    },
    channelTitle: string,
    tags: string[],
    categoryId: string,
    liveBroadcastContent: string,
    localized: PodcastLocalised,
    defaultAudioLanguage: string,
}

type PodcastThumbnail = {
    url: string,
    height: number,
    width: number
};

enum PodcastThumbnails {
    Default = 'default',
    Medium = 'medium',
    High = 'high',
    Standard = 'standard',
    Maxres = 'maxres',
}

type PodcastLocalised = {
    title: string,
    description: string,
};

// type PodcastStatistics = {
//   viewCount: string,
//   likeCount: string,
//   dislikeCount: string,
//   favoriteCount: string,
//   commentCount: string,
// };
