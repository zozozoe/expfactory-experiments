/*
reference: https://sites.google.com/a/decisionsciences.columbia.edu/dospert/
Blais, A-R. and E. U. Weber. 2006. “A Domain-specific Risk-taking (DOSPERT) Scale for Adult Populations.” Judgment and Decision Making, 1, 33-47.
*/

/* ************************************ */
/* Define helper functions */
/* ************************************ */

/* ************************************ */
/* Define experimental variables */
/* ************************************ */

// defining groups of questions that will go together.
var page_1_questions = ["Admitting that your tastes are different from those of a friend.", "Going camping in the wilderness.", "Betting a day's income at the horse races.", "Investing 10% of your annual income in a moderate growth diversified fund.", "Drinking heavily at a social function.", "Taking some questionable deductions on your income tax return."];
var page_2_questions = ["Disagreeing with an authority figure on a major issue.", "Betting a day's income at a high-stake poker game.", "Having an affair with a married man/woman.", "Passing off somebody else’s work as your own.", "Going down a ski run that is beyond your ability.", "Investing 5% of your annual income in a very speculative stock."];
var page_3_questions = ["Going whitewater rafting at high water in the spring.", "Betting a day's income on the outcome of a sporting event.", "Engaging in unprotected sex.", "Revealing a friend's secret to someone else.", "Driving a car without wearing a seat belt.", "Investing 10% of your annual income in a new business venture."];
var page_4_questions = ["Taking a skydiving class.", "Riding a motorcycle without a helmet.", "Choosing a career that you truly enjoy over a more secure one.", "Speaking your mind about an unpopular issue in a meeting at work.", "Sunbathing without sunscreen.", "Bungee jumping off a tall bridge."];
var page_5_questions = ["Piloting a small plane.", "Walking home alone at night in an unsafe area of town.", "Moving to a city far away from your extended family.", "Starting a new career in your mid-thirties.", "Leaving your young children alone at home while running an errand.", "Not returning a wallet you found that contains $200."];

// definiting response scale.
var scale = ["Extremely Unlikely", "Moderately Unlikely", "Somewhat Unlikely", "Not Sure", "Somewhat Likely", "Moderately Likely", "Extremely Likely"];

//defining preamble text for each page.
var pretext =['<p><strong>Please indicate the likelihood that you would engage in the described activity or behavior if you were to find yourself in that situation.</strong></p>']

/* ************************************ */
/* Set up jsPsych blocks */
/* ************************************ */

/* define static blocks */

var welcome_block = {
  type: 'text',
  text: '<div class = centerbox><p class = block-text>Welcome to this survey. Press <strong>enter</strong> to begin.</p></div>',
  cont_key: 13
};

var instructions_block = {
  type: 'instructions',
  pages: [
    '<div class = centerbox><p class = block-text>For each of the following statements, please indicate the <strong>likelihood</strong> that you would engage in the described activity or behavior if you were to find yourself in that situation.<br><br> Press <strong>enter</strong> to begin.</p></div>',
  ],
  key_forward: 13,
  allow_backwards: false
};

//Note: this could be made nicer if the radio-buttonlist custom plugin is improved. For now just going with built-in functionality

var likert_block = {
    type: 'survey-likert',
    preamble: [pretext, pretext, pretext, pretext, pretext],
    questions: [page_1_questions, page_2_questions, page_3_questions, page_4_questions, page_5_questions],
    labels: [[scale, scale, scale, scale, scale, scale], [scale, scale, scale, scale, scale, scale], [scale, scale, scale, scale, scale, scale], [scale, scale, scale, scale, scale, scale], [scale, scale, scale, scale, scale, scale]], // need one scale for every question on a page
    intervals: [[7,7,7,7,7,7], [7,7,7,7,7,7], [7,7,7,7,7,7], [7,7,7,7,7,7], [7,7,7,7,7,7]] // note the the intervals and labels don't necessarily need to match.
};

var end_block = {
  type: 'text',
  text: '<div class = centerbox><p class = center-block-text>Congratulations for completing this task!</p><p class = center-block-text>Press <strong>enter</strong> to continue.</p></div>',
  cont_key: 13
};


//Set up experiment
var dospert_rt_experiment = []
dospert_rt_experiment.push(welcome_block);
dospert_rt_experiment.push(instructions_block);
dospert_rt_experiment.push(likert_block);
dospert_rt_experiment.push(end_block)