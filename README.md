# Remix Nodemailer Error

Importing `nodemailer` directly in a route causes the site to crash. Importing `nodemailer` in `entry.server.tsx` and importing it from there into a route works.
