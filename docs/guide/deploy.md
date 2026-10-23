# 部署指南

QuickClass 提供三种使用方式，**按省事程度排序**。绝大多数老师从「公开体验环境」开始就够了。

---

## 一、公开体验环境（零部署，推荐先试）

最快上手、无需安装、无需配置 AI：

- **地址**：[https://modeai-quickclass.ms.show/](https://modeai-quickclass.ms.show/)
- 教师与学生**全部功能**可直接体验，平台已内置演示数据
- **教师端打开即自动登录演示账号**，无需输入账号密码；学生凭班级邀请码 `MATH2026` / `MATH2026B` 免密进入
- 体验环境会**随官方版本持续更新**，始终是最新功能

!!! warning "演示环境数据不长期保存"
    平台更新或周期性重置后，你创建的班级、课堂与对话记录会被清空。**请勿录入重要或真实信息**，学生建议使用化名。正式教学请走下面的「自部署」。

---

## 二、自部署（数据你自己掌握）

适合：**正式课堂教学、需要长期保存学生数据、或要求私有化部署**。源码开放，部署到自己服务器即可。

### 1. 获取源码

Gitee 仓库：[https://gitee.com/maoyouhui/quickclass-release](https://gitee.com/maoyouhui/quickclass-release)

```bash
git clone https://gitee.com/maoyouhui/quickclass-release.git
cd quickclass-release
```

### 2. 环境要求

| 项目 | 要求 |
|---|---|
| Node.js | 18.17 或更高版本 |
| npm | 9.x 或更高版本 |
| 数据库 | 内置单文件 SQLite，开箱即用，无需额外安装 |

```bash
node --version   # 应显示 v18.17.0 或更高
```

### 3. 启动服务（一键脚本）

=== "macOS / Linux"

    ```bash
    ./start.sh     # 启动，浏览器自动打开 http://localhost:3000
    ./stop.sh      # 停止
    ```
    若提示「权限被拒绝」，先执行 `chmod +x start.sh stop.sh`。

=== "Windows"

    双击项目目录下的 `start.bat` 启动（约 1–2 分钟），双击 `stop.bat` 停止。

### 4. 首次使用配置

1. 访问 `http://localhost:3000` → 「教师注册」→ 填写手机号、密码、姓名 → 完成注册
2. 进入「系统设置」配置 AI 服务（见下）
3. 「班级管理」创建班级 → **记录邀请码**
4. 「课堂管理」创建课堂 → 添加学习活动 → 分配班级 → 改为「**已启用**」
5. 学生访问 `http://<你的服务器IP>:3000/student`，输入姓名 + 邀请码即可开始学习

### 5. 配置 AI 服务（关键一步）

QuickClass 的对话、分析、出题都依赖大模型，**首次使用必须配置**：

1. 进入「系统设置」
2. 填写 **AI Base URL**（OpenAI 兼容接口，如通义千问、DeepSeek、智谱等）
3. 填写 **API Key** 与 **模型名称**（如 `qwen-turbo`、`deepseek-chat`）
4. 点击「测试连接」确认可用 → 点击「保存配置」

### 6. 生产环境建议

- **数据库备份**：默认单文件 `prisma/dev.db`，定期复制该文件到安全位置即可备份
- **HTTPS**：建议置于 Nginx / Caddy 之后并启用 HTTPS，学生端才能正常使用麦克风等需安全上下文的能力
- **密钥安全**：AI API Key 仅保存在你自己的环境，请勿公开

---

## 三、云托管 / 容器部署

QuickClass 是标准 Node.js 应用，可部署到任意支持 Node 的运行环境（云服务器、容器平台等）。要点：

- 构建：`npm run build` → 生产启动 `npm start`（监听 `3000` 端口，可用环境变量或反代修改）
- 需要持久化 `prisma/` 目录（含数据库）与上传文件目录
- 网关 / 代理若会改写 `Authorization` 头，需按官方说明适配鉴权头

具体云平台的镜像与编排以 Gitee 仓库说明为准。

---

## 常见问题

**Q：启动脚本报错「权限被拒绝」？**
A：macOS / Linux 上执行 `chmod +x start.sh stop.sh`。

**Q：Windows 上启动后浏览器未自动打开？**
A：手动访问 `http://localhost:3000`。

**Q：学生无法访问教师电脑上的服务？**
A：确保防火墙允许 3000 端口，学生用局域网 IP 访问（如 `http://192.168.1.100:3000`）。若要对公网开放，建议走云服务器部署并启用 HTTPS。

**Q：AI 无法回答问题？**
A：检查「系统设置」中 API Key 是否正确，点击「测试连接」验证。

**Q：如何备份 / 重置数据？**
A：停止服务后复制 `prisma/dev.db` 备份；重置执行 `npx prisma db push --force-reset && npx tsx prisma/seed-full.ts`（**会删除所有数据，不可恢复**）。
