/* ======================================================
   Escape Engine v1.0
   제작자가 수정하는 곳
====================================================== */

/*
    게임 기본 설정
*/

const GAME = {

    // 게임 제목
    title: "탐험가 V1",

    // 시작 목숨
    life: 10,

    // 시작 힌트 개수
    hint: 10,

    // 교사모드 비밀번호
    teacherPassword: "7777"

};


/* ======================================================
    Stage 설정

    folder
        stages 안의 폴더 이름

    story
        story 폴더 이미지 개수

    puzzle
        puzzle 폴더 이미지 개수

    clear
        clear 폴더 이미지 개수
====================================================== */

const STAGES = [

    {

        title: "신비한 숲",

        folder: "stage1",

        story: 5,

        puzzle: 1,

        clear: 2,

        answer: "4",

        hints: [
    "9+6이 왜 3이 되는걸까?",
    "15-3=??",
    "지금이 몇 시지?"
]

    },

    {

        title: "버섯 마을",

        folder: "stage2",

        story: 3,

        puzzle: 1,

        clear: 2,

        answer: "18",

        hints: [
    "글자를 하나씩 하나씩 자세히 살펴보자",
    "메뉴를 따라서 써볼까?",
    "하나하나 정자로 적어보자!"
]

    },

       {

        title: "갈림길",

        folder: "stage3",

        story: 3,

        puzzle: 1,

        clear: 2,

        answer: "1225",

        hints: [
    "숫자들에 점을 찍어보자",
    "내 생일이 몇월 며칠이었지?",
    "달력을 살펴볼까?"
]

    },

       {

        title: "안개 낀 호수",

        folder: "stage4",

        story: 2,

        puzzle: 1,

        clear: 2,

        answer: "1113339252",

         hints: [
    "정답은 쉼표없이 숫자로만 되어있다."
    "위와 아래가 다르다고?",
    "더하기와 빼기"
]

    },

       {

        title: "함정",

        folder: "stage5",

        story: 3,

        puzzle: 1,

        clear: 2,

        answer: "ㅊㅍㄱ",

        hints: [
    "여기에도 순서가 있을까?",
    "천방지축 어리둥절 빙글빙글 돌아가는~",
    "하나 둘 셋 야!!"
]

    },

       {

        title: "황금 나침반",

        folder: "stage6",

        story: 4,

        puzzle: 1,

        clear: 6,

        answer: "42",

        hints: [
    "차이를 비교해 보자"
    "얼마씩 변하는거지?"
]

    }
];


/* ======================================================
    수정 금지

    아래부터는 엔진에서 사용하는 변수
====================================================== */

let currentStage = 0;

let currentStory = 1;

let currentPuzzle = 1;

let currentClear = 1;

let gameMode = "story";

let life = GAME.life;

let hintCount = GAME.hint;

let currentHintLevel = 0;

let timer = 0;
