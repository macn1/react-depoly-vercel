import { Resend } from 'resend';
import { useEffect } from 'react';

const resend = new Resend('re_5nzCNvTS_5Z2wtALNX5snRUxnPSUqQPXC');
// export default async function POST(){
//     await resend.emails.send({
//       from: 'onboarding@resend.dev',
//       to: 'pranavpranab@gmail.com',
//       subject: 'Hello World',
//       html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
//     });
//   };


  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: ['pranavpranab@gmail.com'],
    subject: 'hello world',
    text: 'it works!',
    attachments: [
      {
        filename: 'invoice.pdf',
        content: "invoiceBuffer",
      },
    ],
    headers: {
      'X-Entity-Ref-ID': '123456789',
    },
    tags: [
      {
        name: 'category',
        value: 'confirm_email',
      },
    ],
  });