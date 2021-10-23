
## Getting Started

To get started running the project locally, please follow the steps below.

First, clone the repository

```bash
git clone https://github.com/abui-am/test-interview
```

Then, install the dependencies. **note that we use yarn, not npm.**

```bash
cd test-interview
yarn install
```

Create `.env.local` file on your `root directory` and put your https://www.google.com/recaptcha/admin/create there with variable name `NEXT_PUBLIC_CAPTCHA_SITEKEY`

```bash
NEXT_PUBLIC_CAPTCHA_SITEKEY=[your apikey]
```

example :
```bash
NEXT_PUBLIC_CAPTCHA_SITEKEY=6Ldgz-scAAAAACoMsfKYkTTKUJs7xfpKRiTVC0HL
```

You can now start the development server with 
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
