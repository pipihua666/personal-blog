// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBackEndIndex from '../../../app/controller/back_end/index';
import ExportFontEndIndex from '../../../app/controller/font_end/index';

declare module 'egg' {
  interface IController {
    backEnd: {
      index: ExportBackEndIndex;
    }
    fontEnd: {
      index: ExportFontEndIndex;
    }
  }
}
