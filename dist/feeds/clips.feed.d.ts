import { Feed } from '../core/feed';
import { ClipsFeedResponse, ClipsFeedResponseItemsItem } from '../responses';
export declare class ClipsFeed extends Feed<ClipsFeedResponse, ClipsFeedResponseItemsItem> {
  id: number | string;
  private nextMaxId;
  protected set state(body: ClipsFeedResponse);
  request(): Promise<ClipsFeedResponse>;
  items(): Promise<ClipsFeedResponseItemsItem[]>;
}
