export class CharacterDataWrapper {
  code: Number;
  status: String;
  copyright: String;
  attributionText: String;
  attributionHTML: String;
  data: CharacterDataContainer;
  etag: String;
}

export class CharacterDataContainer {
  offset: Number;
  limit: Number;
  total: Number;
  count: Number;
  results: Array<Character>;
}

export class Character {
  id: Number;
  name: String;
  description: String;
  modified: Date;
  resourceURI: String;
  urls: Array<Url>;
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
}

export class Url {
  type: String;
  url: String;
}
export class Image {
  path: String;
  extension: String;
}

export class ComicList {
  available: Number;
  returned: Number;
  collectionURI: String;
  items: Array<ComicSummary>;
}

export class ComicSummary {
  resourceURI: String;
  name: String;
}

export class StoryList {
  available: Number;
  returned: Number;
  collectionURI: String;
  items: Array<StorySummary>;
}

export class StorySummary {
  resourceURI: String;
  name: String;
  type: String;
}

export class EventList {
  available: Number;
  returned: Number;
  collectionURI: String;
  items: Array<EventSummary>;
}

export class EventSummary {
  resourceURI: String;
  name: String;
}

export class SeriesList {
  available: Number;
  returned: Number;
  collectionURI: String;
  items: Array<SeriesSummary>;
}

export class SeriesSummary {
  resourceURI: String;
  name: String;
}

export class CharacterList {
  available: Number;
  returned: Number;
  collectionURI: String;
  items: Array<CharacterSummary>;
}

export class CharacterSummary {
  resourceURI: String;
  name: String;
  role: String;
}

export class CreatorList {
  available: Number;
  returned: Number;
  collectionURI: String;
  items: Array<CreatorSummary>;
}

export class CreatorSummary {
  resourceURI: String;
  name: String;
  role: String;
}
