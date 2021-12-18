new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("吕志冲 && 张若冰")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("即将迎来我们八十周日纪念日了 ~ ~")
    .pause(3000)
    .delete(null, {
        delay: 500
    })
    .type("可惜马上就要分别了，舍不得你啊！")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();