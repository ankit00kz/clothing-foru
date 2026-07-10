# CI/CD Pipeline Setup

## GitHub Actions Workflows

Automatically test, build, and deploy on push/pull requests.

## Workflow 1: Backend Tests

Create `.github/workflows/backend-test.yml`:

```yaml
name: Backend Tests

on:
  push:
    branches: [main]
    paths:
      - 'backend/**'
  pull_request:
    branches: [main]
    paths:
      - 'backend/**'

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      mongodb:
        image: mongo:latest
        env:
          MONGO_INITDB_ROOT_USERNAME: admin
          MONGO_INITDB_ROOT_PASSWORD: password
        options: >-
          --health-cmd mongosh
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 27017:27017

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: cd backend && npm ci

      - name: Run tests
        run: cd backend && npm test
        env:
          MONGODB_URI: mongodb://admin:password@localhost:27017/test
          JWT_SECRET: test-secret
          NODE_ENV: test

      - name: Check code quality
        run: cd backend && npm run lint || true
```

## Workflow 2: Frontend Tests

Create `.github/workflows/frontend-test.yml`:

```yaml
name: Frontend Tests

on:
  push:
    branches: [main]
    paths:
      - 'frontend/**'
  pull_request:
    branches: [main]
    paths:
      - 'frontend/**'

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: cd frontend && npm ci

      - name: Build
        run: cd frontend && npm run build
        env:
          NEXT_PUBLIC_API_URL: https://api.example.com

      - name: Run linter
        run: cd frontend && npm run lint || true
```

## Workflow 3: Deploy Backend to Render

Create `.github/workflows/deploy-backend.yml`:

```yaml
name: Deploy Backend

on:
  push:
    branches: [main]
    paths:
      - 'backend/**'
      - '.github/workflows/deploy-backend.yml'

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Deploy to Render
        run: |
          curl -X POST ${{ secrets.RENDER_DEPLOY_HOOK }} \
            -H "Content-Type: application/json" \
            -d '{"clearCache": true}'
```

**Setup:**

1. Go to Render dashboard → Settings → API Key
2. Copy Deploy Hook URL
3. In GitHub repo → Settings → Secrets → New repository secret
4. Name: `RENDER_DEPLOY_HOOK`
5. Value: Your deploy hook URL

## Workflow 4: Deploy Frontend to Vercel

Create `.github/workflows/deploy-frontend.yml`:

```yaml
name: Deploy Frontend

on:
  push:
    branches: [main]
    paths:
      - 'frontend/**'
      - '.github/workflows/deploy-frontend.yml'

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Deploy to Vercel
        uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: frontend
```

**Setup:**

1. Go to [Vercel](https://vercel.com) → Settings → Tokens
2. Create new token
3. In GitHub → Settings → Secrets → New repository secret
4. Name: `VERCEL_TOKEN`
5. Value: Your Vercel token

6. Get your Org ID and Project ID:
   ```bash
   vercel link
   ```
7. Add as secrets:
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

## Workflow 5: Create Release

Create `.github/workflows/release.yml`:

```yaml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  create-release:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Create Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: ${{ github.ref }}
          release_name: Release ${{ github.ref }}
          draft: false
          prerelease: false
```

**Usage:**

```bash
git tag v1.0.0
git push origin v1.0.0
```

## Workflow 6: Code Quality

Create `.github/workflows/code-quality.yml`:

```yaml
name: Code Quality

on:
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install backend dependencies
        run: cd backend && npm ci

      - name: Lint backend
        run: cd backend && npm run lint || echo "No lint script"

      - name: Install frontend dependencies
        run: cd frontend && npm ci

      - name: Lint frontend
        run: cd frontend && npm run lint || echo "No lint script"
```

## Setting Up Secrets

1. Go to GitHub repo → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add these secrets:

```
RENDER_DEPLOY_HOOK=https://api.render.com/deploy/...
VERCEL_TOKEN=your-vercel-token
VERCEL_ORG_ID=your-org-id
VERCEL_PROJECT_ID=your-project-id
SLACK_WEBHOOK=https://hooks.slack.com/... (optional)
```

## Monitoring Workflows

### View Workflow Status

1. Go to repo → Actions tab
2. Click workflow to see details
3. Check logs for errors

### Add Status Badge

Add to `README.md`:

```markdown
![Backend Tests](https://github.com/ankit00kz/clothing-foru/workflows/Backend%20Tests/badge.svg)
![Frontend Tests](https://github.com/ankit00kz/clothing-foru/workflows/Frontend%20Tests/badge.svg)
![Deploy Backend](https://github.com/ankit00kz/clothing-foru/workflows/Deploy%20Backend/badge.svg)
![Deploy Frontend](https://github.com/ankit00kz/clothing-foru/workflows/Deploy%20Frontend/badge.svg)
```

## Troubleshooting CI/CD

### Workflow Not Triggering

- Check branch name matches trigger
- Verify path filters are correct
- Ensure YAML syntax is valid

### Build Failures

- Check logs for specific error
- Verify environment variables
- Test locally first

### Deployment Failures

- Check deployment logs
- Verify API keys/tokens in secrets
- Ensure backend is running

## Best Practices

1. **Never commit secrets** to repository
2. **Use branch protection** requiring CI to pass
3. **Test before deploying** with staging environment
4. **Monitor deployments** with alerts
5. **Keep workflows DRY** using reusable workflows
6. **Document all secrets** in team wiki
7. **Rotate tokens** regularly

## Next Steps

1. Create all workflow files
2. Set up repository secrets
3. Test workflows with PR
4. Monitor deployments
5. Set up Slack notifications (optional)
