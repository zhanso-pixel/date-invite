# Date invite — setup

Files:
- `index.html` — the page she sees (works on its own).
- `song.mp3` — the song the player loops.
- `google-apps-script.gs` — saves her answers to a Google Sheet.
- `SETUP.md` — this guide.

## 1. Put your name in

Open `index.html` and find `CONFIG`:

```js
const CONFIG = {
  yourName: "Zhanserik",
  sheetUrl: "",
  musicFile: "song.mp3"
};
```

The last screen says "<name> will be there."

## 2. Music

Keep `song.mp3` in the same folder as `index.html`. The player at the bottom has play, a seek bar, and a volume slider. The song starts on the first tap anywhere on the card, or when she taps the heart.

Browsers block sound until that first tap. The heart stays on "play" until the song is actually going, so it does not look on while it is silent. If the file is missing, the page falls back to a soft melody.

Default volume is 85%, and the slider is remembered on this phone or computer. Turn it up if a room is loud. On iPhone, the side buttons control loudness too.

## 3. Save answers to a Google Sheet (optional)

1. Go to **sheets.google.com** and create a blank sheet.
2. **Extensions ▸ Apps Script**.
3. Replace the sample code with `google-apps-script.gs` and save.
4. **Deploy ▸ New deployment**.
   - Gear icon → **Web app**.
   - **Execute as:** Me.
   - **Who has access:** Anyone.
   - Deploy, then authorize.
5. Copy the web app URL (it ends in `/exec`) into `sheetUrl`.

Walk through the page once, then refresh the Sheet. A row should appear with Food, Date, Time, and Place.

If you change the script later: **Deploy ▸ Manage deployments ▸ Edit ▸ New version**.

## 4. Try it

From this folder:

```bash
python3 -m http.server 8765
```

Open `http://localhost:8765` on your phone and on a laptop.

- Laptop: the No button slips away from the cursor.
- Phone: No shrinks and changes its mind. Yes gets easier to press.
- The calendar starts on this month. Days before today are off. You can move forward month by month.
- The player seek bar and volume work while the questions are on screen.

## 5. Put it online

GitHub Pages: Settings → Pages → Deploy from branch `main` / root.

Open the `https://YOURNAME.github.io/date/` link. The raw GitHub file link will not play the mp3 properly.

Netlify Drop also works: drag this folder onto `app.netlify.com/drop`.

## Customize

- Foods: the `FOODS` list in `index.html`.
- Times: the `DAY_SLOTS` and `EVE_SLOTS` lists.
- Places: the `PLACES` list.
- Colors: the `:root` variables at the top of the style block.
