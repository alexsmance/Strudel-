## Getting Started
You can search for `Strudel REPL` or type in the URL `https://strudel.cc`.

And visit `https://github.com/alexsmance/intro-to-coding-music` for these docs and some sample tunes.

## Setting up a BPM (Beats per minute)
Strudel uses cycles per minute to determine the speed of your strudel song to convert it into beats per minute we can use the following code at the top of your file.

By `xx/60/4` will give a conversion to beats per minute used in conventional music in a 4/4 pattern which is the most common beat notation used in most music. `xx` is the speed where the higher the number the faster the music.

``` js
setCps(112/60/4)
```

## Creating a drum beat

The following example demonstrates how to create a basic rock beat. Similar to if you started drum lessons.

To create some form of sound, we can use the `sound(`[pattern]`)` function where `[pattern]` is the input. `s(x)` can be used as a shorthand for `sound(x)`

``` js
$: sound(`
[bd - - -],
[- - sd -],
[hh hh hh hh]
`).cpm(120/4)
```

The following example demonstrates how to create a basic rock beat. Similar to if you started drum lessons.

``` js
 $: sound(`
[bd - - -] [bd - - -][bd - - -][bd - - -],
[- - sd -] [- - sd -][- - sd -][- - sd -],
[- hh - hh][- hh - hh][- hh - hh][- hh - hh],
[- - cp -] [- - cp -][- - cp -][- - cp -]
`)
```

The example shows how up can subsedize the beat out of 4/4.

### Acitivity I: 
#### Use the base beat and explore.

Collarabote or experiment with a beat to show the group. Go crazy and see what you can make up.

## Making a bass line

This time we will make a sine wave base to accompany the drum beat. For coherency, we will try and match the base drum beat.

``` js
_$: note("Bb2 Bb2 Eb2 Eb2").sound("sine")
```

## Activity II
Use the following examples and combine it into a single playthrough with the strudel engine.


## Activity III
Add some chords that match your bass line with the `note(notation)` a good place to start is with the same note and a minor/major chord.

``` js
_$: chord("<Bb-7 Eb-7>").voicing().room(.5)
```