# Doctor tracking

Track physicians by **specialty**, **where they work**, **who pays them**, and **how much** they’re paid. Next.js frontend + PostgreSQL, deployable on Railway.

## Stack

- **Next.js 16** (App Router), React 19, TypeScript, Tailwind
- **PostgreSQL** via Prisma (doctors, organizations, employment, payments)
- **Railway** for hosting + database

## Local setup

1. **Node.js ≥ 20** (required for Next.js 16).

2. **PostgreSQL** running locally (or a cloud URL in `.env`).

3. **Env**: copy `.env.example` to `.env` and set:

   ```bash
   DATABASE_URL=postgresql://user:password@localhost:5432/dr_tracking
   ```

4. **DB**:

   ```bash
   npm install
   npx prisma migrate deploy    # create tables
   npm run db:seed              # seed sample doctors + payments
   ```

5. **Run**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command           | Description                    |
|-------------------|--------------------------------|
| `npm run dev`     | Start dev server               |
| `npm run build`   | Prisma generate + Next build   |
| `npm start`       | Start production server        |
| `npm run db:seed` | Seed DB (sample data)          |
| `npm run db:migrate` | Apply migrations (`prisma migrate deploy`) |
| `npm run db:push` | Push schema without migrations |
| `npm run db:studio` | Open Prisma Studio            |

## Deploy on Railway

1. **New project**: [railway.com/new](https://railway.com/new) → **Deploy from GitHub repo** → select this repo.

2. **PostgreSQL**: In the project, **Add service** → **Database** → **PostgreSQL**. Railway creates a DB and sets `DATABASE_URL` in the project.

3. **Connect DB to app**:
   - Open your **app service** (the repo).
   - **Variables** → **Add variable** → **Add a reference** → choose `DATABASE_URL` from the PostgreSQL service.  
   (Or copy the PostgreSQL `DATABASE_URL` value into the app’s variables.)

4. **Run migrations once** (after first deploy with `DATABASE_URL` set):
   - In the app service: **Settings** → run a one-off command, or use CLI:
   - `railway run npx prisma migrate deploy`
   - Then (optional) seed: `railway run npm run db:seed`

5. **Domain**: **Settings** → **Networking** → **Generate domain**.

Build uses `railway.toml`: `npm ci && npm run build`; start is `npm start`. Node is taken from `package.json` `engines` (≥ 20).

## Data model (MVP)

- **Doctor** – id, name, specialty
- **Organization** – id, name (employers / payers)
- **DoctorEmployer** – which doctor works at which organization
- **DoctorPayment** – doctor, payer (organization), amount (cents), period (e.g. annual), year

Amounts are stored in **cents** to avoid float issues (e.g. `280000` = $2,800).

## API (for later use)

- `GET /api/doctors` – list (optional `?specialty=`)
- `GET /api/doctors/[id]` – one doctor with employers and payments
- `GET /api/specialties` – list of specialties

Pages use the database directly; the API is available for client or external use.
