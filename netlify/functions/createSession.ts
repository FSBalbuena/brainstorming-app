import { Handler } from '@netlify/functions';
import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.VITE_APP_FIREBASE_SERVICE_ACCOUNT!)),
    databaseURL: process.env.VITE_APP_FIREBASE_DATABASE_URL,
  });
}

const db = admin.database();

export const handler: Handler = async (event) => {
  const body = JSON.parse(event.body || '{}');
  await db.ref(`brainstorming/${body.id}`).set(body)
  const response = await db.ref(`brainstorming/${body.id}`).once('value').then(data => data.val());

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};