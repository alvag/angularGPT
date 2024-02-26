import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

interface Option {
  id: string;
  text: string;
}

export interface TextMessageBoxEvent {
  prompt: string;
  selectedOption: string;
}

@Component( {
  selector: 'app-text-message-box-select',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './text-message-box-select.component.html',
  styleUrl: './text-message-box-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class TextMessageBoxSelectComponent {
  @Input() placeholder = '';
  @Input( { required: true } ) options!: Option[];

  @Output() onMessage = new EventEmitter<TextMessageBoxEvent>();

  fb = inject( FormBuilder );
  form = this.fb.group( {
    prompt: [ '', Validators.required ],
    selectedOption: [ '', Validators.required ],
  } );

  handleSubmit() {
    if ( this.form.invalid ) return;

    const { prompt, selectedOption } = this.form.value;

    this.onMessage.emit( {
      prompt: prompt!,
      selectedOption: selectedOption!,
    } );
    this.form.reset();
  }
}
