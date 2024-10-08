import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component( {
  selector: 'app-gpt-message-orthography',
  standalone: true,
  imports: [],
  templateUrl: './gpt-message-orthography.component.html',
  styleUrl: './gpt-message-orthography.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class GptMessageOrthographyComponent {
  @Input( { required: true } ) userScore!: number;
  @Input( { required: true } ) text!: string;
  @Input( { required: true } ) errors: string[] = [];
}
