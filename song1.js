//setCps(cycles, seconds. division)
//140 tempo, 60/4 at 140 bpm in 4/4 timing.
setCps(112/60/4)

/*
To play or update press: 
Ctrl + Enter

To Pause press:
Ctrl + .

To Comment a line press:
Ctrl + /
*/

/* 
Drum Machine/Sequencer

Using the sound function you can express a sequencer or drum nachine. 
like a DAW (Digital Audio Workstation) or Synthesizer.
*/

// Here is a simple rock beat in 4/4
_$: sound(`
[bd - - -],
[- - sd -],
[hh hh hh hh]
`).cpm(120/4)

// $: s(bd!2).gain(.2)
// $: s(sd!4).gain(.2)
_$: s("hh!8").gain(.2)

// Add randomness to the sequence through mulplication and the value gain is randomized.
_$: s("hh!8").gain(.2).sometimesBy(.1, x => x.ply("2 | 4"))
_$: s("white!8").decay(sine.fast(4).mul(.8)).gain(.4).sometimesBy(.1, x => x.ply("2 | 4"))

// Structures here.
_$: s("bd").struct("1 0 0 1 0 1 0 0")

// Using a modulus operator to create polyrhythms 
_$: s("bd").struct("{1 0 0 1 0 1 0}%8")

// declaring a variable
const tr909 = "tr909"

// high hats every eigth note sound bank of tr909 
_$: s("hh!8").bank(tr909).gain(.2)

// beat function (sequence "0 =>", division 16)
_$: s("sd").bank(tr909).beat("4,12", 16)

// eudcleian pattern (repetition over division)
_$: s("bd(4,16)").bank(tr909)

// Lazy Beat after one
_$: s("bd(5,16)").bank(tr909)

_$: s("bd(<5,7>,16)").bank(tr909)

$:  s("bd").beat("0, 7, 3, 10.2", 16).n(irand(5).ribbon(278, 2).bank(tr909))
_$: s("bd!16?".degradeBy(slider(0,0,1))).n(irand(5).ribbon(40,2)).bank(tr909)
_$: note("G2!16?".degradeBy(slider(0,0,1))).n(irand(5).ribbon(40,2)).sound("sin")
//$: note("E3!16".degradeBy(slider(1,0,1))).n(irand(5).ribbon(40,2)).sound("sin")
//$: note("G3!16".degradeBy(slider(1,0,1))).n(irand(5).ribbon(40,2)).sound("sin")
$: note("B3!16?".degradeBy(slider(0.615,0,1))).n(irand(5).ribbon(40,2)).sound("sin")
$: note("D4!16?".degradeBy(slider(0.319,0,1))).n(irand(5).ribbon(40,2)).sound("sin")
$: note("F#4!16?".degradeBy(slider(0,0,1))).n(irand(5).ribbon(40,2)).sound("sawtooth")

$: chord("[F#-9 <C#-9>]/2").voicing()
  .gain(slider(1,0,1))
  .room(.5)
_$: chord("[C#-9 EM9]/4").voicing()
  .gain(slider(0,0,1))
  .room(.5)
_$: chord("<G-7 Bb-7 D-7 [Em7 GM9]>").voicing()
  .gain(slider(0,0,1))
  .room(.5)

$: s("g2")
  .beat("8, 8.5, 12, 16", 16)
  .gain(slider(1,0,1))
  .room(slider(0,0,1))

$: s("sd").bank(tr909).beat("4.2,11", 16).gain(slider(1,0,1))
$: s("cp!16?").degradeBy(slider(0.357)).ribbon(10.041, 2).gain(slider(0.088,0,1))
$: s("hh!16").gain(.5).sometimesBy(.1, x => x.ply("2 | 4")).gain(slider(0.175,0,1))


// 278 e.g 280 seed for random number and constraint of patters to limit randomness
// $: s("bd").beat("0,7,3,10.2", 16).n(irand(5).ribbon(278, 2)).bank(tr909)
// beat("4,11" 16)

// sequencer pattern
_$: sound(`
[bd - - -][bd - - -][bd - - -][bd - - -],
[- - sd -][- - sd -][- - sd -][- - sd -],
[- hh - hh][- hh - hh][- hh - hh][- hh - hh],
[- - cp -][- - cp -][- - cp -][- - cp -]
`)

_$: sound(`
[bd - - -][[bd - bd] - - -][bd bd - -][bd - - -],
[- - sd -][- - sd -][- - sd -][- - sd -],
[hh hh*3 hh*2 hh*4][hh hh hh hh][hh hh hh hh*2],
[- - cp -][- - cp -][- - cp -][- - cp -]
`).bank("RolandTR808")

// Chord Voicings
_$: chord("<G-7 Bb-7 D-7 [Em7 GM9]>").voicing().room(.5)


// Bassline 
_$: note("[G2 [Bb2 Bb2] D2 [E2 B2]]/4").sound("sine")

// Visual 
// .punchcard