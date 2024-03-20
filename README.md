# formily_scratch
Learn formily source code

# steps
## 1. add the basic packages and framewrk.
### 1.1 set the tsconfig to find the function correctly.


## 2. add a function in shared
uid

## 3. add the class Form and export createForm()

# todo
## 1.implement the build script


# notes
## 1.pay attention to `tsconfig.build.json` file
如果 paths 配置不对，很有可能无法正确加载对应的包。

# core concept
## 理解 observable
raw object 转化为 observable object

这句话没有理解  同时可以作为 annotation 给 define 用于标记响应式属性
observable 对象也有不同类型
deep shallow computed ref box

## autorun
接收一个 tracker 函数，如果函数内部有消费 observable 数据，数据发生变化时，tracker 函数会重复执行
