import config from 'config/firebase';

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

  createNewSession = body => this.session(body.id).set(body);
}

export default BrainstormingService;
