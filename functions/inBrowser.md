```
// Browser environment sniffing
export const inBrowser =
  typeof window !== 'undefined' &&
  Object.prototype.toString.call(window) !== '[object Object]'
```

/**
*这里利用浏览器的全局对象 window 做区分，因为在 nodejs 环境下是没有 window 这个全局对象的，所以判断 typeof window 是否不为 'undefined' 
且不是由用户自己创建的一个普通对象，如果是的话， Object.prototype.toString.call(window) // === [object Object]

而在浏览器环境下，则是这样的情况：

typeof window
// "object"
Object.prototype.toString.call(window)
// "[object Window]"
**/
