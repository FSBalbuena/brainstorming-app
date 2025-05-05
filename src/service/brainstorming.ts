import config from '@/config/firebase';

import app from 'firebase/app';
import 'firebase/database';

class BrainstormingService {
  constructor() {
    try {
      app.initializeApp(config);
    } catch (err) {
      if (!/already exists/.test(err.message)) {
        console.error(`BrainstormingService initialization error raised`);
      }
    }
    this.db = app.database();
  }
  /*
 --- Brainstorming API ---
*/
  session = id => this.db.ref(`brainstorming/${id}`);

  getSession = id =>
    this.session(id)
      .once('value')
      .then(data => data.val());

  sessionIdeas = id => this.db.ref(`brainstorming/${id}/ideas`);

  setIdea = (sessionId, idea) =>
    this.db.ref(`brainstorming/${sessionId}/ideas/${idea.id}`).set(idea);

  sessionSteps = id => this.db.ref(`brainstorming/${id}/step`);
  setStep = (id, value) => this.sessionSteps(id).set(value);
  createNewSession = body => this.session(body.id).set(body);
}

export default BrainstormingService;
