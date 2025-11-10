**方法一：使用 toLocaleString() (推荐)**
```
function formatNumber(num) {
    return num.toLocaleString('en-US');
}

// 示例
console.log(formatNumber(1234567.89)); // "1,234,567.89"
console.log(formatNumber(123456789));  // "123,456,789"
```

**正则表达式**
```
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 示例
console.log(formatNumber(1234567.89)); // "1,234,567.89"
console.log(formatNumber(123456789));  // "123,456,789"
```
