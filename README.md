# print-table
[![Software License](https://img.shields.io/npm/l/@yungkei/print-table)](LICENSE)
[![NPM](https://img.shields.io/npm/v/@yungkei/print-table)](https://www.npmjs.com/package/@yungkei/print-table)

A tiny javascript library to help printing table from the web.

## Installation

To install via npm:

```bash
npm install @yungkei/print-table --save
```

To install via yarn:

```bash
yarn add @yungkei/print-table
```

Import the library into your project:

```js
import printTable from '@yungkei/print-table'
```

## Usage


```js
printTable(TEMPLATE,DATA,PAPER,ORIENTATION)
```
### Api

- template: 
  - description: print-table template type, 
  - type: 'basic'
  - default: 'basic'
- data: 
  - description: print-table data, 
  - type: {columns: [], datasource: []}
    - columns: table head data, 
    - datasource: table body data
    - attributes: content, align, valign, width, colspan, style
  - default: {}
- paper: 
  - description: paper size, 
  - type: 'a1'|'a2'|'a3'|'a4'|'a5'
  - default: 'a4'
- orientation: 
  - description: print orientation, 
  - type: 'portrait'|'landscape'
  - default: 'portrait'

### DATA STRUCT
```javascript
const DATA = {
    columns: [
        [
            { 
                content: "text",
                align: "center",
                valign: "top",
                width: "200px",
                colspan: 2,
                style: "color:red"
            }
        ]
    ],
    datasource: [
        [
            { 
                content: "...",
                align: "...",
                valign: "...",
                width: "...",
                colspan: "...",
                style: "..."
            }
        ]
    ]
}

```

## Example

```js
import printTable from '@yungkei/print-table'

printTable('basic',
    {
        columns: [
            [
                { content: "name" },
                { content: "age" },
                { content: "address" }
            ]
        ],
        datasource: [
            [
                { content: 'user' },
                { content: 30 },
                { content: 'address' }
            ],
            [
                { content: 'user' },
                { content: 30 },
                { content: 'address' }
            ],
            [
                { content: 'user' },
                { content: 30 },
                { content: 'address' }
            ],
        ],
        paper: 'a4',
        orientation:'portrait'
    }
)
```
or
```js
import printTable from 'print-table'

printTable('basic',
    {
        columns: [
            [
                { content: "name" },
                { content: "age" },
                { content: "address" }
            ]
        ],
        datasource: [
            [
                { content: 'user' },
                { content: 30 },
                { content: 'address' }
            ],
            [
                { content: 'user' },
                { content: 30 },
                { content: 'address' }
            ],
            [
                { content: 'user' },
                { content: 30 },
                { content: 'address' }
            ]
        ]
    }
)
```

## Version
### v1.0.3
Fix: css style disappear on print at the second time.

### v1.0.2
Add: element attributes support.

### v1.0.1
First print-table.js release.

## License

print-table.js is available under the [MIT license].