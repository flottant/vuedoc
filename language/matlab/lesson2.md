---
title: 第2课：脚本编程与控制语句
icon: matlab
description: 脚本，控制语句与技巧
category:
  - 语言基础
tag:
  - 语言
  - MATLAB
article: true
date: 2022-09-19
---

## MATLAB 脚本界面介绍

脚本文件：以 .m 文件结尾。

运行：F5 或点击运行按钮。

寻找函数：点击工具栏 f(x) 按钮。

注释：单个百分号注释一行。

可以框选代码直接按注释按钮注释。

两个百分号将代码划分为代码块。选择 `Run section` 可以运行指定的代码块。

在行号旁边单击可以添加断点。

`Ctrl + I`可以使代码自动缩进。

## 常用流程控制语句

### 逻辑操作符

| 操作符 | 含义     |
| ------ | -------- |
| `<`    | 小于     |
| `<=`   | 小于等于 |
| `>`    | 大于     |
| `>=`   | 大于等于 |
| `==`   | 等于     |
| `~=`   | 不等于   |
| `&&`   | 与       |
| `\|\|`   | 或       |

:::warning

与其他大多数编程语言不同，MATLAB 中判断不等于使用的是`~=`。
:::

### `if`语句

```matlab
if condition1
	statement1
else if condition2
	statement2
else 
	statement3
end
```

举例：

```matlab
a = 3;
if rem(a,2) == 0
	disp("a is even");
else
	disp("a is odd");
end
```

### `switch`语句

```matlab
switch expression
case value1
	statement1
case value2
	statement2
···
otherwise
	statement
end
```

举例：

```matlab
input_num = 1;
switch input_num
	case -1
		disp("negative 1");
	case 0
		disp("zero");
	otherwise
		disp("other value");
end
```

:::tip

与其他语言不同的是，`value`的值可以是字符串，字符或数据等。

:::

###   `while`语句

```matlab
while expression
	statement
end
```

举例：

```matlab
n = 1;
while prod(1:n) < 1e100
	n = n + 1;
end
disp(n)
```

:::tip

`prod`为连乘函数， `prod(1:n)`等同于 `factorial(n)`。

:::

### `for`语句

```matlab
for variable = start : increment : end
	commands
end
```

举例：

```matlab
for n = 1:10
	a(n) = 2 ^ n;
end
disp(a)
```

可以想到，可迭代对象可以被赋值给循环变量。

:::warning

脚本运行前，应该青空重名的变量数据。

:::

::: tip
信息：预分配空间可以提升运行速度。
:::



::: code-tabs#matlab
@tab 优化前

```matlab
clear
tic
for ii = 1:2000
    for jj = 1:2000
        A(ii,jj) = ii + jj;
    end
end
toc
```

@tab 优化后

```matlab
clear
tic
A = zeros(2000,2000);    % 预分配空间
for ii = 1:2000
    for jj = 1:2000
        A(ii,jj) = ii + jj;
    end
end
toc
```
:::

注意到优化后的代码速度显著提升。

:::tip
`tic`与`toc`配对使用，用于记录脚本运行的时间。
:::


### `break`与`continue`语句

在循环中，使用 `break`来退出**整个**循环。

在循环中，使用`continue`来跳过**这次**循环中剩余的语句，直接进入**下次循环**。