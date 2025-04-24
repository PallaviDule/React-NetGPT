# GPT Integration Guide

This section documents how GPT functionality was integrated into the project using the OpenAI API, along with implementation notes, errors encountered, and solutions.

### Features Implemented

1. **GPT Search Bar** – Allows users to search using natural language.
2. **Toggle View with Redux** – Managed GPT toggle state using a Redux store.
3. **OpenAI API Integration** – Made asynchronous API calls to fetch responses.
4. **Movie Search via TMDB** – Processed GPT results to query movie data.

### Integration Steps

<details>
<summary><strong>1. Set Up OpenAI</strong></summary>

- Visit the [OpenAI Platform](https://platform.openai.com/docs/overview).
- Log in with your account.
- Create an API key from your [API keys page](https://platform.openai.com/settings/organization/api-keys).
  > ⚠️ API usage is **not free**. Avoid sharing your key — it may incur charges.
</details>

<details>
<summary><strong>2. Install OpenAI SDK</strong></summary>

Install the OpenAI package from npm:

```bash
npm install --save openai
```

Refer to [npm documentation](https://www.npmjs.com/package/openai/v/4.8.0) for full API usage.
</details>

<details>
<summary><strong>3. API Usage Warning & Fixes</strong></summary>

You may encounter the following error when using GPT in the browser:

```
It looks like you're running in a browser-like environment.
This is disabled by default, as it risks exposing your secret API credentials to attackers.
```

✅ **Temporary workaround for local/dev testing**:

```js
new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
```

**Recommended**:
- Store API key in `.env` file.
- Avoid using GPT client-side in production.
</details>

<details>
<summary><strong>4. Avoiding API 429 Errors</strong></summary>

429 = Too many requests or invalid billing.
Even a brand new API key can get 429s if billing isn’t added, even if you're expecting a free trial.
**Check these:**

- 🔄 **Billing Not Set Up**  
  Go to [Billing Overview](https://platform.openai.com/account/billing/overview) and ensure you’ve added a payment method or activated free credits.

- 💰 **Free Trial Not Applied**  
  Some regions or emails don’t automatically receive free trial credits.  
  Visit [Account Usage](https://platform.openai.com/account/usage) to verify.

</details>

### Notes

- 💸 You can limit your monthly usage from your [Billing Settings](https://platform.openai.com/account/billing/limits).
- 🧪 Use caution with exposing credentials in frontend code. Use serverless functions or proxies for secure handling.

### Helpful Links

- 📚 [OpenAI Node Library API Reference](https://github.com/openai/openai-node/blob/master/api.md)
- 🛠️ [API Errors & Solutions](https://platform.openai.com/docs/guides/error-codes/api-errors)
- 🧠 [OpenAI Docs](https://platform.openai.com/docs)
