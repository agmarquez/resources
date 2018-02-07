import { Url, Image, ComicList, StoryList, EventList, SeriesSummary, CharacterList, CreatorList } from "./character";

export class SeriesDataWrapper {
  code: Number;
  status: String;
  copyright: String;
  attributionText: String;
  attributionHTML: String;
  data: SeriesDataContainer;
  etag: String;
}

export class SeriesDataContainer {
  offset: Number;
  limit: Number;
  total: Number;
  count: Number;
  results: Array<Series>;
}

export class Series {
  id: Number;
  title: String;
  description: String;
  resourceURI: String;
  urls: Array<Url>;
  startYear: Number;
  endYear: Number;
  rating: String;
  modified: Date;
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  characters: CharacterList;
  creators: CreatorList;
  next: SeriesSummary;
  previous: SeriesSummary;
}
