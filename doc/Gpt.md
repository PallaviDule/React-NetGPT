# GPT

## What we did in GPT Part of the Project
1. Created GPT search bar
2. Toggle view using redux store
3. Making call to openai API - integration
4. Searching for those movies in TMDB.

## How can we integrate
1. [OpenAI Platform](https://platform.openai.com/docs/overview) doc to integrate , you need to log in.
2. You need [API Keys](https://platform.openai.com/settings/organization/api-keys) to make api calls, so let's create new api key.
    Note: These APIs are not free, they bill for the usage. So, Do not share your api-key.
3. [Installing openai](https://www.npmjs.com/package/openai/v/4.8.0) - This doc gives you basic configuration on how you can use gpt APIs.  
    `npm install --save openai`
4. Error you might get: Because you are directly exposing creds
    - Solution 1: you need to set the `dangerouslyAllowBrowser` option to `true`. This is temporary, if want to try out api
    ```js
        ERROR
        It looks like you're running in a browser-like environment.
        This is disabled by default, as it risks exposing your secret API credentials to attackers.
        If you understand the risks and have appropriate mitigations in place,
        you can set the `dangerouslyAllowBrowser` option to `true`, e.g.,
        new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
        https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
    ```
    - Add key in .env
5. Even a brand new API key can get 429s if billing isn’t added, even if you're expecting a free trial.
    1. Billing not set up   
        Even a brand new API key can get 429s if billing isn’t added, even if you're expecting a free trial.

        👉 Go to [billing overview](https://platform.openai.com/account/billing/overview), Check if credit is active or if payment method is added.

    2. Free trial credits not applied    
        Sometimes accounts created with certain emails or countries don’t get the free $5 credits auto-applied. 
        
        👉 Check [Account Usage](https://platform.openai.com/account/usage). It should show $0.00 spent out of $5.00 or similar. If not — your account isn’t eligible for free tier and needs payment setup.


## Notes
1. You can limit your usage in your billing page, so that you or anyone don't overuse your api key.

## Links
1. [The full API of this library](https://github.com/openai/openai-node/blob/master/api.md)
2. [Explore API error codes and solutions.](https://platform.openai.com/docs/guides/error-codes/api-errors)