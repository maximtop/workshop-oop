#!/usr/bin/env node

import Geo from '..';
import program from 'commander';
import { version } from '../../package';

program
  .version(version)
  .usage('get-geo [ip]')
  .arguments('[ip]')
  .action(async (ip) => {
    const geo = new Geo();
    try {
      const geoData = await geo.getGeo(ip);
      console.log(geoData);
    } catch (e) {
      console.log(e.message);
    }
  })
  .parse(process.argv);
