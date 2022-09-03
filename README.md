# print-table

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
Tips:
- columns: table head data
- datasource: table body data
- paper: print size, support: a1,a2,a3,a4,a5, default: "a4"
- orientation: print orientation, support: portrait,landscape, default: "portrait";

## License

Print.js is available under the [MIT license].