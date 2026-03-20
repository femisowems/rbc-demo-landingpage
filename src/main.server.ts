import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// SSR/Prerender manual polyfills
if (typeof window === 'undefined') {
  (global as any).window = {};
  (global as any).document = (global as any).window.document = {
    querySelectorAll: () => [],
    querySelector: () => null,
    getElementById: () => null,
    createElement: () => ({ style: {}, appendChild: () => {} }),
    addEventListener: () => {},
    removeEventListener: () => {},
    documentElement: { style: {} },
    body: { style: {} },
  };
  (global as any).self = (global as any).window;
  (global as any).navigator = { userAgent: '' };
  (global as any).getComputedStyle = () => ({ getPropertyValue: () => '' });
}

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
