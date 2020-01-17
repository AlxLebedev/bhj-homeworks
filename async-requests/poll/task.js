const title = document.getElementById('poll__title');
const answersField = document.getElementById('poll__answers');

const xhrPoll = new XMLHttpRequest();
xhrPoll.onreadystatechange = function() {
    if (xhrPoll.readyState === 4 && xhrPoll.status === 200) {
        const pollId = JSON.parse(xhrPoll.responseText).id;
        const pollData = JSON.parse(xhrPoll.responseText).data;
        
        title.innerText = pollData.title;

        for (pollAnswer of pollData.answers) {
            const htmlAnswer = `<button class="poll__answer">
                                    ${pollAnswer}
                                </button>`;
            answersField.insertAdjacentHTML('beforeend', htmlAnswer);
        };

        const answerButtons = Array.from(document.getElementsByClassName('poll__answer'));
        for (button of answerButtons) {
            button.addEventListener('click', function() {
                const xhrVote = new XMLHttpRequest();
                xhrVote.onreadystatechange = function() {
                    if (xhrVote.readyState === 4 && xhrVote.status === 200) {
                        const voteData = JSON.parse(xhrVote.responseText).stat;

                        answersField.innerHTML = '';

                        for (vote of voteData) {
                            const voteItem = `<div class="vote-item">
                                                <div class="vote-item-answer">
                                                    ${vote.answer}:
                                                </div>
                                                <div class="vote-item-value">
                                                    ${vote.votes}
                                                </div>
                                            </div>`;
                            answersField.insertAdjacentHTML('beforeend', voteItem);
                            console.log(vote.answer);
                            console.log(vote.votes)
                        }
                    }
                }
                xhrVote.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                xhrVote.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhrVote.send(`vote=${pollId}&answer=${answerButtons.indexOf(this)}`);

                alert('Thanks! Your vote is counted.');
            });
        };
    };
};

xhrPoll.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhrPoll.send();