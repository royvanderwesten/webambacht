import {ContentType} from "./content-type";
import {PageLink} from "./page-link";

export interface ContentTypePageCarousel extends ContentType {
  fields: {
    title: string;
    pageArr: [PageLink]
  }
}
