@echo off
chcp 65001 >nul
cd /d "%~dp0"
if not exist node_modules (
  echo Installing dependencies...
  call npm install || goto :fail
)
call npm run dev
goto :eof
:fail
echo npm install failed.
pause
