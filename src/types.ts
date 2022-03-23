export type Identifier = string | number;

export interface RepositoryOptions {
  path: string;
}

export interface ListStoreOptions {
  infiniteScroll?: boolean;
  refetchOnFocus?: boolean
  skipField: string;
  limitField: string;
  limit: number;
  resultsField?: string;
  totalCountField?: string;
}
