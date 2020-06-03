# ES6入门文档

--------------------------------------
```'foobarbaz'.includes('bar');      // => true

'foobarbaz'.includes('bar', 4);   // => false

'foobarbaz'.startsWith('foo');    // => true

'foobarbaz'.startsWith('bar', 3); // => true

'foobarbaz'.endsWith('baz');      // => true

'foobarbaz'.endsWith('bar', 6);   // => true```

'string'.repeat(3); // => 'stringstringstring'

'hello'.padStart(10);         // => '     hello'
'hello'.padStart(10, '1234'); // => '12341hello'
'hello'.padEnd(10);           // => 'hello     '
'hello'.padEnd(10, '1234');   // => 'hello12341'

```'foo'.bold();                     // => '<b>foo</b>'
'bar'.anchor('a"b');              // => '<a name="a&quot;b">bar</a>'
'baz'.link('http://example.com'); // => '<a href="http://example.com">baz</a>'```
