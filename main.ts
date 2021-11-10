input.onButtonPressed(Button.A, function () {
    teller01 = teller01 + 1
    teller01 = teller01 % roter_rull_teller
    basic.showNumber(teller01)
})
input.onButtonPressed(Button.AB, function () {
    ct = 0
    basic.showString("Txt")
    basic.showString(telletekst)
    basic.showString("Nr")
    basic.showNumber(parseFloat(telletekst))
    tallet = parseFloat(telletekst)
    // NB, lar være å vise tallet pga scrolling, men det kan også gjøres. 
    // Vising til skjerm går også utover "sekund" tics
    for (let index = 0; index < tallet; index++) {
        music.playTone(165, music.beat(BeatFraction.Sixteenth))
        music.rest(music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Whole))
        if (ct % 2 == 0) {
            basic.showIcon(IconNames.SmallDiamond)
        } else {
            basic.showIcon(IconNames.Diamond)
        }
        ct += 1
    }
    basic.showString("0")
    music.playMelody("C E C D D C C C5 ", 120)
    music.rest(music.beat(BeatFraction.Breve))
})
input.onButtonPressed(Button.B, function () {
    telletekst = "" + telletekst + convertToText(teller01)
    basic.showNumber(teller01)
    basic.showString("T")
    basic.showString("" + telletekst + ".")
    teller01 = 0
    basic.showNumber(teller01)
})
input.onGesture(Gesture.Shake, function () {
    telletekst = ""
    teller01 = 0
    basic.showNumber(teller01)
})
let tallet = 0
let ct = 0
let roter_rull_teller = 0
let teller01 = 0
let telletekst = ""
telletekst = "Rist starter. A legger inn tall. B neste siffer A+B beregner."
teller01 = 0
roter_rull_teller = 10
// Plasser under show om en vil se info-melding
telletekst = ""
basic.showString(telletekst)
basic.forever(function () {
	
})
