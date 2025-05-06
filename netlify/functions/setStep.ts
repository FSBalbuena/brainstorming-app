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
  const { sessionId, value } = JSON.parse(event.body || '{}');
  await db.ref(`brainstorming/${sessionId}/step`).set(value);

  return {
    statusCode: 200,
    body: JSON.stringify({success: true}),

  };
};