import { Component, inject, signal } from '@angular/core';
import { ChatMessageComponent } from '@components/chat-bubbles/chat-message/chat-message.component';
import { MyMessageComponent } from '@components/chat-bubbles/my-message/my-message.component';
import {
  TextMessageBoxSelectComponent,
} from '@components/text-boxes/text-message-box-select/text-message-box-select.component';
import { TypingLoaderComponent } from '@components/typing-loader/typing-loader.component';
import { Message } from '@interfaces/message.interface';
import { OpenaiService } from '@services/openai.service';

@Component( {
  selector: 'app-chat-template',
  standalone: true,
  imports: [
    ChatMessageComponent,
    MyMessageComponent,
    TextMessageBoxSelectComponent,
    TypingLoaderComponent,
  ],
  templateUrl: './chat-template.component.html',
  styleUrl: './chat-template.component.scss',
} )
export class ChatTemplateComponent {

  openAiService = inject( OpenaiService );

  messages = signal<Message[]>( [] );
  isLoading = signal( false );


  handleMessage( event: string ) {
    console.log( event );
  }

}
