// 通用空值检查函数
const isEmpty = (value) => {
  return value === null || 
         value === undefined || 
         value === '' || 
         (Array.isArray(value) && value.length === 0) ||
         (typeof value === 'object' && Object.keys(value).length === 0);
};

// 判断所有值都为空
const allEmpty = (...values) => values.every(isEmpty);

// 使用示例
console.log(allEmpty('', null, undefined)); // true
console.log(allEmpty('', null, 'hello'));   // false
