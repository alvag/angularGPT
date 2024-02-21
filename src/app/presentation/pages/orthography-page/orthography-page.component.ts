import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessageComponent } from '../../components/chat-bubbles/chat-message/chat-message.component';
import { MyMessageComponent } from '../../components/chat-bubbles/my-message/my-message.component';

@Component( {
  selector: 'app-orthograpy-page',
  standalone: true,
  imports: [
    ChatMessageComponent,
    MyMessageComponent,
  ],
  templateUrl: './orthography-page.component.html',
  styleUrl: './orthography-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export default class OrthographyPageComponent {

}
