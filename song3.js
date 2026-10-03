setCps(72/60/4)

const tr606 = "tr606"
const akai = "akaimpc60"
const hr16 = "hr16"

$: sound("bd")
    .beat("<7,8.1,16>", 16)
    .gain(slider(1,0,1))
    .bank(akai)

$: note("G1")
    .beat("<7,8.1,16>", 16)
    .gain(slider(1,0,1))

$: sound("sd")
    .beat("<2.1, 6.1, 12.1>", 16)
    .gain(slider(0.494,0,1))
    .room(slider(1,0,1))
    .bank(hr16)

$: sound("hh")
    .beat("<1.1, 3.1, 5.1, 7.1, 9.1, 11, 12.9>", 16)
    .gain(slider(1,0,1))
    .room(slider(1,0,1))
    .bank(tr606)

$: sound(`
[- cr - -]
`)
.delay(slider(100,0,1000))
.gain(slider(0.022,0,1))
.room(slider(0.781,0,1))

$: chord("<B-9 E-9>/2")
    .voicing()
    .lpf(slider(1000,0,1000))
    .gain(slider(0.586,0,1))
    .room(slider(1,0,1))
    .markcss('color:white;background-color:lightgreen')

$: note(irand(4).segment(16).scale("e:minor"))
    .s("sawtooth")
    .lpf(slider(296,0,1000))
    .delay(slider(0.201,0,1))
    .gain(slider(1,0,1))
    .room(slider(0,0,1))
._pianoroll()

_$: n(mousex.segment(2).range(0,15)).scale("e:minor")
  .s("sine")
  .gain(1)

// F# G D C# B C#


// E2 F# D ------- [#F G C# -----------]
// E2 F C# ------- []