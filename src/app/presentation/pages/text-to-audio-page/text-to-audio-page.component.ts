import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test-to-audio-page',
  standalone: true,
  imports: [],
  templateUrl: './text-to-audio-page.component.html',
  styleUrl: './text-to-audio-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TextToAudioPageComponent {

}
