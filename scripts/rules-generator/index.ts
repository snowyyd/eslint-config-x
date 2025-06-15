import { writeFile } from 'node:fs/promises';
import node from './rules/node.ts';
import { genTSConfig2 } from './utils.ts';

await writeFile('./test-output.ts', genTSConfig2(node));
