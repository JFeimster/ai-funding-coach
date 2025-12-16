# Talk to an AI Funding Coach

A fast, Vercel-ready landing page that routes visitors to your Funding Pathfinder GPT.

## ✅ What it does
- Loads a high-conversion landing page (no framework)
- "Start the AI Funding Coach" opens your GPT in a new tab
- Copy link button for quick sharing

## 🚀 Deploy (GitHub → Vercel)
1. Create a new GitHub repo
2. Add these files:
   - index.html
   - styles.css
   - script.js
   - README.md
3. Push to GitHub
4. In Vercel:
   - New Project → Import your repo
   - Framework preset: **Other**
   - Build command: **None**
   - Output directory: **/** (root)
5. Deploy

## 🔧 Change the GPT link
Edit `GPT_URL` in `script.js`.

```js
const GPT_URL = "https://chatgpt.com/g/your-gpt-link";
