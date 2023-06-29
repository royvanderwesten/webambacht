import {ContentType} from "./content-type";

export interface ContentTypeTextVisual extends ContentType {
  fields: {
    image: string;
    title: string;
    description: string;
  }
}
