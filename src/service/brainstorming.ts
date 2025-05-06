import config from '@/config/firebase';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child } from 'firebase/database';
class BrainstormingService {
  private db
  constructor() {
    let app
    try {
      // Initialize Firebase
      app = initializeApp(config);

    } catch (err) {
      if (!/already exists/.test(err.message)) {
        console.error(`BrainstormingService initialization error raised`);
        console.log(err);
      }
    }

    this.db = getDatabase(app)
  }

  private call = async (endpoint: string, data?: any) => {
    const res = await fetch(`/.netlify/functions/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!res.ok) {
      throw new Error(`Error calling ${endpoint}`);
    }
    return res.json();
  };

  /*
 --- Brainstorming subscriber API ---
*/

sessionIdeas = sessionId => ref(this.db,`brainstorming/${sessionId}/ideas`);
sessionSteps = sessionId => ref(this.db,`brainstorming/${sessionId}/step`);
getSession = (sessionId: string) => get(child(ref(this.db), `brainstorming/${sessionId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    return snapshot.val()
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


  /*
 --- Brainstorming Writer API ---
*/

  createNewSession = body => this.call('createSession', body)

  setIdea = (sessionId: string, idea) => this.call('setIdea', { sessionId, idea });

  setStep = (sessionId, value) => this.call('setStep', { sessionId, value });
}

export default BrainstormingService;
