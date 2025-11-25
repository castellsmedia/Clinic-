<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1zio4peLfXJiJBsU2Bj_sOZsOvM1fTkFA

## Run Locally

**Prerequisites:** Node.js (версия 18 или выше)

### Установка и запуск:

1. Установите зависимости:
   ```bash
   npm install
   ```

2. Создайте файл `.env` в корне проекта и добавьте ваш Gemini API ключ:
   ```bash
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

   Или скопируйте пример:
   ```bash
   cp .env.example .env
   ```
   Затем отредактируйте `.env` и добавьте ваш API ключ.

3. Запустите проект в режиме разработки:
   ```bash
   npm run dev
   ```

4. Откройте браузер и перейдите по адресу:
   ```
   http://localhost:3000
   ```

### Другие команды:

- **Сборка для продакшена:**
  ```bash
  npm run build
  ```

- **Предпросмотр продакшен сборки:**
  ```bash
  npm run preview
  ```
