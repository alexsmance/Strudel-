## Getting Started
You can search for `Strudel REPL` or type in the URL `https://strudel.cc`.

And visit `https://github.com/alexsmance/intro-to-coding-music` for these docs and some sample tunes.


## Setting up a BPM (Beats per minute)
Strudel uses cycles per minute to determine the speed of your strudel song to convert it into beats per minute we can use the following code at the top of your file.

By `xx/60/4` will give a a conversion to beats per minute used in conventional music in a 4/4 pattern which is the most common beat notation used in most music. `xx` is the speed where the higher the number the faster the music.

``` js
setCps(112/60/4)
```

## Creating a drum beat

The following example demonstrates how to create a basic rock beat. Similar to if you started drum lessons.

To create some form of sound, we can use the```sound(`[pattern]`)``` function where ```[pattern]``` is the input. ```s(x)``` can be used as a shorthand for ```sound(x)``` 

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