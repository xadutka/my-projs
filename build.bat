@echo off
chcp 65001 >nul
cd /d "%~dp0"
if not exist node_modules (
  call npm install || goto :fail
)
call npm run build || goto :fail
echo Done: see the dist folder.
pause
goto :eof
:fail
echo Failed.
pause
