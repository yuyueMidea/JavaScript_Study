## Javascript 中 Array.push 要比 Array.concat 快 945 倍！
```javascript
<script>
    let arr1 = [];
    arr1.length = 1000000;
    let arr2 = [];
    arr2.length = 1000000;

    // console.time();
    // arr1 = arr1.concat(arr2);
    // console.timeEnd();

    console.time();
    arr1.push(...arr2); // Uncaught RangeError: Maximum call stack size exceeded
    console.timeEnd();
    
  </script>
```
