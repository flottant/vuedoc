---
title: 第一课-基本操作与矩阵
icon: matlab
description: 计算，矩阵与基础命令
category:
  - 语言基础
tag:
  - 语言
  - MATLAB
article: true
---


## 将 MATLAB 当作计算器


$a\cos \left(\sqrt{\frac{(1+2+3+4)^3}{5}}\right)b$

$a\sin (\sqrt{\pi})+\ln (\tan (1))b$

$a\displaystyle 2^{3.5 \times 1.7}b$

$a\displaystyle e^{\sin (10)}b$

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

如果不加删除的变量，会清空所有。

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
