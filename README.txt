SHRAVANI PORTFOLIO — HOW TO EDIT

Files
  index.html  page structure and text (hero, about, leadership, contact copy)
  style.css   colors, fonts, spacing (colors are at the top, in :root)
  script.js   CONFIG block at the top = your email, links, projects, skills, timeline
  photo.jpg   your hero photo (replace with any image, keep the name)

Run locally
  Double-click index.html. (Or: npx serve .)

Edit
  1. Open script.js. Change email, github, linkedin in CONFIG.
  2. Project links: set live and source URLs for each project. Empty = button shows "(soon)".
  3. Skills, timeline, facts: edit the lists in CONFIG.
  4. Hero text: edit index.html (search "I build things").
  5. Colors: edit --ink, --cream, --mustard, --coral, --periwinkle in style.css.
  6. Project screenshots: in script.js, replace the mock[...] HTML with
     <img src="shot-a.jpg" alt="..." style="width:100%;height:100%;object-fit:cover">

Deploy (free)
  Netlify: drag this whole folder onto app.netlify.com/drop
  Vercel:  npm i -g vercel, then run "vercel" inside this folder
