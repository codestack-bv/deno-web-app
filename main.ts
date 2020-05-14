import { serve } from './deps.ts';
import { Application } from './deps.ts';

const PORT = 80;
const app = new Application();

app
  .file('/style.css', 'public/style.css')
  .file('/', 'public/index.html')
  .start({ port: PORT });

console.log(`Server started on port ${PORT}`);
