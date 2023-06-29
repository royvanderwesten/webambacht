import {ContentType} from "./content-type";

export interface ContentTypeFloatingTextVisual extends ContentType {
  fields: {
    image: string;
    title: string;
    description: string;
  }
}
