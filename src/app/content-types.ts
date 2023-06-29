import {ContentTypeHeader} from "./modals/content-type-header";
import {ContentTypeWebForm} from "./modals/content-type-web-form";
import {ContentTypePageCarousel} from "./modals/content-type-page-carousel";
import {ContentTypeFloatingTextVisual} from "./modals/content-type-floating-text-visual";
import {ContentTypeEmailCta} from "./modals/content-type-email-cta";
import {ContentTypeTextVisual} from "./modals/content-type-text-visual";

const header: ContentTypeHeader = {
  id: '',
  type: 'header',
  name: 'Header',
  fields: {
    title: '',
    description: '',
    image: ''
  }
}

const webForm: ContentTypeWebForm = {
  id: '',
  type: 'webform',
  name: 'Formulier',
  fields: {
    title: '',
    description: '',
  }
}

const pageCarousel: ContentTypePageCarousel = {
  id: '',
  type: 'pageCarousel',
  name: 'Page carousel',
  fields: {
    title: '',
    pageArr: [{
      image: '',
      title: '',
      description: ''
    }]
  }
}

const floatingTextVisual: ContentTypeFloatingTextVisual = {
  id: '',
  type: 'floatingTextVisual',
  name: 'Floating text visual',
  fields: {
    title: '',
    description: '',
    image: ''
  }
}

const emailCta: ContentTypeEmailCta = {
  id: '',
  type: 'emailCta',
  name: 'Email CTA',
  fields: {
    text: '',
    buttonText: ''
  }
}

const textLeftVisual: ContentTypeTextVisual = {
  id: '',
  type: 'textLeftVisual',
  name: 'Text left visual',
  fields: {
    title: '',
    description: '',
    image: ''
  }
}

const textRightVisual: ContentTypeTextVisual = {
  id: '',
  type: 'textRightVisual',
  name: 'Text right visual',
  fields: {
    title: '',
    description: '',
    image: ''
  }
}

const contactForm = {
  id: '',
  type: 'contactForm',
  name: 'Contact formulier'
}

export const contentTypes = [
  header,
  webForm,
  pageCarousel,
  floatingTextVisual,
  emailCta,
  textLeftVisual,
  textRightVisual,
  contactForm
]

