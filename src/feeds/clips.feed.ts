import { Expose } from 'class-transformer';
import { Feed } from '../core/feed';
import { ClipsFeedResponse, ClipsFeedResponseItemsItem } from '../responses';

export class ClipsFeed extends Feed<ClipsFeedResponse, ClipsFeedResponseItemsItem> {
  id: number | string;
  @Expose()
  private nextMaxId: string;

  protected set state(body: ClipsFeedResponse) {
    this.moreAvailable = body.more_available;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    const { body } = await this.client.request.send<ClipsFeedResponse>({
      url: `/api/v1/clips/user/`,
      method: 'POST',
      form: {
          _csrftoken: this.client.state.cookieCsrfToken,
          _uuid: this.client.state.uuid,
          session_id: this.client.state.clientSessionId,
          target_user_id: this.id,
          max_id: this.nextMaxId,
      },
    });
    this.state = body;
    return body;
  }

  async items() {
    const body = await this.request();
    return body.items;
  }
}
