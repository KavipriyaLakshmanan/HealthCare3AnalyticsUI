import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/HealthCare3AnalyticsUI/', // Replace <repository-name> with your repo's name
  plugins: [react()],

});
