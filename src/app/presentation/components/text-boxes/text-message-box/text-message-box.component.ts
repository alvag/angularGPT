import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component( {
  selector: 'app-text-message-box',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './text-message-box.component.html',
  styleUrl: './text-message-box.component.scss',
} )
export class TextMessageBoxComponent {
  @Input() placeholder = '';
  @Input() disableCorrections = false;

  @Output() onMessage = new EventEmitter<string>();

  fb = inject( FormBuilder );
  form = this.fb.group( {
    prompt: [ '', Validators.required ],
  } );

  handleSubmit() {
    if ( this.form.invalid ) return;

    const { prompt } = this.form.value;

    this.onMessage.emit( prompt ?? '' );
    this.form.reset();
  }
}
