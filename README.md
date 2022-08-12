# Welcome to Fake Financial Data - A free API for testing and data analysis practice.

This is a free API **randomly generating fake financial data for testing and practice.**

## Stacks I used

- React.JS
- Express.JS
- SQlite
- Tailwind CSS

### Demo

- base url → `api/v1/`

Calling **GET** `api/vi/companies/all`:

```jsx title="src/pages/my-react-page.js"
import requests

url = "http://localhost:8000/api/companies/all?limit="

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
