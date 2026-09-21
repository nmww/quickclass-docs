# QuickClass 使用文档

QuickClass（觉课智能体）的在线使用文档，基于 **MkDocs + Material** 构建，托管于 **ReadTheDocs**。

- 在线阅读：https://quickclass.readthedocs.io/
- 文档内容与 QuickClass 平台解耦：**更新文档不需要重新部署平台**。

## 本地预览

```bash
pip install -r requirements.txt
mkdocs serve          # http://127.0.0.1:8000
```

## 构建静态站点

```bash
mkdocs build          # 产物在 site/
```

## 目录结构

```
mkdocs.yml            # 站点与导航配置
requirements.txt      # 依赖（mkdocs-material）
.readthedocs.yaml     # ReadTheDocs 构建配置
docs/
├── index.md                    首页 / 总览
├── guide/
│   ├── getting-started.md      快速上手
│   ├── teacher.md              课堂、班级与学习活动
│   ├── import-export.md        导入导出与知识库
│   ├── analysis.md             学情分析与教学研究
│   ├── settings.md             系统配置与手册导出
│   ├── student.md              学生端
│   └── deploy.md               部署指南
├── workbuddy.md                WorkBuddy 技能支持
├── faq.md                      常见问题
└── changelog.md                更新记录
```

## 维护说明

- 内容改动：直接编辑 `docs/` 下的 Markdown，提交后 ReadTheDocs 会自动重新构建。
- 新增页面：在 `docs/` 下新建 `.md`，并在 `mkdocs.yml` 的 `nav` 中登记。
