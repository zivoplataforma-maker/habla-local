@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
 echo Necesitas instalar Node.js para iniciar el servidor local.
 echo Tambien podes abrir dist\index.html para usarlo sin servidor.
 pause
 exit /b 1
)
start "" http://localhost:4173
node server.cjs
pause
