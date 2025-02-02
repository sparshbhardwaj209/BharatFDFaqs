import AdminJS from 'adminjs';
import { buildRouter } from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose';

import FAQ from '../models/Faq.js';

// registerAdapter(AdminJSMongoose);
AdminJS.registerAdapter(AdminJSMongoose);

const adminJs = new AdminJS({
  resources: [
    {
      resource: FAQ,
      options: {
        properties: {
          answer: {
            type: 'richtext',
          },
          question_hi: { isVisible: { list: false, edit: false, filter: false, show: true } },
          answer_hi: { isVisible: { list: false, edit: false, filter: false, show: true } },
          question_bn: { isVisible: { list: false, edit: false, filter: false, show: true } },
          answer_bn: { isVisible: { list: false, edit: false, filter: false, show: true } },
        },
      },
    },
  ],
  rootPath: '/admin',
  branding: {
    companyName: 'FAQ Admin',
    softwareBrothers: false,
  },
});

const adminRouter = buildRouter(adminJs);
export default adminRouter;
