# MohammedMalki.com deployment plan

## Current state verified

- Domain registrar dashboard: Network Solutions.
- Current authoritative nameservers are Wix:
  - `ns2.wixdns.net`
  - `ns3.wixdns.net`
- Current apex `mohammedmalki.com` points to Wix A records.
- Current `www.mohammedmalki.com` CNAME points to Wix.
- Live apex currently serves Wix `ConnectYourDomain` error, meaning the domain is not connected to a Wix site.

## Repo

GitHub repo: https://github.com/startupmalki-spec/mohammedmalki.com

## Vercel deployment status

Deployed successfully on 2026-07-09.

- GitHub: https://github.com/startupmalki-spec/mohammedmalki.com
- Vercel project: `startupmalki-specs-projects/mohammedmalki.com`
- Working preview/production alias: https://mohammedmalkicom.vercel.app
- Custom domains added in Vercel but not yet DNS-configured:
  - `mohammedmalki.com`
  - `www.mohammedmalki.com`

Verified:

- `npm run build` passes locally.
- Vercel build passed.
- Preview renders the intended site.

## Future Vercel deployment steps

Requires Vercel account auth or token.

```bash
cd /root/projects/mohammedmalki.com
npx vercel --prod
```

Recommended Vercel project settings:

- Framework preset: Next.js
- Build command: `npm run build`
- Install command: `npm install --ignore-scripts --no-audit --no-fund`
- Output: Next.js default

Add domains in Vercel before changing DNS:

- `mohammedmalki.com`
- `www.mohammedmalki.com`

## DNS cutover

Only after Vercel shows both domains assigned to this project, update DNS at the active DNS provider.

Because the active nameservers are Wix, either:

1. Change DNS records inside Wix DNS, or
2. Change nameservers away from Wix to Network Solutions/default nameservers, then add Vercel records there.

Use the exact DNS values shown in Vercel. Common Vercel values are:

- Apex `A @` → Vercel-provided A record, often `216.150.1.1` or `76.76.21.21`
- `www CNAME` → `cname.vercel-dns.com`

Trust Vercel UI over this doc.

## Post-cutover verification

```bash
curl -I https://mohammedmalki.com/
curl -I https://www.mohammedmalki.com/
```

Expected:

- HTTP 200 or clean redirect to canonical host
- Vercel headers present
- valid SSL certificate
- page title: `Mohammed Malki — Ideas, systems, and momentum`

## Security note

The temporary Wix credentials used during migration should be changed after the migration is complete.
