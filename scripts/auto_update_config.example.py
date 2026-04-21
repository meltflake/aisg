# AISG 数据自动更新 — 配置模板
# 复制为 auto_update_config.py 并填入真实值
# auto_update_config.py 已加入 .gitignore，不会提交到仓库

# ── Gmail SMTP 设置 ──────────────────────────────────────────────────────────
# 需要 Gmail App Password: Google 账号 → 安全 → 两步验证 → App passwords
SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USER = "your-email@gmail.com"
SMTP_PASSWORD = "xxxx-xxxx-xxxx-xxxx"  # Gmail App Password (16位)
EMAIL_TO = "your-email@gmail.com"

# ── 通知策略 ─────────────────────────────────────────────────────────────────
SEND_IF_NO_NEW = False  # True = 没有新内容也发邮件
