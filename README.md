# Node.js + MySQL Starter (Express + Knex)

מדריך שלב-אחר-שלב לפרויקט נוד ג'י־אס גדול שמתחבר ל-MySQL, בנוי בשכבות (Routes → Controllers → Services → Repositories) וקל לפריסה ב-Railway/Render או בדוקר.

## מבנה הפרויקט
```
src/
  app.js
  server.js
  routes/
    index.js
  middlewares/
    errorHandler.js
    notFound.js
    validate.js
  db/
    knex.js
  modules/
    users/
      user.routes.js
      user.controller.js
      user.service.js
      user.repo.js
      user.validation.js
migrations/
seeds/
knexfile.js
.env.example
```

## שלבי הקמה (מקומי)
1. התקיני תלויות:
   ```bash
   npm i
   ```
2. צרי DB ב-MySQL (למשל `my_app`).
3. העתיקי `.env.example` ל-`.env` ועדכני פרטי חיבור.
4. הריצי מיגרציות וזרעים (אופציונלי):
   ```bash
   npm run migrate
   npm run seed
   ```
5. הריצי פיתוח:
   ```bash
   npm run dev
   ```
   בדיקת בריאות: `GET http://localhost:3000/health`

## נקודות מפתח בארכיטקטורה
- **Routes**: מיפוי URL בלבד.
- **Controllers**: קליטת בקשה/תגובה בלבד.
- **Services**: לוגיקה עסקית.
- **Repositories**: גישה למסד נתונים (Knex).
- **Middlewares**: ולידציה, טיפול בשגיאות, אבטחה.
- **ENV**: כל הסודות והקונפיגורציה ב-`.env`.

## דוגמה ל-API
- `POST /api/users` — יצירת משתמש (email, fullName).
- `GET /api/users/:id` — שליפת משתמש לפי מזהה.

## פריסה (Railway/Render - תמצית)
1. דחפי את הפרויקט ל-GitHub.
2. צרי שירות Node חדש ווסיפי MySQL Managed DB.
3. הגדירי משתני סביבה (`PORT`, `DB_*`).
4. פקודת Build: `npm ci && npm run migrate && npm run seed` (זרעים אופציונלי).
5. פקודת Start: `npm start`.
6. ודאי שבריאות (`/health`) ירוק.

## דוקר (אופציונלי)
להרצה מקומית מלאה עם MySQL:
```bash
docker compose up --build
```
זה יריץ את ה-DB ואת ה-API, כולל מיגרציות וזרעים.
