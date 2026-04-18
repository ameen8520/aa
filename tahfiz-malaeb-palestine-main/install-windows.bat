@echo off
chcp 65001 >nul
echo ================================================
echo   تطبيق تحفيظ ملعب فلسطين - برنامج التثبيت
echo ================================================
echo.

REM التحقق من Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js غير مثبت!
    echo يرجى تثبيت Node.js من: https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ تم العثور على Node.js

REM التثبيت
echo.
echo 🔧 جاري تثبيت التطبيق...
cd tahfiz-desktop
call npm install

if %errorlevel% equ 0 (
    echo.
    echo ✅ تم التثبيت بنجاح!
    echo.
    echo 🚀 لتشغيل التطبيق اكتب:
    echo    npm run electron-dev
    echo.
    echo 📦 لبناء ملف التثبيت:
    echo    npm run electron-build
) else (
    echo ❌ ��دث خطأ في التثبيت
)

pause
