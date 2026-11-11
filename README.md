

## Требования

- Node.js 20.19 или новее (подойдёт 22 LTS)
- npm 10 или новее

## Важно: состояние проекта в этом архиве

Архив собран в среде, где `npm install` не работал (registry.npmjs.org отвечал 403). Поэтому:

- папка `node_modules` в архив **не входит**, зависимости **не установлены**: React, React DOM, Vite, `@vitejs/plugin-react`, Tailwind CSS (`tailwindcss`, `@tailwindcss/vite`), Lucide (`lucide-react`), TypeScript и типы;
- все они перечислены в `package.json` и установятся командой `npm install` на вашем компьютере;
- `npm run dev` и `npm run build` (то есть сам Vite) в той среде **не запускались**. Код проверялся отдельно: типы с заглушками, сборка esbuild и прогон в Chromium. Если на вашей машине сборка выдаст ошибку, пришлите её текст.

## Запуск на Windows

1. Установите Node.js LTS (20.19 или новее, лучше 22) с https://nodejs.org. Проверьте в терминале: `node -v` и `npm -v`.
2. Распакуйте ZIP (правый клик → «Извлечь всё»), откройте папку `arsentiy-portfolio`.
3. Откройте в ней PowerShell или командную строку (в Проводнике: клик по адресной строке, набрать `cmd`, Enter).
4. Выполните:

```bat
npm install
npm run dev
```

Сайт откроется на `http://localhost:5173`. Остановка: `Ctrl+C`.

Для production-сборки: `npm run build` (результат в папке `dist/`), затем `npm run preview`.

Быстрый запуск двойным кликом: `start-dev.bat` (установит зависимости при первом запуске и запустит сайт) и `build.bat` (соберёт сайт).

