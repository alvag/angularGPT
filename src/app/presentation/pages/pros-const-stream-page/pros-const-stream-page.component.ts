import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent } from '@components/chat-bubbles/chat-message/chat-message.component';
import { MyMessageComponent } from '@components/chat-bubbles/my-message/my-message.component';
import { TypingLoaderComponent } from '@components/typing-loader/typing-loader.component';
import { OpenaiService } from '../../services';
import { Message } from '@interfaces/message.interface';
import { TextMessageBoxComponent } from '@components/text-boxes/text-message-box/text-message-box.component';

@Component( {
  selector: 'app-pros-const-stream-page',
  standalone: true,
  imports: [
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
  ],
  templateUrl: './pros-const-stream-page.component.html',
  styleUrl: './pros-const-stream-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export default class ProsConstStreamPageComponent {
  openAiService = inject( OpenaiService );

  messages = signal<Message[]>( [] );
  isLoading = signal( false );
  abortSignal = new AbortController();

  async handleMessage( event: string ) {

    this.abortSignal.abort();
    this.abortSignal = new AbortController();

    this.messages.update( prev => [
      ...prev,
      {
        text: event,
        isGpt: false,
      },
      {
        isGpt: true,
        text: '...',
      },
    ] );

    const stream = this.openAiService.prosConsDiscusserStream( event, this.abortSignal.signal );

    for await ( const text of stream ) {
      this.handleStreamResponse( text );
    }
  }

  handleStreamResponse( message: string ) {
    this.messages().pop();

    const messages = this.messages();

    this.messages.set( [
      ...messages,
      {
        text: message,
        isGpt: true,
      },
    ] );
  }
}
