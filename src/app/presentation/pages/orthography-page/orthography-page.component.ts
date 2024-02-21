import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ChatMessageComponent,
  MyMessageComponent,
  TextMessageBoxComponent,
  TypingLoaderComponent,
} from '@components/index';


@Component( {
  selector: 'app-orthograpy-page',
  standalone: true,
  imports: [
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
  ],
  templateUrl: './orthography-page.component.html',
  styleUrl: './orthography-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export default class OrthographyPageComponent {

  handleMessage( message: string ) {

  }

}
