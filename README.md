# eslint-plugin-undef-init

Always initialize variables during declaration. Set it explicitly to undefined, if required.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-undef-init`:

```
$ npm install eslint-plugin-undef-init --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-undef-init` globally.

## Usage

Add `undef-init` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "undef-init"
    ]
}
```

Then, either extend from the plugin or add the rules explicitly.

### A. Extend from plugin
```js
{
    "extends": [
        // ... other extends here (like airbnb)
        "undef-init"
    ]
}
```

## OR

### B. Use rule directly

Then configure the rules you want to use under the rules section.

```js
{
    "rules": {
        "no-undef-init": 0, // Disable conflicting rule
        "undef-init/undef-init": 1,
    }
}
```

## Supported Rules

There is only one rule, for now -

* `undef-init` - Disallow variable declaration without initialization.

There is a built-in conflicting rule `no-undef-init` in eslint, so you'll need to disable it if you are using this rule
