const poll  = new Map();

function addOption(option) {
  if (option === "") {
    return `Option cannot be empty.`
  }
  if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  } else {
    return `Option "${option}" already exists.`
  }
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  if (poll.get(option).has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  poll.get(option).add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

function displayResults() {
  let results = "";

  poll.forEach((voters, options) => 
    results += `${options}: ${voters.size} vote${voters.size === 1 ? "" : "s"}\n`);

  return `Poll Results:\n${results}`.trimEnd();
}


addOption("China");
addOption("Philippines");
addOption("Russia");

vote("China", "Ame");
vote("Philippines", "Kuku");
vote("Russia", "Collapse");
vote("China", "Fy")

console.log(displayResults());

/*
sample output

Poll Results:
China: 2 votes
Philippines: 1 vote
Russia: 1 vote
*/