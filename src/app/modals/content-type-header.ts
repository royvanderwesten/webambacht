import {ContentType} from "./content-type";

export interface ContentTypeHeader extends ContentType {
  fields: {
    title: string;
    description: string;
    image: string;
  }
}
