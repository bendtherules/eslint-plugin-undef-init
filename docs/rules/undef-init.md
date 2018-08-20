# Always initialize variables during declaration. Set it explicitly to undefined, if required. (undef-init)

## Rule Details

### It is better to explicitly initialize all variable declarations.
Instead of naked var / let declarations (which are implicitly set to `undefined` anyway), always explicitly set them to `undefined`. It makes clear that you explicitly intended to set them to undefined, not just because you forgot to initialize.

Note: Initialization is not allowed in the `ForDeclaration` part of  for-of and for-in statements. Hence, those need not (and can not) be set to undefined.
Ex: `for (var i in []){do_something()}` is correct.

Examples of **incorrect** code for this rule:

```js

var a;
let b;
let c, d;
let d, e = 1;

for (var f of {}){var g;}
for (var i in []){var j;}

```

Examples of **correct** code for this rule:

```js

var a = undefined;
let b = undefined;
let b1 = b;
let c = undefined, d = undefined;

for (var f of {}){var g = undefined;}

for (var i in []){do_something()}

```

### Options

There are no options.

## When Not To Use It

If you feel setting vraiables implicitly to `undefined` is better than setting them explicitly, then don't use this - use `no-undef-init`.

## More

Ideally this would be a configuration in the in-built eslint rule `no-undef-init` instead of a separate rule, but wasn't accepted by maintainers. Hence, it's an external plugin.