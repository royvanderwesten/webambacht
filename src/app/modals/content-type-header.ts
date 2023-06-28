import {ContentType} from "./content-type";

export interface ContentTypeHeader extends ContentType {
  title?: string;
  description?: string;
  imageUrl?: string;
}
