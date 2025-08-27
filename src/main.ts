import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import reportWebVitals from './utils/reportWebVitals';

bootstrapApplication(App, appConfig)
  .then(() => {
    reportWebVitals();
  })
  .catch((err) => {
    console.error(err);
  });
