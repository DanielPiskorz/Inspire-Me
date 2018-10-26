import {Content} from 'src/app/models/Content';
export class SimpleContent implements Content {

  constructor(contentToCopy?: Content) {
    if (contentToCopy) {
      this.quoteText = contentToCopy.quoteText;
      this.quoteAuthor = contentToCopy.quoteAuthor;
      this.backgroundImageURL = contentToCopy.backgroundImageURL;
    }
  }


  quoteText: string;
  quoteAuthor: string;
  backgroundImageURL: string;

}
