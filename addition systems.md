## ChatBot Support System
### Copy And Paste This in Index.js

```html

```

## Music When User Arrives On Webpage
#### Copy And Paste This in Index.js
```html
<audio id="background-music" autoplay>
        <source src="./media/Monkeys Spinning Monkeys.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>

    <script>
        window.addEventListener('load', () => {
            const audio = document.getElementById('background-music');
            if (audio) {
                audio.play().catch(error => {
                    console.log('Playback prevented:', error);
                });
            }
        });
    </script>
```