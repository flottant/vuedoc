---
title: 第2章 脚本执行、赋值语句；简单输入与输出
icon: python
description: 脚本、赋值语句、输入与输出
category:
  - 语言基础
tag:
  - 语言
  - Python
article: true
date: 2022-12-06
dir:
    order: 3
---

## 脚本执行

还记得第 0 章我们的`hello world`脚本吗？

现在让我们试试输入与输出，并与之交互。

将下面的代码粘贴进 Thonny 编辑器中。

```python
a = input("Hi,input here!: ")
print("Output here!")
print(a)
```

然后点击运行按钮。

![](https://search.pstatic.net/common/?src=https://i.imgur.com/LdgTcSb.jpeg)

正如你所见：

**你在编辑区编写脚本，在交互区进行输入。**

## 赋值语句

python 中简单的 赋值语句长这样：

```python
yourNumber = 23
```

等号左侧，是变量的名称；等号右侧是变量的具体值。

如果多个变量需要赋值：

```python
a,b = 2,3
d,e,f,g = 5,6,7,8
```

在 python 中，如果需要简单地交换两个变量的值只需要这么写：

```python
a,b = b,a
```

注意到，我们可以任意地更改变量的类型：

```python
a = 2
a = 2.3
a = "string23"
```

这也是 python 被称为动态类型语言的原因。

变量的命名：

+ 使用字母开头。
+ 名称要有意义。
+ 不要撞关键词。如果觉得会撞，前面通通加上 My。例如：`int`是 python 中的函数；为了避免混淆，我们可以起 `myInt`的名字。
+ 区分大小写。 `hew` 与`HEW` 不同。
+ 不要加奇怪的符号。

我们推荐两种常见的变量命名方式：

+ 下划线： `student_score_value`
+ 小驼峰： `studentScoreValue`

你的代码风格应该尽量统一。

## 输入

我们用 `input()`函数读入一个 `string`类型。

例如，读入变量 a 的值：

```python
a = input()
```

注意，这样读进来的 a 的类型是 `string` 类型。

还记得我们讲的类型转换吗？如果 a 是整数或者浮点数，只要这样写：

```python
a = eval(input())
```

或者

```python
a = input()
a = eval(a)
```

`eval`函数会自动推断数据类型。

`input`函数中可以添加参数用于输入提示。

例如：

```python
a = eval(input("请输入 a 的值："))
```

运行脚本，交互区会这样显示：

```python
>>> %Run -c $EDITOR_CONTENT
请输入 a 的值：23
```

如果置空，交互区则会直接等待用户的输入。

## 输出

我们用 `print()`函数进行输出。

例如：

```python
a = 2
print(a)
```

交互区会显示：

```python
>>> %Run -c $EDITOR_CONTENT
2
```

如果两个 `print()`连在一起，默认会换行。

```python
print("line1")
print("line2")
```

交互区：

```python
>>> %Run -c $EDITOR_CONTENT
line1
line2
```

更加详细的输出将会放在下一章讲述。

## 案例分析：鸡兔同笼

问题：现在有鸡和兔子同在一个笼子里，从上面数，有 a 个头。从下面数，有 b 只脚。问，鸡兔各有多少只？

注意：**如果用数学方法解决很简单，那么就用数学方法。**

输入分成两行，一行为 a 的值，一行为 b 的值。默认测试数据有解。

输出分成两行，一行为鸡的个数；一行为兔的个数。



显然，设鸡 x 只，兔 y 只。

我们能够写出二元一次方程组：
$$
x + y = a
\\
2x + 4y = b
$$
很容易解得：
$$
x = - \frac{b}{2} + 2a
\\
y = - a + \frac{b}{2}
$$
那么，写代码就很简单了。

我们先来写输入：

```python
a = eval(input())
b = eval(input())
```

然后计算：

```python
x = -b / 2 + 2 * a
y = -a + b / 2
```

将结果转换成整数：

```python
x = int(x)
y = int(y)
```

最后输出：

```python
print(x)
print(y)
```

很简单吧！下面请你试试吧！

## 课后作业

完成：https://hydro.ac/d/flot/p/2

