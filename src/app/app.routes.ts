import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => {
      const { AppComponent } = await import('../components/App/App.component');
      return AppComponent;
    },
  },
];
