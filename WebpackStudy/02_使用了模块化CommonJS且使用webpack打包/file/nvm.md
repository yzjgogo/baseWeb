使用NVM（Node Version Manager）切换Node.js版本是一个简单的过程，可以帮助你在不同的项目中使用不同版本的Node.js。以下是使用NVM切换Node.js版本的基本步骤：

### 安装NVM

首先，确保你已经安装了NVM。如果还没有安装，你可以访问[NVM的GitHub页面](https://github.com/nvm-sh/nvm)查看安装指南。

对于**Linux和macOS**，安装命令通常是：

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

或者使用`wget`：

```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

对于**Windows**用户，需要使用[nvm-windows](https://github.com/coreybutler/nvm-windows)的一个不同版本，其安装过程将通过一个安装程序进行。

### 列出已安装的Node.js版本

安装NVM后，你可以列出所有已安装的Node.js版本：

```sh
nvm list
```

### 安装新的Node.js版本

如果你需要安装一个新的Node.js版本，可以使用：

```sh
nvm install <version>
```

例如，要安装Node.js的最新版本，你可以使用：

```sh
nvm install node
```

或者安装特定版本：

```sh
nvm install 14.17.0
```

### 切换Node.js版本

安装了多个Node.js版本后，你可以轻松切换到你需要的版本：

```sh
nvm use <version>
```

例如：

```sh
nvm use 14.17.0
```

这会切换到你指定的Node.js版本。

### 设置默认Node.js版本

为了避免每次打开新终端时都需要手动切换Node.js版本，你可以设置一个默认版本：

```sh
nvm alias default <version>
```

例如：

```sh
nvm alias default 14.17.0
```

这样，每次打开新终端时，NVM都会自动使用你设置的默认Node.js版本。

### 总结

NVM是一个非常有用的工具，可以帮助你管理和切换不同版本的Node.js。无论是开发新项目还是维护旧项目，能够根据需要切换Node.js版本都是非常方便的。