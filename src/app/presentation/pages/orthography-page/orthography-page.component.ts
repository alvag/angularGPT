import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  ChatMessageComponent,
  MyMessageComponent,
  TextMessageBoxComponent,
  TextMessageBoxFileComponent,
  TextMessageBoxSelectComponent,
  TypingLoaderComponent,
} from '@components/index';
import { Message } from '@interfaces/message.interface';
import { OpenaiService } from '../../services';


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

  openAiService = inject( OpenaiService );

  messages = signal<Message[]>( [] );
  isLoading = signal( false );


  handleMessage( prompt: string ) {
    this.isLoading.set( true );

    this.messages.update( prev => [
      ...prev,
      {
        isGpt: false,
        text: prompt,
      },
    ] );

    this.openAiService.checkOrthography( prompt ).subscribe( resp => {
      this.isLoading.set( false );

      this.messages.update( prev => [
        ...prev,
        {
          isGpt: true,
          text: resp.message,
        },
      ] );
    } );
  }

}
