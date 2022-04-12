export interface PodcastItem {
  kind: string,
  etag: string,
  id: string,
  snippet: PodcastSnippet,
  statistics: PodcastStatistics,
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

type PodcastStatistics = {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string,
};
