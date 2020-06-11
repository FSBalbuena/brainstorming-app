/**
 * Used on containers/Brainstorming/StepViewsContainer
 */
export const headers = [
  {
    content: 'Idea submited by a team member',
    text: 'Idea',
    value: 'text',
    props: { colSpan: 3 },
  },
  {
    content: 'Idea`s strong points',
    text: 'Pros',
    value: 'pros',
    props: { colSpan: 3 },
  },
  {
    content: 'Idea`s week points',
    text: 'Cons',
    value: 'cons',
    props: { colSpan: 3 },
  },
  {
    content: 'Idea`s relevance',
    text: 'Rating',
    value: 'rating',
    props: { colSpan: 2, textAlign: 'center' },
  },
  {
    content: 'Click on the icon to edit',
    text: 'Edit',
    value: 'edit',
    props: { colSpan: 1, textAlign: 'center' },
  },
];

/**
 * ----- Used on containers/Brainstorming/StepsConatiner
 */

/**
 * returns step settings according to the current step
 * @param {number} currentStep
 * @param {function} onStepClick
 */
export const makeSteps = (currentStep, onStepClick, isSessionAdmin) =>
  [
    {
      step: 1,
      title: 'Add ideas',
      description:
        'All ideas are valid on this point, failure is not to write them!',
    },
    {
      step: 2,
      title: 'Points',
      description:
        'Go deeper with your ideas, think pros and cons, and rate them.',
    },
    {
      step: 3,
      title: 'Download your Brainstorming Session!',
    },
  ].map(step => ({
    ...step,
    active: step.step === currentStep,
    completed: step.step < currentStep,
    disabled: !isSessionAdmin || (step.step === 3 && currentStep === 1),
    onClick: onStepClick,
  }));

const makeRowFromArray = array => array.map(data => data.join(',') + '\n');

const parseSessionToCSV = session => {
  const sessionToCsv = { ...session, created: new Date().toDateString() };
  const headerColumns = ['admin', 'title', 'goal', 'created'];
  const ideasColumns = ['text', 'rating', 'pros', 'cons'];
  const credit = `Download from ${sessionToCsv.url}`;
  const headerText = headerColumns.map(field => sessionToCsv[field].trim());
  const ideasArray = sessionToCsv.ideas.map(idea =>
    ideasColumns.map(field => `${idea[field]}`.trim())
  );
  const headerRows = makeRowFromArray([
    headerColumns.concat(credit),
    headerText,
  ]);
  const ideasRows = makeRowFromArray([ideasColumns, ...ideasArray]);

  return [...headerRows, , , 'Ideas \n', ...ideasRows].join('');
};

export const createCSVSession = session => {
  const csv = parseSessionToCSV(session);
  var csvData = new Blob([csv], { type: 'text/csv' });
  return URL.createObjectURL(csvData);
};
