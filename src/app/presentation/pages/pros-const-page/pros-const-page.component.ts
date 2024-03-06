import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent } from '@components/chat-bubbles/chat-message/chat-message.component';
import { MyMessageComponent } from '@components/chat-bubbles/my-message/my-message.component';
import { TypingLoaderComponent } from '@components/typing-loader/typing-loader.component';
import { OpenaiService } from '../../services';
import { Message } from '@interfaces/message.interface';
import { TextMessageBoxComponent } from '@components/text-boxes/text-message-box/text-message-box.component';

@Component( {
  selector: 'app-pros-const-page',
  standalone: true,
  imports: [
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
  ],
  templateUrl: './pros-const-page.component.html',
  styleUrl: './pros-const-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export default class ProsConstPageComponent {
  openAiService = inject( OpenaiService );

  messages = signal<Message[]>( [] );
  isLoading = signal( false );


  handleMessage( event: string ) {

    this.messages.update( prev => [
      ...prev,
      {
        text: event,
        isGpt: false,
      },
    ] );

    this.isLoading.set( true );
    this.openAiService.prosConsDiscusser( event ).subscribe( res => {
      this.isLoading.set( false );
      this.messages.update( prev => [
        ...prev,
        {
          text: res.content,
          isGpt: true,
        },
      ] );
    } );
  }
}
