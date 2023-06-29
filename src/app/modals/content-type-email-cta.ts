import {ContentType} from "./content-type";

export interface ContentTypeEmailCta extends ContentType {
  fields: {
    text: string;
    buttonText: string;
  }
}
