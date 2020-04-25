// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBackEndIndex from '../../../app/service/back_end/index';
import ExportFontEndIndex from '../../../app/service/font_end/index';

declare module 'egg' {
  interface IService {
    backEnd: {
      index: ExportBackEndIndex;
    }
    fontEnd: {
      index: ExportFontEndIndex;
    }
  }
}
