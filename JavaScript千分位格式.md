**方法一：使用 toLocaleString() (推荐)**
```
function formatNumber(num) {
    return num.toLocaleString('en-US');
}

// 示例
console.log(formatNumber(1234567.89)); // "1,234,567.89"
console.log(formatNumber(123456789));  // "123,456,789"
```

**二、正则表达式**
```
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 示例
console.log(formatNumber(1234567.89)); // "1,234,567.89"
console.log(formatNumber(123456789));  // "123,456,789"
```

**三、支持小数点的正则表达式**
```
function formatNumber(num) {
    // 分割整数和小数部分
    const parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}

// 示例
console.log(formatNumber(1234567.89)); // "1,234,567.89"
console.log(formatNumber(123456789));  // "123,456,789"
```

**方法四：使用 Intl.NumberFormat**
```
function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
}

// 示例
console.log(formatNumber(1234567.89)); // "1,234,567.89"
console.log(formatNumber(123456789));  // "123,456,789"
```
