---
title: 第1课：基本操作与矩阵
icon: matlab
description: 计算，矩阵与基础命令
category:
  - 语言基础
tag:
  - 语言
  - MATLAB
article: true
date: 2022-09-18
---


## 将 MATLAB 当作计算器


$\cos \left(\sqrt{\frac{(1+2+3+4)^3}{5}}\right)$

$\sin (\sqrt{\pi})+\ln (\tan (1))$

$\displaystyle 2^{3.5 \times 1.7}$

$\displaystyle e^{\sin (10)}$

```matlab
>> cos(sqrt((1+2+3+4)^3/5))
ans =
   -0.0050

>> sin(sqrt(pi))+log(tan(1))
ans =
    1.4228

>>  2^(3.5*1.7)
ans =
   61.8199

>> exp(sin(10))
ans =
    0.5804
```


### 算术运算

加、减、乘、除、幂、四舍五入

算术函数包括用于简单运算（如加法和乘法）的运算符，以及用于常见计算（如求和、移动和、取模运算和舍入）的函数。

#### 加法

|函数名|用法|
| :---------------------------------------------------------------| ----|
|[`plus,+`](https://ww2.mathworks.cn/help/matlab/ref/plus.html)|添加数字，追加字符串|
|[`sum`](https://ww2.mathworks.cn/help/matlab/ref/sum.html)|数组元素总和|
|[`cumsum`](https://ww2.mathworks.cn/help/matlab/ref/cumsum.html)|累积和|
|[`movsum`](https://ww2.mathworks.cn/help/matlab/ref/movsum.html)|移动总和|

#### 减法

|函数名|用法|
| ------------------------------------------------------------| ----|
|[`-`](https://ww2.mathworks.cn/help/matlab/ref/minus.html)|减法|
|[`diff`](https://ww2.mathworks.cn/help/matlab/ref/diff.html)|差分和近似导数|

#### 乘法

|函数名|用法|
| :-----------------------------------------------------------------------| :---|
|[`.*`](https://ww2.mathworks.cn/help/matlab/ref/times.html)|乘法|
|[`*`](https://ww2.mathworks.cn/help/matlab/ref/mtimes.html)|矩阵乘法|
|[`prod`](https://ww2.mathworks.cn/help/matlab/ref/prod.html)|数组元素的乘积|
|[`cumprod`](https://ww2.mathworks.cn/help/matlab/ref/cumprod.html)|累积乘积|
|[`pagemtimes`](https://ww2.mathworks.cn/help/matlab/ref/pagemtimes.html)|按页矩阵乘法|

#### 除法

|函数名|用法|
| -------------------------------------------------------------| ----|
|[`./`](https://ww2.mathworks.cn/help/matlab/ref/rdivide.html)|数组右除|
|[`.\`](https://ww2.mathworks.cn/help/matlab/ref/ldivide.html)|数组左除|
|[`/`](https://ww2.mathworks.cn/help/matlab/ref/mrdivide.html)|求解关于 x 的线性方程组 xA = B|
|[`\`](https://ww2.mathworks.cn/help/matlab/ref/mldivide.html)|求解关于 x 的线性方程组 Ax = B|

#### 幂

|函数名|用法|
| -----------------------------------------------------------| ----|
|[`.^`](https://ww2.mathworks.cn/help/matlab/ref/power.html)|按元素求幂|
|[`^`](https://ww2.mathworks.cn/help/matlab/ref/mpower.html)|矩阵幂|

#### 转置

|函数名|用法|
| --------------------------------------------------------------------------------| ----|
|[`.'`](https://ww2.mathworks.cn/help/matlab/ref/transpose.html)|转置向量或矩阵|
|[`'`](https://ww2.mathworks.cn/help/matlab/ref/ctranspose.html)|复共轭转置|
|[`pagetranspose`](https://ww2.mathworks.cn/help/matlab/ref/pagetranspose.html)|按页转置|
|[`pagectranspose`](https://ww2.mathworks.cn/help/matlab/ref/pagectranspose.html)|按页复共轭转置|

#### 数组符号

|函数名|用法|
| :---------------------------------------------------------------| :---|
|[`uminus`](https://ww2.mathworks.cn/help/matlab/ref/uminus.html)|一元减法|
|[`uplus`](https://ww2.mathworks.cn/help/matlab/ref/uplus.html)|一元加法|

#### 模除法和舍入

|函数名|用法|
| ------------------------------------------------------------------| ----|
|[`mod`](https://ww2.mathworks.cn/help/matlab/ref/mod.html)|除后的余数（取模运算）|
|[`rem`](https://ww2.mathworks.cn/help/matlab/ref/rem.html)|除后的余数|
|[`idivide`](https://ww2.mathworks.cn/help/matlab/ref/idivide.html)|带有舍入选项的整除|
|[`ceil`](https://ww2.mathworks.cn/help/matlab/ref/ceil.html)|向正无穷舍入|
|[`fix`](https://ww2.mathworks.cn/help/matlab/ref/fix.html)|向零舍入|
|[`floor`](https://ww2.mathworks.cn/help/matlab/ref/floor.html)|向负无穷舍入|
|[`round`](https://ww2.mathworks.cn/help/matlab/ref/round.html)|四舍五入为最近的小数或整数|

#### 自定义二元函数

|函数名|用法|
| ----------------------------------------------------------------| :--- |
|[`bsxfun`](https://ww2.mathworks.cn/help/matlab/ref/bsxfun.html)|对两个数组应用按元素运算（启用隐式扩展）|

### 三角运算

#### 简单三角运算

|函数名 |用法|
| ---------------------------------------------------------------------| ----------|
|[`sin`](https://ww2.mathworks.cn/help/matlab/ref/sin.html)|参数的正弦，以弧度为单位|
|[`sind`](https://ww2.mathworks.cn/help/matlab/ref/sind.html)|参数的正弦，以度为单位|
|[`sinpi`](https://ww2.mathworks.cn/help/matlab/ref/double.sinpi.html)|准确地计算 sin(X*pi)|
|[`asin`](https://ww2.mathworks.cn/help/matlab/ref/asin.html)|反正弦（以弧度为单位）|
|[`asind`](https://ww2.mathworks.cn/help/matlab/ref/asind.html)|反正弦（以度为单位）|
|[`sinh`](https://ww2.mathworks.cn/help/matlab/ref/sinh.html)|双曲正弦|
|[`asinh`](https://ww2.mathworks.cn/help/matlab/ref/asinh.html)|反双曲正弦|

cos,tan,csc,sec,cot 同理。

#### 斜边

|函数名|用法|
| --------------------------------------------------------------| ------------|
|[`hypot`](https://ww2.mathworks.cn/help/matlab/ref/hypot.html)|平方和的平方根（斜边）|

#### 度/弧度转换

|函数名|用法|
| ------------------------------------------------------------------| ------------|
|[`deg2rad`](https://ww2.mathworks.cn/help/matlab/ref/deg2rad.html)|将角从以度为单位转换为以弧度为单位|
|[`rad2deg`](https://ww2.mathworks.cn/help/matlab/ref/rad2deg.html)|将角的单位从弧度转换为度|

#### 坐标转换

|函数名|用法|
| --------------------------------------------------------------------| -------------------------------|
|[`cart2pol`](https://ww2.mathworks.cn/help/matlab/ref/cart2pol.html)|将笛卡尔坐标转换为极坐标或柱坐标|
|[`cart2sph`](https://ww2.mathworks.cn/help/matlab/ref/cart2sph.html)|将笛卡尔坐标转换为球面坐标|
|[`pol2cart`](https://ww2.mathworks.cn/help/matlab/ref/pol2cart.html)|将极坐标或柱坐标转换为笛卡尔坐标|
|[`sph2cart`](https://ww2.mathworks.cn/help/matlab/ref/sph2cart.html)|将球面坐标转换为笛卡尔坐标|

### 指数和对数

除了 [`exp`](https://ww2.mathworks.cn/help/matlab/ref/exp.html) 和 [`log`](https://ww2.mathworks.cn/help/matlab/ref/log.html) 等常用函数，MATLAB 还提供了其他几个相关函数，可以进行灵活的数值计算。[`expm1`](https://ww2.mathworks.cn/help/matlab/ref/expm1.html) 和 [`log1p`](https://ww2.mathworks.cn/help/matlab/ref/log1p.html) 函数补偿小参数中的数值舍入误差，而 [`reallog`](https://ww2.mathworks.cn/help/matlab/ref/reallog.html)、[`realpow`](https://ww2.mathworks.cn/help/matlab/ref/realpow.html) 和 [`realsqrt`](https://ww2.mathworks.cn/help/matlab/ref/realsqrt.html) 函数将这些函数的范围限制为实数。[`nthroot`](https://ww2.mathworks.cn/help/matlab/ref/nthroot.html) 计算任意次方根，而专用函数 [`pow2`](https://ww2.mathworks.cn/help/matlab/ref/pow2.html) 和 [`nextpow2`](https://ww2.mathworks.cn/help/matlab/ref/nextpow2.html) 计算 2 的幂。


|函数名 |用法|
| --------------------------------------------------------------------| ----|
|[`exp`](https://ww2.mathworks.cn/help/matlab/ref/exp.html)|指数|
|[`expm1`](https://ww2.mathworks.cn/help/matlab/ref/expm1.html)|针对较小的 x 值正确计算 exp(x)-1|
|[`log`](https://ww2.mathworks.cn/help/matlab/ref/log.html)|自然对数|
|[`log10`](https://ww2.mathworks.cn/help/matlab/ref/log10.html)|常用对数（以 10 为底）|
|[`log1p`](https://ww2.mathworks.cn/help/matlab/ref/log1p.html)|针对较小的 x 值正确计算 log(1+x)|
|[`log2`](https://ww2.mathworks.cn/help/matlab/ref/log2.html)|以 2 为底的对数和浮点数分解|
|[`nextpow2`](https://ww2.mathworks.cn/help/matlab/ref/nextpow2.html)|2 的更高次幂的指数|
|[`nthroot`](https://ww2.mathworks.cn/help/matlab/ref/nthroot.html)|实数的第 n 次实根|
|[`pow2`](https://ww2.mathworks.cn/help/matlab/ref/pow2.html)|浮点数的以 2 为底的幂运算和缩放|
|[`reallog`](https://ww2.mathworks.cn/help/matlab/ref/reallog.html)|非负实数数组的自然对数|
|[`realpow`](https://ww2.mathworks.cn/help/matlab/ref/realpow.html)|仅实数输出的数组幂|
|[`realsqrt`](https://ww2.mathworks.cn/help/matlab/ref/realsqrt.html)|非负实数数组的平方根|
|[`sqrt`](https://ww2.mathworks.cn/help/matlab/ref/sqrt.html)|平方根|

### 复数

实部和虚部、相位角度

在 MATLAB 中，`i` 和 `j` 表示基本虚数单位。您可以使用它们来创建复数，例如 `2i+5`。您还可以确定复数的实部和虚部，并计算相位和角度等其他常用值。


|函数名|用法|
| --------------------------------------------------------------------| ----|
|[`abs`](https://ww2.mathworks.cn/help/matlab/ref/abs.html)|绝对值和复数的模|
|[`angle`](https://ww2.mathworks.cn/help/matlab/ref/angle.html)|相位角|
|[`complex`](https://ww2.mathworks.cn/help/matlab/ref/complex.html)|创建复数数组|
|[`conj`](https://ww2.mathworks.cn/help/matlab/ref/conj.html)|复共轭|
|[`cplxpair`](https://ww2.mathworks.cn/help/matlab/ref/cplxpair.html)|将复数排序为复共轭对组|
|[`i`](https://ww2.mathworks.cn/help/matlab/ref/i.html)|虚数单位|
|[`imag`](https://ww2.mathworks.cn/help/matlab/ref/imag.html)|复数的虚部|
|[`isreal`](https://ww2.mathworks.cn/help/matlab/ref/isreal.html)|确定数组是否使用复数存储|
|[`j`](https://ww2.mathworks.cn/help/matlab/ref/j.html)|虚数单位|
|[`real`](https://ww2.mathworks.cn/help/matlab/ref/real.html)|复数的实部|
|[`sign`](https://ww2.mathworks.cn/help/matlab/ref/sign.html)|Sign 函数（符号函数）|
|[`unwrap`](https://ww2.mathworks.cn/help/matlab/ref/unwrap.html)|平移相位角|

函数查找方式：右上角搜索文档


## 数据类型

MATLAB 的默认存储数据类型为 double, 即双精度浮点数。

输入 `whos` 命令来查询所有的变量类型。

```matlab
>> whos
  Name      Size            Bytes  Class     Attributes
  a         1x1                 8  double          
  ans       1x1                 8  double            
```

输入 `who` 来查看存储变量的简略信息。

保留的特殊常量：

|名称|含义|
| ----| --------------------------|
|i,j|复数|
|Inf|无穷|
|eps|浮点相对精度（2.2204e-16）|
|NaN|Not a Number,不是一个数|
|pi|$\pi$​|

删除已经定义的变量：`clear x`

:::danger
如果不加删除的变量，会清空所有。
:::
### Format 命令

`format` 命令用来调整数据输出格式。

|类型|说明|
| --------| -------------------------------------------|
|short|小数点后四位|
|long|双精度小数点后 15 位，单精度小数点后 7 位|
|shortE|科学计数法表示 short|
|longE|科学计数法表示 long|
|bank|银行计数，即小数点后两位|
|hex|以 16 进制表示二进制数|
|rat|化为小整数分数|

练习

计算下式的分数与小数结果。

$$
\frac{3}{13} + \frac{4}{14} + \frac{5}{15}
$$

```matlab
>> format rat
>> 3/13 + 4/14 + 5/15
ans =
     232/273   

>> format long
>> 3/13 + 4/14 + 5/15
ans =
   0.849816849816850
```

### 其他命令

在 MATLAB 中，语句后加分号可以取消打印结果，仅仅储存。

```matlab
>> a = 2
a =
     2

>> a = 3;

>> a
a =
     3
```

## 矩阵输入与计算

### 矩阵输入

使用空格或逗号隔开每列，分号隔开每行。

```matlab
>> a = [1 2 3 4 5]
a =
     1     2     3     4     5

>> b = [1;2;3;4;5]
b =
     1
     2
     3
     4
     5

>> C = [1 2 ; 3 4; 5 6]
C =
     1     2
     3     4
     5     6
```



矩阵乘法使用单个`*`号实现。

```matlab
>> [1;2;3]*[4 5 6]
ans =
     4     5     6
     8    10    12
    12    15    18
```



### 矩阵索引

::: warning

与其他常见编程语言不同的是，MATLAB 使用 `()`来索引。
:::

::: warning
与其他常见编程语言不同的是，MATLAB 从 **1** 开始计数。
::: 


MATLAB 的矩阵索引顺序是：自从第一列的第一行到最后一行，到第二列，以此类推。如图。

```matlab
     1     4     7		···
     2     5     8		···
     3     6     9		···
```

`A(8)`表示按上图索引到的第8个元素。

`A(1,2)` 表示第1行第二列的元素。

`A([1 3],[1 3])` 表示如下：

<img src="https://i.imgur.com/hZHT4m4.jpeg" style="zoom:50%;" />

`A([1 3; 1 3])` 表示如下：

<img src="https://i.imgur.com/zBmMzYD.jpeg" style="zoom:50%;" />

练习：
$$
A=\left[\begin{array}{ccc}
1 & 21 & 6 \\
5 & 17 & 9 \\
31 & 2 & 7
\end{array}\right] \rightarrow\left[\begin{array}{ccc}
1 & 76 & 6 \\
5 & 17 & 9 \\
31 & 0 & 7
\end{array}\right] \rightarrow\left[\begin{array}{ccc}
1 & 0 & 0 \\
5 & 0 & 0 \\
31 & 0 & 7
\end{array}\right]
$$

```matlab
>> A = [1 21 6; 5 17 9; 31 2 7]
A =
     1    21     6
     5    17     9
    31     2     7

>> A(1,2) = 76
A =
     1    76     6
     5    17     9
    31     2     7

>> A([1 2],[2 3]) = 0
A =
     1     0     0
     5     0     0
    31     2     7
`
```



### 冒号操作符

$j: k \Rightarrow[j, j+1, j+2, \ldots, j+m]$

$j: i: k \Rightarrow[j, j+i, j+2 i, \ldots, j+m * i]$

练习：

- What's the answer from MATLAB after typing?

$$
\begin{aligned}
&>>\mathrm{B}=1: 5 \\
&>>\mathrm{B}=1: 2: 5 \\
&>>\mathrm{B}=[1: 5 ; 2: 3: 15 ;-2: 0.5: 0] \\
&>>\text { str }=\mathrm{'a'}: 2: \mathrm{'z'}
\end{aligned}
$$

```matlab
>> B = 1:5
B =
     1     2     3     4     5

>> B = 1:2:5
B =
     1     3     5
     
>> B  = [1:5;2:3:15;-2:0.5:0]
B =
    1.0000    2.0000    3.0000    4.0000    5.0000
    2.0000    5.0000    8.0000   11.0000   14.0000
   -2.0000   -1.5000   -1.0000   -0.5000         0
   
>> str = 'a':2:'z'
str =
    'acegikmoqsuwy'
```



将两者结合起来：

```
>> a = [1 2 3; 4 5 6; 7 8 9]
a =
     1     2     3
     4     5     6
     7     8     9
 
>> a(3,:)=[]
a =
     1     2     3
     4     5     6
 
>> a(:,2)
ans =
     2
     5
```



### 矩阵的合并

使用空格合并列，使用分号合并列。

```matlab
>> A  = [1,2;3,4]
A =
     1     2
     3     4

>> B = [8;9]
B =
     8
     9

>> F = [A B]
F =
     1     2     8
     3     4     9
     
>> A = [1 2;3 4]
A =
     1     2
     3     4

>> B = [5 6]
B =
     5     6

>> V = [A;B]
V =
     1     2
     3     4
     5     6
```



### 矩阵操作

矩阵与矩阵间操作符：

矩阵加法、减法、乘法运算符依次为 `+`，`-` ，`*`。

`.*`：点乘操作符：将对应的元素相乘，放置在结果中。

```matlab
>> A = [1 2 3;4 5 6;7 8 9]
A =
     1     2     3
     4     5     6
     7     8     9

>> B = [2;3;4]
B =
     2
     3
     4

>> A .* B
ans =
     2     4     6
    12    15    18
    28    32    36
```

`/`：左除操作符： 等同于`A * inv(B)`。

`./`：点左除操作符：同 `.*` 类似，将对应的元素相左除。

`\`：右除操作符： 等同于`inv(A) * B`。

`.\`：点右除操作符：同 `.*` 类似，将对应的元素相右除。

`'`：矩阵的转置操作符。

矩阵和常数间的操作符：

`^`：矩阵的次方运算。

`.^`：将对应的元素作次方运算。

`+`  `-` `*` `/`：分别为加法、减法、乘法、除法。

注意此时`./` 与`/`、`*`与`.*`操作相同。



### 矩阵的其他计算符号

| 计算符         | 说明                           |
| -------------- | ------------------------------ |
| `eye(n)`       | 建立 n 阶单位矩阵              |
| `zeros(n1,n2)` | 建立 n1 x n2 的矩阵，用 0 填充 |
| `ones(n1,n2)`  | 建立 n1 x n2 的矩阵，用 1 填充 |
| `diag(A)`      | 建立 A 矩阵的对角阵            |
| `rand(n)`      | 建立 n 阶随机矩阵              |

### linspace 函数

`linsapce(首项，尾项，个数)`

例：

```matlab
>> linspace(0,13,6)
ans =
         0    2.6000    5.2000    7.8000   10.4000   13.0000
```

### 常用函数

| 函数          | 用法                                         |
| ------------- | -------------------------------------------- |
| `max(A)`      | 给出矩阵每一列的最大值组成的矩阵             |
| `min(A)`      | 给出矩阵每一列的最小值组成的矩阵             |
| `sum(A)`      | 给出矩阵每一列的和组成的矩阵                 |
| `mean(A)`     | 给出矩阵每一列的平均值组成的矩阵             |
| `sort(A)`     | 对单独的列中进行单独的排序                   |
| `sortrows(A)` | 以行为单位，按第一列大小进行排序             |
| `size(A)`     | 返回两个数值，为矩阵的尺寸                   |
| `length(A)`   | 返回矩阵的维度                               |
| `find(A)`     | 返回所有满足条件的数的索引，例：`find(A==5)` |

### 其他函数

#### 线性方程

| 函数                                                         | 用法                                     |
| ------------------------------------------------------------ | ---------------------------------------- |
| [`mldivide`](https://ww2.mathworks.cn/help/matlab/ref/mldivide.html) | 求解关于 x 的线性方程组 Ax = B           |
| [`mrdivide`](https://ww2.mathworks.cn/help/matlab/ref/mrdivide.html) | 求解关于 x 的线性方程组 xA = B           |
| [`pagemldivide`](https://ww2.mathworks.cn/help/matlab/ref/pagemldivide.html) | Page-wise left matrix divide             |
| [`pagemrdivide`](https://ww2.mathworks.cn/help/matlab/ref/pagemrdivide.html) | Page-wise right matrix divide            |
| [`decomposition`](https://ww2.mathworks.cn/help/matlab/ref/decomposition.html) | 求解线性方程组的矩阵分解                 |
| [`lsqminnorm`](https://ww2.mathworks.cn/help/matlab/ref/lsqminnorm.html) | 线性方程的最小范数最小二乘解             |
| [`linsolve`](https://ww2.mathworks.cn/help/matlab/ref/linsolve.html) | 对线性方程组求解                         |
| [`inv`](https://ww2.mathworks.cn/help/matlab/ref/inv.html)   | 矩阵求逆                                 |
| [`pageinv`](https://ww2.mathworks.cn/help/matlab/ref/pageinv.html) | Page-wise matrix inverse                 |
| [`pinv`](https://ww2.mathworks.cn/help/matlab/ref/pinv.html) | Moore-Penrose 伪逆                       |
| [`lscov`](https://ww2.mathworks.cn/help/matlab/ref/lscov.html) | 存在已知协方差情况下的最小二乘解         |
| [`lsqnonneg`](https://ww2.mathworks.cn/help/matlab/ref/lsqnonneg.html) | 求解非负线性最小二乘问题                 |
| [`sylvester`](https://ww2.mathworks.cn/help/matlab/ref/sylvester.html) | 求解关于 X 的 Sylvester 方程 AX + XB = C |

#### 特征值和奇异值

| 函数                                                         | 用法                                   |
| ------------------------------------------------------------ | -------------------------------------- |
| [`eig`](https://ww2.mathworks.cn/help/matlab/ref/eig.html)   | 特征值和特征向量                       |
| [`eigs`](https://ww2.mathworks.cn/help/matlab/ref/eigs.html) | 特征值和特征向量的子集                 |
| [`balance`](https://ww2.mathworks.cn/help/matlab/ref/balance.html) | 对角线缩放以提高特征值准确性           |
| [`svd`](https://ww2.mathworks.cn/help/matlab/ref/double.svd.html) | 奇异值分解                             |
| [`pagesvd`](https://ww2.mathworks.cn/help/matlab/ref/pagesvd.html) | Page-wise singular value decomposition |
| [`svds`](https://ww2.mathworks.cn/help/matlab/ref/svds.html) | 奇异值和向量的子集                     |
| [`svdsketch`](https://ww2.mathworks.cn/help/matlab/ref/svdsketch.html) | 计算低秩矩阵草图的 SVD                 |
| [`gsvd`](https://ww2.mathworks.cn/help/matlab/ref/gsvd.html) | 广义奇异值分解                         |
| [`ordeig`](https://ww2.mathworks.cn/help/matlab/ref/ordeig.html) | 拟三角矩阵的特征值                     |
| [`ordqz`](https://ww2.mathworks.cn/help/matlab/ref/ordqz.html) | 在 QZ 分解中将特征值重新排序           |
| [`ordschur`](https://ww2.mathworks.cn/help/matlab/ref/ordschur.html) | 在 Schur 分解中将特征值重新排序        |
| [`polyeig`](https://ww2.mathworks.cn/help/matlab/ref/polyeig.html) | 多项式特征值问题                       |
| [`qz`](https://ww2.mathworks.cn/help/matlab/ref/qz.html)     | 广义特征值的 QZ 分解                   |
| [`hess`](https://ww2.mathworks.cn/help/matlab/ref/hess.html) | 矩阵的 Hessenberg 形式                 |
| [`schur`](https://ww2.mathworks.cn/help/matlab/ref/schur.html) | Schur 分解                             |
| [`rsf2csf`](https://ww2.mathworks.cn/help/matlab/ref/rsf2csf.html) | 将实数 Schur 形式转换为复数 Schur 形式 |
| [`cdf2rdf`](https://ww2.mathworks.cn/help/matlab/ref/cdf2rdf.html) | 将复数对角型转换为实数块对角型         |

#### 矩阵分解

| 函数                                                         | 用法                              |
| ------------------------------------------------------------ | --------------------------------- |
| [`lu`](https://ww2.mathworks.cn/help/matlab/ref/lu.html)     | LU 矩阵分解                       |
| [`ldl`](https://ww2.mathworks.cn/help/matlab/ref/ldl.html)   | Hermitian 不定矩阵的分块 LDL 分解 |
| [`chol`](https://ww2.mathworks.cn/help/matlab/ref/chol.html) | Cholesky 分解                     |
| [`cholupdate`](https://ww2.mathworks.cn/help/matlab/ref/cholupdate.html) | Cholesky 分解的秩 1 更新          |
| [`qr`](https://ww2.mathworks.cn/help/matlab/ref/qr.html)     | QR 分解                           |
| [`qrdelete`](https://ww2.mathworks.cn/help/matlab/ref/qrdelete.html) | 从 QR 分解中删除列或行            |
| [`qrinsert`](https://ww2.mathworks.cn/help/matlab/ref/qrinsert.html) | 将列或行插入 QR 分解              |
| [`qrupdate`](https://ww2.mathworks.cn/help/matlab/ref/qrupdate.html) | QR 分解的秩 1 更新                |
| [`planerot`](https://ww2.mathworks.cn/help/matlab/ref/planerot.html) | Givens 平面旋转                   |

#### 矩阵运算

| 函数                                                         | 用法             |
| ------------------------------------------------------------ | ---------------- |
| [`transpose`](https://ww2.mathworks.cn/help/matlab/ref/transpose.html) | 转置向量或矩阵   |
| [`ctranspose`](https://ww2.mathworks.cn/help/matlab/ref/ctranspose.html) | 复共轭转置       |
| [`pagetranspose`](https://ww2.mathworks.cn/help/matlab/ref/pagetranspose.html) | 按页转置         |
| [`pagectranspose`](https://ww2.mathworks.cn/help/matlab/ref/pagectranspose.html) | 按页复共轭转置   |
| [`mtimes`](https://ww2.mathworks.cn/help/matlab/ref/mtimes.html) | 矩阵乘法         |
| [`pagemtimes`](https://ww2.mathworks.cn/help/matlab/ref/pagemtimes.html) | 按页矩阵乘法     |
| [`mpower`](https://ww2.mathworks.cn/help/matlab/ref/mpower.html) | 矩阵幂           |
| [`sqrtm`](https://ww2.mathworks.cn/help/matlab/ref/sqrtm.html) | 矩阵平方根       |
| [`expm`](https://ww2.mathworks.cn/help/matlab/ref/expm.html) | 矩阵指数         |
| [`logm`](https://ww2.mathworks.cn/help/matlab/ref/logm.html) | 矩阵对数         |
| [`funm`](https://ww2.mathworks.cn/help/matlab/ref/funm.html) | 计算常规矩阵函数 |
| [`kron`](https://ww2.mathworks.cn/help/matlab/ref/kron.html) | Kronecker 张量积 |
| [`cross`](https://ww2.mathworks.cn/help/matlab/ref/cross.html) | 叉积             |
| [`dot`](https://ww2.mathworks.cn/help/matlab/ref/dot.html)   | 点积             |

#### 矩阵结构

| 函数                                                         | 用法                                           |
| ------------------------------------------------------------ | ---------------------------------------------- |
| [`bandwidth`](https://ww2.mathworks.cn/help/matlab/ref/bandwidth.html) | 矩阵的上下带宽                                 |
| [`tril`](https://ww2.mathworks.cn/help/matlab/ref/tril.html) | 矩阵的下三角形部分                             |
| [`triu`](https://ww2.mathworks.cn/help/matlab/ref/triu.html) | 矩阵的上三角部分                               |
| [`isbanded`](https://ww2.mathworks.cn/help/matlab/ref/isbanded.html) | 确定矩阵是否在特定带宽范围内                   |
| [`isdiag`](https://ww2.mathworks.cn/help/matlab/ref/isdiag.html) | 确定矩阵是否为对角矩阵                         |
| [`ishermitian`](https://ww2.mathworks.cn/help/matlab/ref/ishermitian.html) | 确定矩阵是 Hermitian 矩阵还是斜 Hermitian 矩阵 |
| [`issymmetric`](https://ww2.mathworks.cn/help/matlab/ref/issymmetric.html) | 确定矩阵是对称矩阵还是斜对称矩阵               |
| [`istril`](https://ww2.mathworks.cn/help/matlab/ref/istril.html) | 确定矩阵是否为下三角矩阵                       |
| [`istriu`](https://ww2.mathworks.cn/help/matlab/ref/istriu.html) | 确定矩阵是否为上三角矩阵                       |

#### 矩阵属性

| 函数                                                         | 用法                                      |
| ------------------------------------------------------------ | ----------------------------------------- |
| [`norm`](https://ww2.mathworks.cn/help/matlab/ref/norm.html) | 向量范数和矩阵范数                        |
| [`normest`](https://ww2.mathworks.cn/help/matlab/ref/normest.html) | 2-范数估值                                |
| [`vecnorm`](https://ww2.mathworks.cn/help/matlab/ref/vecnorm.html) | 向量范数                                  |
| [`cond`](https://ww2.mathworks.cn/help/matlab/ref/cond.html) | 逆运算的条件数                            |
| [`condest`](https://ww2.mathworks.cn/help/matlab/ref/condest.html) | 1-范数条件数估计                          |
| [`rcond`](https://ww2.mathworks.cn/help/matlab/ref/rcond.html) | 条件数倒数                                |
| [`condeig`](https://ww2.mathworks.cn/help/matlab/ref/condeig.html) | 与特征值有关的条件数                      |
| [`det`](https://ww2.mathworks.cn/help/matlab/ref/det.html)   | 矩阵行列式                                |
| [`null`](https://ww2.mathworks.cn/help/matlab/ref/null.html) | 矩阵的零空间                              |
| [`orth`](https://ww2.mathworks.cn/help/matlab/ref/orth.html) | 适用于矩阵范围的标准正交基                |
| [`rank`](https://ww2.mathworks.cn/help/matlab/ref/rank.html) | 矩阵的秩                                  |
| [`rref`](https://ww2.mathworks.cn/help/matlab/ref/rref.html) | 简化的行阶梯形矩阵（Gauss-Jordan 消去法） |
| [`trace`](https://ww2.mathworks.cn/help/matlab/ref/double.trace.html) | 对角线元素之和                            |
| [`subspace`](https://ww2.mathworks.cn/help/matlab/ref/subspace.html) | 两个子空间之间的角度                      |
