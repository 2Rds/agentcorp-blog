# AgentCorp Blog

Vercel-ready Next app for `blog.agentcorp.work`.

## Local validation

```powershell
npm install
npm run build
npm run dev
```

## Vercel deployment

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Add `blog.agentcorp.work` as the project domain in Vercel.
5. In Cloudflare DNS, create the record Vercel provides, typically:

```text
Type: CNAME
Name: blog
Target: cname.vercel-dns.com
Proxy: DNS only while verifying
```

After Vercel verifies the domain and SSL is active, the blog will be public at
`https://blog.agentcorp.work`.
