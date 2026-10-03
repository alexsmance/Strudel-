setCps (120/60/4)

const dk = "korgddm110"

$: s("bd!4")
  .gain(slider(2,0,2)).bank(dk)

$: s("sd!2")
  .gain(slider(0.443)).bank(dk)

$: s("hh!16")
  .gain(slider(0.239,0,1))
  .sometimesBy(0, x => x.ply("2")).bank(dk)

$: s("cp!2")
  .gain(slider(0.647,0,1))
  .sometimesBy(0, x => x.ply("2")).bank(dk)

$: note("[e2 - e2 e2]")
  .s("sine")
  .gain(slider(0.591,0,1))
  .room(slider(1,0,1))

$: note(irand(16).segment(16).scale("e1:minor"))
  .s("sawtooth")
  .lpf(slider(500,0,500))
  .gain(slider(2,0,2))
  .room(slider(0.536,0,1))
  ._punchcard()

$: note(irand(16).segment(16).scale("g3:major"))
  .s("sawtooth")
  .lpf(slider(213.5,0,500))
  .delay(0)
  .gain(slider(1,0,1))
  .room(slider(1,0,1))
._punchcard()

$: note(irand(16).segment(16).scale("b3:minor"))
  .s("sawtooth")
  .lpf(slider(500,0,500))
  .delay(0)
  .gain(slider(1,0,1))
  .room(slider(1,0,1))
._punchcard()

$: note(irand(4).segment(16).scale("a:minor"))
  .s("sawtooth")
  .lpf(slider(500,0,500))
  .delay(slider(0,0,1))
  .gain(slider(1,0,1))
  .room(slider(1,0,1))
._pianoroll()

$: chord("<Amaj9, Emaj9>/4")
  .voicing()
  ,gain(slider(0.221,0,1))
  .room(slider(0.499,0,1))
.pianoroll()

$: s('bd').bank("wt_digital")
  .seg(8)
  .note("F1")
  .warp("0 0.25 0.5 0.75 1")
  .warpmode("<asym bendp spin logistic sync wormhole brownian>*2")

//$: 
// Another song slow beat
// _$: chord("[<B-9 E-9>]")
//  .voicing()
//  .room(.1)