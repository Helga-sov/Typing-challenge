import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  randomText = lorem.sentence();
  typedText = '';

  onInput(value: any) {
    this.typedText = value.target.value;
  }

  compare(randomLetter: string, typedLetter: string) {
    if (!typedLetter) return 'pending';

    return randomLetter === typedLetter ? 'correct' : 'wrong';
  }
}
