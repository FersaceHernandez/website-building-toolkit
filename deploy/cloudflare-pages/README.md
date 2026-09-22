# Cloudflare Pages deploy example

Copy these files into the site you are shipping. Do not put account IDs, database IDs, or API tokens in them.

```bash
npx wrangler@4 pages project create example-site
npx wrangler@4 pages deploy ../../templates/landing-page --project-name example-site
npx wrangler@4 pages deployment list --project-name example-site
```

`wrangler pages deploy <directory> --project-name <name>` uploads a static directory with Direct Upload. Production deploys come from the production branch. Pass `--branch <name>` only when you mean to create a preview deployment.

Store tokens in the Cloudflare dashboard or with `wrangler secret put`. Never pass a token on the command line, and never commit `.dev.vars`.

The checked-in config is `wrangler.jsonc.example` on purpose. A live `wrangler.jsonc` in this folder would make a later command deploy the toolkit by accident.
