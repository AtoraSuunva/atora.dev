---
title: 'Markdown Samples'
description: 'Markdown Samples for testing site styles.'
pubDate: 'March 1 2025'
# heroImage: '../../images/flower-closed.png'
tags: ['example', 'markdown', 'sample', 'more', 'tags']
---

These are markdown samples to test styling.

## Headings

The post layout will render an `<h1>` with the title automatically and putting more than 1 `<h1>` on a page is generally an error (and bad for accessibility!).

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur magna odio, non feugiat leo finibus sed. Nullam pellentesque aliquet scelerisque. Fusce at ullamcorper turpis. Quisque lacinia urna augue, vel auctor ligula semper eget. Etiam maximus augue eget ultricies rutrum. Fusce pulvinar quis massa in sodales. Quisque semper aliquam nulla cursus elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sapien lorem, pharetra in pretium a, tempus ut diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras pulvinar, urna a commodo tristique, enim ipsum pharetra massa, in facilisis libero purus accumsan dolor. Donec porttitor arcu at lorem consectetur, nec eleifend arcu facilisis. Integer consequat, ante sit amet dictum convallis, tellus velit consequat urna, et aliquet dolor erat quis urna. Donec a neque sapien. Etiam varius ex nibh, non pulvinar libero sagittis non. Donec viverra ligula suscipit, tincidunt elit vel, porta ipsum.

Maecenas vulputate quis diam sit amet commodo. Nulla facilisi. Aenean facilisis vehicula nibh, ac aliquet mi aliquam at. Nullam finibus congue risus, id venenatis mauris iaculis sed. Aenean aliquam mi nisi, nec porta metus molestie nec. Mauris at tincidunt urna, eget luctus odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

## Images

![Atora with eyes closed](@images/flower-closed.png)

## Blockquotes

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur magna odio, non feugiat leo finibus sed. Nullam pellentesque aliquet scelerisque. Fusce at ullamcorper turpis. Quisque lacinia urna augue, vel auctor ligula semper eget. Etiam maximus augue eget ultricies rutrum. Fusce pulvinar quis massa in sodales. Quisque semper aliquam nulla cursus elementum.

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sapien lorem, pharetra in pretium a, tempus ut diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras pulvinar, urna a commodo tristique, enim ipsum pharetra massa, in facilisis libero purus accumsan dolor.

> Don't communicate by sharing memory, share memory by communicating.
>
> @ Rob Pike[^1]

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

Donec porttitor arcu at lorem consectetur, nec eleifend arcu facilisis. Integer consequat, ante sit amet dictum convallis, tellus velit consequat urna, et aliquet dolor erat quis urna. Donec a neque sapien. Etiam varius ex nibh, non pulvinar libero sagittis non. Donec viverra ligula suscipit, tincidunt elit vel, porta ipsum.

## Callouts

> [!note] This is a note!
> Some content is displayed directly!  

.

> [!tip]- This is a tip!
> You can click on collapsible callouts to read more info  

.

> [!important] This is important!
> You can nest things
> > [!note] Wow
> > Nested callouts
> > > [!tip] You can keep nesting things
> > > It's harder to read though  

.

> [!warning] This is a warning!
> Some content shown after opening!
>
> ```ts
> const commitSHA = childProcess
>  .execSync("git rev-parse --short HEAD")
>  .toString()
>  .trim();
> 
> const commitBranch = childProcess
>  .execSync("git rev-parse --abbrev-ref HEAD")
>  .toString()
>  .trim();
> ```

.

> [!caution] This is a caution!
> Do not run this code!
>
> ```sh
> > :(){ :|:& };:
> ```
>

## Tables

| Italics          | Bold            | Code           |
| ---------------- | --------------- | -------------- |
| _italics_        | **bold**        | `code`         |
| **_boldtalics_** | **boldbold**    | **`boldcode`** |
| _itaitalics_     | **_italibold_** | _`italicode`_  |

| Short Label  | Long Content |
| ------------ | ------------ |
| Label 1      | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur magna odio, non feugiat leo finibus sed. Nullam pellentesque aliquet scelerisque. Fusce at ullamcorper turpis. Quisque lacinia urna augue, vel auctor ligula semper eget. Etiam maximus augue eget ultricies rutrum. Fusce pulvinar quis massa in sodales. Quisque semper aliquam nulla cursus elementum. |
| Label 2      | Maecenas vulputate quis diam sit amet commodo. Nulla facilisi. Aenean facilisis vehicula nibh, ac aliquet mi aliquam at. Nullam finibus congue risus, id venenatis mauris iaculis sed. Aenean aliquam mi nisi, nec porta metus molestie nec. Mauris at tincidunt urna, eget luctus odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; |
| Label 3      | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur magna odio, non feugiat leo finibus sed. Nullam pellentesque aliquet scelerisque. Fusce at ullamcorper turpis. Quisque lacinia urna augue, vel auctor ligula semper eget. Etiam maximus augue eget ultricies rutrum. Fusce pulvinar quis massa in sodales. Quisque semper aliquam nulla cursus elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sapien lorem, pharetra in pretium a, tempus ut diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras pulvinar, urna a commodo tristique, enim ipsum pharetra massa, in facilisis libero purus accumsan dolor. Donec porttitor arcu at lorem consectetur, nec eleifend arcu facilisis. Integer consequat, ante sit amet dictum convallis, tellus velit consequat urna, et aliquet dolor erat quis urna. Donec a neque sapien. Etiam varius ex nibh, non pulvinar libero sagittis non. Donec viverra ligula suscipit, tincidunt elit vel, porta ipsum. |

## Code Blocks

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur magna odio, non feugiat leo finibus sed. Nullam pellentesque aliquet scelerisque. Fusce at ullamcorper turpis. Quisque lacinia urna augue, vel auctor ligula semper eget. Etiam maximus augue eget ultricies rutrum. Fusce pulvinar quis massa in sodales. Quisque semper aliquam nulla cursus elementum.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

Maecenas vulputate quis diam sit amet commodo. Nulla facilisi. Aenean facilisis vehicula nibh, ac aliquet mi aliquam at. Nullam finibus congue risus, id venenatis mauris iaculis sed. Aenean aliquam mi nisi, nec porta metus molestie nec. Mauris at tincidunt urna, eget luctus odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

```ts
/**
 * Converts a string from camelCase to snake_case
 * @param str The string to make snake case
 * @returns The snake cased string
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/\s+/g, '_')
    .toLowerCase()
    .trim()
}
```

Cras pulvinar, urna a commodo tristique, enim ipsum pharetra massa, in facilisis libero purus accumsan dolor. Donec porttitor arcu at lorem consectetur, nec eleifend arcu facilisis. Integer consequat, ante sit amet dictum convallis, tellus velit consequat urna, et aliquet dolor erat quis urna.

## List Types

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- List item
- Another item
- And another item

### Nested list

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
