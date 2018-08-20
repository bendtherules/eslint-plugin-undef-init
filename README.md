# eslint-plugin-undef-init

Always initialize variables declarations. Instead of naked declarations, set it to undefined.

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


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "undef-init/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





