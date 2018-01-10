# dg_toast

The Toast module for DrupalGap 8.

A toast (aka snackbar) can be used to discretely show a message at the bottom of the screen to the user, with minimal
interference to their experience.

Inspired by: https://www.w3schools.com/howto/howto_js_snackbar.asp

## Setup

Add the `toast` block to your `settings.js` file, usually after the `main` block, for example:

```

// DrupalGap's main content block.
main: { },

// The toast block.
toast: { }

```

## Usage

```
var msg = dg.t('Do you want butter and jam on your toast?');

// Open a toast.
dg.toast(msg);

```
