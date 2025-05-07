export default class BrainstormingService {
  private mockDb
  constructor() {
    console.log('Mock BrainstormingService initialized');
    this.mockDb = {}; // Simulated in-memory database
  }
  

  private call = async (endpoint: string, data?: any) => {
    if(data){
      this.mockDb[endpoint] = data
    }
    return Promise.resolve(this.mockDb[endpoint]);
  };

  // Mock createNewSession
  createNewSession = body => this.call(`brainstorming/${body.id}`, body);

  // Mock getSession
  getSession = id => this.call(`brainstorming/${id}`)

  // Mock setStep CHECK
  setStep = (id, value) => this.call(`brainstorming/${id}/step`, value);

 // Mock setIdea CHECK
  setIdea = (sessionId, idea) => {
    const ideas = this.call(`brainstorming/${sessionId}/ideas`);
    if (!ideas) {
      this.call(`brainstorming/${sessionId}/ideas`, {});
    }
    return this.call(`brainstorming/${sessionId}/ideas/${idea.id}`, idea);

  };

  // Simulated sessionIdeas reference
  sessionIdeas = id => ({
    on: jest.fn((_, callback) => {
      const data = {
        val: () => this.mockDb[`brainstorming/${id}/ideas`] || {},
      };
      setTimeout(() => {
        callback(data);
      }, 1000);
    }),
    off: jest.fn(),
  });

  // Simulated sessionSteps reference
  sessionSteps = id => ({
    on: jest.fn((_, callback) => {
      const data = {
        val: () => this.mockDb[`brainstorming/${id}/step`] || null,
      };
      setTimeout(() => {
        callback(data);
      }, 1000);
    }),
    off: jest.fn(),
  });
}
