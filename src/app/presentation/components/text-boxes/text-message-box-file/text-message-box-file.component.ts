import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export interface TextMessageEvent {
  prompt: string | null | undefined;
  file: File;
}

@Component( {
  selector: 'app-text-message-box-file',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './text-message-box-file.component.html',
  styleUrl: './text-message-box-file.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class TextMessageBoxFileComponent {
  @Input() placeholder = '';

  @Output() onMessage = new EventEmitter<TextMessageEvent>();

  fb = inject( FormBuilder );
  form = this.fb.group( {
    prompt: '',
    file: this.fb.control<File | null | undefined>( null, Validators.required ),
  } );
  file?: File;

  handleSubmit() {
    if ( this.form.invalid ) return;

    const { prompt, file } = this.form.value;

    if ( !file ) return;

    this.onMessage.emit( {
      prompt,
      file,
    } );

    this.form.reset();
  }

  handleSelectedFile( event: Event ) {
    const file = ( event.target as HTMLInputElement )?.files?.item( 0 );

    this.form.controls.file.setValue( file );
  }
}
