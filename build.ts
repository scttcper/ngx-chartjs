import { copyFileSync } from 'fs';
import { ngPackagr } from 'ng-packagr';
import { join } from 'path';

async function main() {
  // build packages
  await ngPackagr()
    .forProject(join(process.cwd(), 'src/lib/package.json'))
    .build();

  // copy everything else
  copyFileSync('README.md', join(process.cwd(), 'dist/README.md'));
  copyFileSync('LICENSE', join(process.cwd(), 'dist/LICENSE'));
}

main()
  .then(() => console.log('success'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
