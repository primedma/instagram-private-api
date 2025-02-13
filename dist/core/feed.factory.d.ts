import { IgApiClient } from './client';
import {
  AccountFollowersFeed,
  AccountFollowingFeed,
  BestiesFeed,
  BlockedUsersFeed,
  DirectInboxFeed,
  DirectPendingInboxFeed,
  DirectThreadFeed,
  DiscoverFeed,
  PostsInsightsFeed,
  LocationFeed,
  MediaCommentsFeed,
  MusicGenreFeed,
  MusicMoodFeed,
  MusicSearchFeed,
  MusicTrendingFeed,
  NewsFeed,
  PendingFriendshipsFeed,
  ReelsMediaFeed,
  ReelsTrayFeed,
  SavedFeed,
  StoriesInsightsFeed,
  TagFeed,
  TagsFeed,
  TimelineFeed,
  UserFeed,
  UsertagsFeed,
  IgtvBrowseFeed,
  IgtvChannelFeed,
  LikedFeed,
  TopicalExploreFeed,
} from '../feeds';
import { DirectInboxFeedResponseThreadsItem } from '../responses';
import { PostsInsightsFeedOptions, TimelineFeedReason, IgAppModule } from '../types';
import { UserStoryFeed } from '../feeds/user-story.feed';
import { ClipsFeed } from '../feeds/clips.feed';
import { ListReelMediaViewerFeed } from '../feeds/list-reel-media-viewer.feed';
import { MediaInlineChildCommentsFeed } from '../feeds/media.inline-child-comments.feed';
import { MediaStickerResponsesFeed } from '../feeds/media.sticker-responses.feed';
import {
  StorySliderVotersFeedResponseResponseRootObject,
  StorySliderVotersFeedResponseResponseVotersItem,
  StoryQuestionResponsesFeedResponseRespondersItem,
  StoryQuestionResponsesFeedResponseRootObject,
  StoryQuizParticipantsFeedResponseParticipantsItem,
  StoryQuizParticipantsFeedResponseRootObject,
  StoryPollVotersFeedResponseRootObject,
  StoryPollVotersFeedResponseVotersItem,
} from '../responses';
export declare class FeedFactory {
  private client;
  constructor(client: IgApiClient);
  accountFollowers(
    options?:
      | string
      | number
      | Partial<Pick<AccountFollowersFeed, 'searchSurface' | 'order' | 'query' | 'enableGroups' | 'id'>>,
  ): AccountFollowersFeed;
  accountFollowing(
    options?:
      | string
      | number
      | Partial<
          Pick<AccountFollowingFeed, 'searchSurface' | 'order' | 'query' | 'enableGroups' | 'includesHashtags' | 'id'>
        >,
  ): AccountFollowingFeed;
  news(): NewsFeed;
  discover(): DiscoverFeed;
  pendingFriendships(): PendingFriendshipsFeed;
  bestFriendships(): BestiesFeed;
  blockedUsers(): BlockedUsersFeed;
  directInbox(): DirectInboxFeed;
  directPending(): DirectPendingInboxFeed;
  directThread(
    options: Pick<DirectInboxFeedResponseThreadsItem, 'thread_id' | 'oldest_cursor'>,
    seqId?: number,
  ): DirectThreadFeed;
  user(id: string | number): UserFeed;
  clips(id: string | number): ClipsFeed;
  tag(tag: string): TagFeed;
  tags(tag: string, tab?: 'top' | 'recent' | 'places'): TagsFeed;
  location(id: string | number, tab?: 'recent' | 'ranked'): LocationFeed;
  mediaComments(id: string): MediaCommentsFeed;
  reelsMedia(options: { userIds: Array<number | string>; source?: IgAppModule }): ReelsMediaFeed;
  userStory(userId: string | number): UserStoryFeed;
  reelsTray(reason?: 'pull_to_refresh' | 'cold_start'): ReelsTrayFeed;
  timeline(reason?: TimelineFeedReason): TimelineFeed;
  musicTrending(product?: IgAppModule): MusicTrendingFeed;
  musicSearch(query: string, product?: IgAppModule): MusicSearchFeed;
  musicGenre(id: number | string, product?: IgAppModule): MusicGenreFeed;
  musicMood(id: number | string, product?: IgAppModule): MusicMoodFeed;
  usertags(id: number | string): UsertagsFeed;
  postsInsightsFeed(options: PostsInsightsFeedOptions): PostsInsightsFeed;
  storiesInsights(timeframe: 'ONE_DAY' | 'ONE_WEEK' | 'TWO_WEEKS'): StoriesInsightsFeed;
  saved(): SavedFeed;
  listReelMediaViewers(mediaId: string): ListReelMediaViewerFeed;
  mediaInlineChildComments(mediaId: string, commentId: string, minId?: string): MediaInlineChildCommentsFeed;
  igtvBrowse(isPrefetch?: boolean): IgtvBrowseFeed;
  storyQuestionResponses(
    mediaId: string,
    stickerId: string | number,
  ): MediaStickerResponsesFeed<
    StoryQuestionResponsesFeedResponseRootObject,
    StoryQuestionResponsesFeedResponseRespondersItem
  >;
  storyPollVoters(
    mediaId: string,
    stickerId: string | number,
  ): MediaStickerResponsesFeed<StoryPollVotersFeedResponseRootObject, StoryPollVotersFeedResponseVotersItem>;
  storyQuizParticipants(
    mediaId: string,
    stickerId: string | number,
  ): MediaStickerResponsesFeed<
    StoryQuizParticipantsFeedResponseRootObject,
    StoryQuizParticipantsFeedResponseParticipantsItem
  >;
  storySliderVoters(
    mediaId: string,
    stickerId: string | number,
  ): MediaStickerResponsesFeed<
    StorySliderVotersFeedResponseResponseRootObject,
    StorySliderVotersFeedResponseResponseVotersItem
  >;
  igtvChannel(id: string | number): IgtvChannelFeed;
  igtvChaining(id: string | number): IgtvChannelFeed;
  liked(): LikedFeed;
  topicalExplore(
    options?: Partial<Pick<TopicalExploreFeed, 'sessionId' | 'clusterId' | 'lat' | 'lng' | 'module'>>,
  ): TopicalExploreFeed;
}
