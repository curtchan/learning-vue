<template>
    <div class="panel panel-default">
        <div class="panel-heading text-center">What's {{ questionNumber1 }} {{ questionSymbol }} {{ questionNumber2 }}</div>
        <div class="panel-body">
            <div class="row">
                <div class="col-sm-6 text-center"
                    v-for="(answerData, index) in answers"
                    style="margin-bottom: 5px"
                >
                    <input type="button" :value="answerData.number" class="btn"
                           :class="{
                            'btn-primary': !answerData.clicked,
                            'btn-danger': answerData.clicked && answerData.number !== answer
                            }"
                           @click="clickedOn(index)">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {eventBus} from "./../main";

    export default {
        data() {
            return {
                questionNumber1: 27,
                questionNumber2: 24,
                questionSymbol: '-',
                answers: [],
                answer: -3,
            }
        },
        methods: {
            reset() {
                this.questionNumber1 = this.randomNumber(-30, 30);
                this.questionNumber2 = this.randomNumber(-30, 30);
                this.questionSymbol = this.randomNumber(0, 1) === 1 ? '-' : '+';
                this.calculateAnswer();
                this.generateAnswers();
            },
            randomNumber(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            },
            calculateAnswer() {
                switch(this.questionSymbol) {
                    case '+':
                        return this.answer = this.questionNumber1 + this.questionNumber2;
                    case '-':
                        return this.answer = this.questionNumber1 - this.questionNumber2;
                }
            },
            generateAnswers() {
                let answers = [this.answer];
                let answerObjects = [];

                while(answers.length < 4) {
                    let rand = this.randomNumber(-5, 5) + this.answer;
                    if(!answers.includes(rand)) {
                        answers.push(rand);
                    }
                }

                answers = this.shuffle(answers);
                answers.forEach((el) => {
                    answerObjects.push({
                        number: el,
                        clicked: false,
                    });
                });

                this.answers = answerObjects;
            },
            shuffle(array) {
                let currentIndex = array.length, temporaryValue, randomIndex;

                // While there remain elements to shuffle...
                while (0 !== currentIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            },
            clickedOn(index) {
                let answer = this.answers[index];

                this.answers[index].clicked = true;

                if(answer.number === this.answer) {
                    eventBus.clickedCorrectAnswer();
                } else {
                    alert(answer.number + ', Is not the right answer! Keep trying!');
                }
            }
        },
        created() {
            this.reset();

            eventBus.$on('clickedRetry', () => {
                this.reset();
            });
        }
    }
</script>