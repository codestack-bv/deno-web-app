import { Application } from './deps.ts';

const PORT = 80;
const app = new Application();

app
  .static('/css', 'public/assets/css')
  .static('/fonts', 'public/assets/fonts')
  .static('/img', 'public/assets/img')
  .static('/js', 'public/assets/js')
  .file('/', 'public/index.html')
  .start({ port: PORT });

console.log(`Server started on port ${PORT}`);
