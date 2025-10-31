**JavaScript开发常用方法与技巧大全**

**遍历与迭代**
```
// forEach - 遍历数组
arr.forEach((item, index, array) => {});

// map - 映射转换，返回新数组
const newArr = arr.map(item => item * 2);

// filter - 过滤，返回符合条件的新数组
const filtered = arr.filter(item => item > 10);

// find - 查找第一个符合条件的元素
const found = arr.find(item => item.id === 5);

// findIndex - 查找第一个符合条件的索引
const index = arr.findIndex(item => item.id === 5);

// some - 判断是否有元素符合条件
const hasMatch = arr.some(item => item > 10);

// every - 判断是否所有元素都符合条件
const allMatch = arr.every(item => item > 0);

// reduce - 累加器，将数组归约为单个值
const sum = arr.reduce((acc, cur) => acc + cur, 0);

// reduceRight - 从右向左累加
const result = arr.reduceRight((acc, cur) => acc + cur, 0);
```


