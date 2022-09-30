---
title: 许立成 C设计A题解
icon: code
description: 许立成 C语言程序设计A
category:
  - 题解
tag:
  - 题解
  - 教程
article: true
date: 2022-10-01
---

## 实验3

#### 问题 I: 求10个数的平均值

时间限制 : `1.000 sec` 内存限制 : `64 MB`

:::details

题目描述

输入10个整数，计算它们的平均值（输出保留1位小数）。 

**输入**

输入10个整数，空格隔开

**输出**

输出它们的平均数，保留一位小数

**样例输入**

```
2 3 4 5 6 7 8 9 10 20
```

**样例输出**

```
ave=7.4
```
:::

题解

:::details

::: tabs#lang

@tab C++

```cpp
//
// Created by flot on 2022/9/30.
//
#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    long long a{}, sum{};
    for (int i = 0; i < 10; i++)
    {
        cin >> a;
        sum = sum + a;
    }
    cout << "ave=" << fixed << setprecision(1) << sum * 1.0 / 10 << endl;
}
```

@tab C

```c
//
// Created by flot on 2022/9/30.
//
#include <stdio.h>

int main()
{
    long long a = 0;
    long long sum_result = 0;
    for (int i = 0; i < 10; i++)
    {
        scanf("%d", &a);
        sum_result = sum_result + a;
    }
    printf("ave=%.1f", sum_result * 1.0 / 10);
    return 0;
}
```

@tab Java

```java
import java.util.Scanner;
/**
 * @author flot
 */
public class Main {
    public static void main(String[] args) {
        long sum = 0;
        Scanner sc = new Scanner(System.in);
        String inputTemp = sc.nextLine();
        String[] inputData = inputTemp.split(" ");
        for (String a:inputData){
            sum = sum + Integer.parseInt(a);
        }
        System.out.printf("ave=%.1f\n",sum * 1.0 / 10);
    }
}

```

:::

:::


#### 问题 J: 求n的阶乘

时间限制 : `1.000 sec` 内存限制 : `64 MB`

:::details

**题目描述**

计算n!（1×2×3×……×n）

**输入**

输入一个正整数n（1≤n≤10）

**输出**

输出n!的值

**样例输入**

```
6
```

**样例输出**

```
6!=720
```

:::


题解

:::details

::: tabs#lang

@tab C++

```cpp
//
// Created by flot on 2022/9/30.
//
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    long long n{}, result{1};
    cin >> n;
    cout << n << "!=" << tgamma(n + 1) << endl;
    return 0;
}
```

@tab C

```c
//
// Created by flot on 2022/9/30.
//
#include <stdio.h>

int main()
{
    long long n;
    long long result = 1;
    scanf("%lld", &n);
    for (int i = 1; i <= n; i++)
        result = result * i;
    printf("%lld!=%lld", n, result);
    return 0;
}

```

@tab Java

```java
import java.util.Scanner;
/**
 * @author flot
 */
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long n = sc.nextInt();
        long result = 1;
        for (int i = 1; i <= n; i++) {
            result = result * i;
        }
        System.out.printf("%d!=%d",n,result);
    }
}

```
:::
:::
