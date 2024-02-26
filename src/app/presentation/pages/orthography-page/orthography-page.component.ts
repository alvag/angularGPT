import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ChatMessageComponent,
  MyMessageComponent,
  TextMessageBoxComponent,
  TextMessageBoxEvent,
  TextMessageBoxFileComponent,
  TextMessageBoxSelectComponent,
  TypingLoaderComponent,
} from '@components/index';
import { Message } from '@interfaces/message.interface';


@Component( {
  selector: 'app-orthograpy-page',
  standalone: true,
  imports: [
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent,
  ],
  templateUrl: './orthography-page.component.html',
  styleUrl: './orthography-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export default class OrthographyPageComponent {

  messages = signal<Message[]>( [ {
    text: 'Hello world!',
    isGpt: true,
  } ] );
  isLoading = signal( false );

  handleMessageWithSelect( event: TextMessageBoxEvent ) {
    console.log( event );
  }

}
