const quotes = [
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author: "사무엘 존슨"
    },
    {
        quote:"피할 수 없으면 즐겨라 !",
        author:"로버트 엘리엇"
    }
    ,
    {
        quote:"절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다. " ,
        author:"L.론허 바드"
    },
    {
        quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
        author:"제임스 오펜하임"
    },
    {
        quote:"너무 소심하고 까다롭게 자신의 행동을 고민하지 말라. 모든 인생은 실험이다. 더 많이 실험할 수록 더 나아진다.",
        author:"랄프 왈도 에머슨"
    },
    {
        quote:"좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안된다.",
        author:"단테"
    },
    {
        quote:"마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author:"이소룡"
    },
    {
        quote:"만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리 자신에 깜짝 놀랄 것이다.",
        author:"에디슨"
    },
    {
        quote:"물러나서 조용하게 구하면 배울 수 있는 스승은 많다. 사람은 가는 곳 마다 보는 것 마다 모두 스승으로서 배울 것이 많은 법이다.",
        author:"맹자"
    },
    {
        quote:"세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다.",
        author:"헬렌켈러"
    },
    {
        quote:"문제는 목적지에 얼마나 빨리 가느냐가 아니라 그 목적지가 어디냐는 것이다.",
        author:"메이벨 뉴컴버"
    },
    {
        quote:"문제점을 찾지 말고 해결책을 찾으라",
        author:"헨리포드"
    },
    {
        quote:"도중에 포기하지 말라 . 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자",
        author:"헨리포드"
    },
    {
        quote:"사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
        author:"괴테"
    },
    {
        quote:"성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다",
        author:"알랭"
    },
    {
        quote:"그대의 하루 하루를 그대의 마지막 날이라고 생각하라",
        author:"호라티우스"
    },
    {
        quote:"지금이야 말로 일할때다. 지금이야말로 싸울때다. 지금이야말로 나를 더 훌륭한 사람으로 만들때다 오늘 그것을 못하면 내일 그것을 할수있는가.",
        author:"토마스 아켐피스"
    }
]

const divQuote = document.querySelector(".quote");
const quote = document.querySelector(".quote__quote");
const author = document.querySelector(".quote__author");

const randQuote = quotes[Math.floor(Math.random()*quotes.length)]

console.log(randQuote);
quote.innerText = randQuote.quote;
author.innerText = randQuote.author;
