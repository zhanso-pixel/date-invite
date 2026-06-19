# 💌 Date invite — setup

Three files:
- `index.html` — the page she sees (works on its own, even by double-clicking it).
- `google-apps-script.gs` — saves her answers to a Google Sheet.
- `SETUP.md` — this guide.

---

## 1. Put your name in

Open `index.html`, find the `CONFIG` block near the bottom (`<script>` section):

```js
const CONFIG = {
  yourName: "Zhanserik",   // <-- put YOUR name
  sheetUrl: ""      // <-- (filled in step 2)
};
```

Change `"Me"` to your name. The final screen says *"<name> will be there at that moment."*

If you want, you can stop here — the page fully works without saving. To save her answers to a Sheet, do step 2.

---

## 2. Save answers to a Google Sheet (optional)

1. Go to **sheets.google.com** → create a blank sheet (name it anything).
2. Top menu: **Extensions ▸ Apps Script**.
3. Delete whatever code is there, paste the contents of **`google-apps-script.gs`**, click 💾 **Save**.
4. Click **Deploy ▸ New deployment**.
   - Click the ⚙️ gear → choose **Web app**.
   - **Description:** anything.
   - **Execute as:** *Me*.
   - **Who has access:** **Anyone**. ← important, so her browser can post to it.
   - Click **Deploy**, then **Authorize access** and allow (it's your own script).
5. Copy the **Web app URL** (ends in `/exec`).
6. Paste that URL into `sheetUrl` in `index.html`:
   ```js
   sheetUrl: "https://script.google.com/macros/s/AKfyc..../exec"
   ```

Test: open `index.html`, go through it once, then refresh your Sheet — a new row should appear with Food / Date / Time / Place. ✅

> If you ever change the `.gs` code, do **Deploy ▸ Manage deployments ▸ Edit ▸ New version** so the URL keeps working.

---

## 3. Test it locally

Just **double-click `index.html`** — it opens in your browser. Walk through the whole flow.
- On a **laptop**, the *No* button runs away from your cursor.
- On a **phone**, the *No* button shrinks and changes its mind each tap. 😄

---

## 4. Hosting (we'll do this later)

Easiest = **Netlify Drop**: go to `app.netlify.com/drop`, drag the `date-invite` folder in,
and you get a public link to text her. (Other options: GitHub Pages, Vercel, Cloudflare Pages.)

---

## Customizing

- **Food options** — edit the `FOODS` list in `index.html`.
- **Time slots** — edit the `slots` array.
- **Place suggestions** — edit the `PLACES` list.
- **Month shown** — `MONTH = {year:2026, month:5}` (month is 0-indexed, so `5` = June). Days before today are greyed out.
- **Colors** — the `:root` variables at the top of the `<style>`.
