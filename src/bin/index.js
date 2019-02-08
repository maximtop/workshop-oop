#!/usr/bin/env node

import getGeo from '..';
import program from 'commander';
import { version } from '../../package';

program
  .version(version)
  .usage('get-geo [ip]')
  .arguments('[ip]')
  .action(async (ip) => {
    const result = await getGeo(ip);
    console.log(result);
  })
  .parse(process.argv);
