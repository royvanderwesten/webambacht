import {ContentType} from "./content-type";

export interface ContentTypeWebForm extends ContentType {
  fields: {
    title: string;
    description: string;
  }
}
