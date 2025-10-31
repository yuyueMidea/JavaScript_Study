const ulist = [
    { name: 'zhangsan', age: 33, gender: 'male' },
    { name: 'lisi', age: 34, gender: 'male' },
    { name: 'wangwu', age: 45, gender: 'female' },
    { name: 'zhaoliu', age: 26, gender: 'male' },
    { name: 'alice', age: 18, gender: 'female' },
]

const obj = {}
for (const user of ulist) {
    const { age, gender } = user;
    switch (gender) {
        case 'male':
            if (!obj.male) {
                obj.male = { count: 0, total: 0 };
            }
            obj.male.count++;
            obj.male.total += age;
            break;
        case 'female':
            if (!obj.female) {
                obj.female = { count: 0, total: 0 };
            }
            obj.female.count++;
            obj.female.total += age;
            break;
    }
}

console.log('resObj_: ', obj)