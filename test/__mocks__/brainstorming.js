export default class BrainstormingService {
  constructor() {
    console.log('Mock BrainstormingService initialized');
    this.mockDb = {}; // Simulated in-memory database
  }

  // Mock createNewSession
  createNewSession = body => {
    this.mockDb[`brainstorming/${body.id}`] = body;
    return Promise.resolve(body);
  };

  // Mock getSession
  getSession = id => {
    return Promise.resolve(this.mockDb[`brainstorming/${id}`] || {});
  };

  // Mock setStep CHECK
  setStep = (id, value) => {
    this.mockDb[`brainstorming/${id}/step`] = value;
    return Promise.resolve();
  };
  // Mock setIdea CHECK
  setIdea = (sessionId, idea) => {
    if (!this.mockDb[`brainstorming/${sessionId}/ideas`]) {
      this.mockDb[`brainstorming/${sessionId}/ideas`] = {};
    }
    this.mockDb[`brainstorming/${sessionId}/ideas`][idea.id] = idea;
    return Promise.resolve();
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
