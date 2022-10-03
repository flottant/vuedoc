---
title: Rust 在 VSCode 上的配置
description: 在 VSCode 上写 Rust
date: 2022-10-03
icon: rust
category:
  - 软件配置
tag:
  - rust	
  - IDE
isOriginal: true
---

## 配置 Rust

1. 在 https://rustup.rs/ 上，下载`rustu-init.exe`文件；

2. 运行它，然后在命令窗口中选择安装方式后，一路回车；

3. 在powershell中，通过 `rustup --version` 进行验证；`rustc -V`和 `cargo -V`也可以验证。

## 配置 VSCode

1. 安装 `rust-analyzer` 插件。

## Hello World!

1. 找到一个安放项目的文件夹，输入

```bash
cargo new hello_world
cd ./hello_world
```
现在就能在 `./src/` 目录下看见代码了。

2. 运行

```bash
cargo run
```
来运行项目。更多细节，请移步 [Rust 圣经](https://course.rs/first-try/cargo.html)