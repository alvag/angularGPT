import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component( {
  selector: 'app-chat-message',
  standalone: true,
  imports: [
    MarkdownComponent,
  ],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class ChatMessageComponent {
  @Input( { required: true } ) text!: string;
}
