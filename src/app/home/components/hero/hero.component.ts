import { Component } from '@angular/core'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {
  constructor() {}

  typewriterTexts = [
    'saas',
    'Event Managment',
    'Digital Payment',
    'Directory',
    'Coming Soon Pages',
  ]
  typewriterTextsJson!: string
  currentText!: string
  private currentTextIndex = 0
  private currentCharIndex = 0
  private deleting = false

  ngOnInit(): void {
    this.typewriterTextsJson = JSON.stringify(this.typewriterTexts)
    this.typeText()
  }

  private typeText(): void {
    const text = this.typewriterTexts[this.currentTextIndex]

    if (this.deleting) {
      this.currentText = text.substr(0, this.currentCharIndex)
      this.currentCharIndex--
    } else {
      this.currentText = text.substr(0, this.currentCharIndex + 1)
      this.currentCharIndex++
    }

    if (this.currentCharIndex < 0) {
      this.deleting = false
      this.currentCharIndex = 0

      this.currentTextIndex++
      if (this.currentTextIndex === this.typewriterTexts.length) {
        this.currentTextIndex = 0
      }
    } else {
      if (this.currentCharIndex > text.length) {
        setTimeout(() => {
          this.deleting = true
          this.currentCharIndex = text.length
        }, 800)
      }
    }

    if (this.deleting) {
      setTimeout(() => {
        this.typeText()
      }, 50) // Delay before deleting the next character
    } else {
      setTimeout(() => {
        this.typeText()
      }, 50) // Delay before typing the next character
    }
  }
}
